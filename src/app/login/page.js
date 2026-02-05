"use client"
import { pixelToast } from '@/component/Toast';
import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Login() {
    const [isLoading, setisLoading] = useState(false)
    const router=useRouter()
    const {data:session}=authClient.useSession()
    useEffect(() => {
      if(session?.user) router.replace('/')
    }, [router, session])
    
    async function handleLogin(e){
        e.preventDefault();
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        // console.log('formData : ', formData, "formData.email", formData.email, formData.password)
        const { data, error } = await authClient.signIn.email({
            email: formData.email,
            password: formData.password,
            callbackURL: '/generate'
        }, {
            onRequest: () => setisLoading(true),
            onSuccess: () => {
                setisLoading(false),
                pixelToast.success("Successfully Logged In")
            }
            , onError: (ctx) => {
                setisLoading(false),
                pixelToast.error("Error Signing in", ctx.error.message)
            }
        })
    }

    return (
        <div className='bg-black text-white w-full h-screen flex flex-col gap-4 items-center justify-center'>
            <div className="w-[80vw] sm:w-[40vw] lg:w-[30vw] px-8 text-sm md:text-lg h-96 border-4 shadow-[6px_6px_#cdcdcd]">
                <form onSubmit={handleLogin} className='flex flex-col justify-center items-center w-full h-full gap-[5%]'>
                    <input type="email" name='email' className="font-mono md:border-3 border-2 border-dashed focus:outline-dashed focus:outline-zinc-900 focus:outline-2 py-3 md:px-5 px-2 w-full mt-1" placeholder='Enter Your Email' />
                    <input type="password" name='password' className="font-mono md:border-3 border-2 border-dashed focus:outline-dashed focus:outline-zinc-900 focus:outline-2 py-3 md:px-5 px-2 w-full mt-1" placeholder='Enter Your Password' />
                    <button disabled={isLoading} className='w-full bg-blue-100 hover:bg-zinc-100 hover:border-zinc-100 active:bg-zinc-50 active:border-zinc-100 mt-3 font-black text-black retro text-[70%] border-zinc-300 py-3 border-2 shadow-[3px_3px_#babadb] hover:shadow-[-3px_-3px_#afafaf] active:shadow-[-3px_-3px_#afafaf] active:translate-y-0.75 hover:translate-y-0.75 active:scale-[0.96] transition-all'>Login Account</button>
                </form>
            </div>
            <div className='text-zinc-400 font-mono tracking-[-1.5px]'>Don't have an Account? <Link className='text-zinc-300 hover:font-semibold active:font-semibold tracking-tight hover:underline active:underline hover:text-zinc-50 active:text-zinc-50' href={'/signup'}>SignUp</Link> </div>
        </div>
    )
}
