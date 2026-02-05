"use client"
import { pixelToast, PixelToastContainer } from '@/component/Toast'
import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function SignUp() {
    const router=useRouter()
    const {data:session}=authClient.useSession()
    useEffect(() => {
      if(session?.user) router.replace('/')
    }, [router, session])
    

    const [isLoading, setisLoading] = useState(false)
    const handleSignup = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log("Name :", name, "\nEmail : ", email, "\nPassword : ", password)

        const { data, error } = await authClient.signUp.email(
            {
                email, name, password,
            },
            {
                onRequest: () => setisLoading(true),
                onSuccess: () => {
                    setisLoading(false),
                    pixelToast.success("Successfully Signed Up")
                    router.push('/generate')
                }
                , onError: (ctx) => {
                    setisLoading(false),
                    pixelToast.error("Error Signing in", ctx.error.message)
                }
            })
    }
    return (
        <div className='bg-black text-white w-full h-screen flex flex-col gap-4 items-center justify-center'>
            <div className="w-[80vw] sm:w-[50vw] lg:w-[30vw] px-8 h-96 border-4 text-sm md:text-lg shadow-[6px_6px_#cdcdcd]">
                <form onSubmit={handleSignup} className='flex flex-col justify-center items-center w-full h-full gap-[5%]'>
                    <input type="text" name='name' className="font-mono md:border-3 border-2 border-dashed focus:outline-dashed focus:outline-zinc-900 focus:outline-2 py-2 md:px-5 px-2 w-full mt-1" placeholder='Enter Your Name' />
                    <input type="email" name='email' className="font-mono md:border-3 border-2 border-dashed focus:outline-dashed focus:outline-zinc-900 focus:outline-2 py-2 md:px-5 px-2 w-full mt-1" placeholder='Enter Your Email' />
                    <input type="password" name='password' className="font-mono md:border-3 border-2 border-dashed focus:outline-dashed focus:outline-zinc-900 focus:outline-2 py-2 md:px-5 px-2 w-full mt-1" placeholder='Enter Your Password' />
                    <button disabled={isLoading} className='w-full bg-zinc-300 hover:bg-zinc-100 hover:border-zinc-100 active:bg-zinc-50 active:border-zinc-100 mt-3 font-black text-black retro text-[70%] border-zinc-300 py-3 border-2 shadow-[3px_3px_#afafaf] active:shadow-[-3px_-3px_#afafaf] active:translate-y-0.75 active:scale-[0.97] transition-all'>Create Account</button>
                </form>
            </div>
            <div className='text-zinc-400 font-mono tracking-[-1.5px]'>Already have an Account? <Link className='text-zinc-300 hover:font-semibold active:font-semibold tracking-tight hover:underline active:underline hover:text-zinc-50 active:text-zinc-50' href={'/login'}>Login</Link> </div>
        </div>
    )
}
