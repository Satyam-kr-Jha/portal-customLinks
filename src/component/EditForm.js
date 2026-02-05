"use client"
import React from 'react'
import { useRouter } from "next/navigation"
import { pixelToast } from "@/component/Toast"
import { useState } from "react"
import Project from './Project'

export default function EditForm({id, initialTitle, initialDescription, initialCustomUrl}){
    const [title, settitle] = useState(initialTitle)
    const [description, setdescription] = useState(initialDescription)
    const [customUrl, setcustomUrl] = useState(initialCustomUrl)

    const router = useRouter()
    const updateLink = async (e) => {
        e.preventDefault()
        const formData = {
            title: title,
            description: description,
            customUrl: customUrl
        }
        try {
            const res = await fetch(`/api/yoururl/${id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json();
            if (res.ok) {
                pixelToast.success(data.message);
                router.push(`/analytics/${id}`)
            } else {
                pixelToast.error(data.message || "Error Updating custom URL")
            }
        } catch (e) {
            pixelToast.error('Failed to create link', e);
        }
    }

    return (
        <div className='w-full grid md:grid-cols-2'>
        <div className="relative border-3 border-white/90 p-4 w-full">
            <p className="pl-0.5 retro absolute bg-zinc-900 md:-top-4 -top-2 left-5 md:text-lg text-[60%]">Update URL</p>
            <form onSubmit={updateLink}>
                <div className='md:text-lg text-[60%] tracking-tighter'>
                    <label htmlFor="name">Enter Your Project Name :</label>
                    <input onChange={(e)=>settitle(e.target.value)} type="text" required id="name" name="title" className="md:border-3 border-2 border-dashed focus:outline-dashed focus:outline-zinc-900 focus:outline-2 py-2 md:px-5 px-2 w-full mt-1" value={title} />
                </div>

                <div className='md:text-lg text-[60%] tracking-tighter'>
                    <label htmlFor="Description">Enter Your Project Description :</label>
                    <textarea onChange={(e)=>setdescription(e.target.value)} id="Description" required name="description" className="md:border-3 border-2 border-dashed focus:outline-dashed focus:outline-zinc-900 focus:outline-2 py-2 md:px-5 px-2 w-full h-30 mt-1 resize-none" value={description} />
                </div>

                <div className='md:text-lg text-[60%] tracking-tighter'>
                    <label htmlFor="customUrl">Enter Your Custom URL Text:</label>
                    <input onChange={(e)=>setcustomUrl(e.target.value)} type="text" id="customUrl" required name="customUrl" className="md:border-3 border-2 border-dashed focus:outline-dashed focus:outline-zinc-900 focus:outline-2 py-2 md:px-5 px-2 w-full mt-1" value={customUrl} />

                    <div className="md:w-full md:text-center md:inline-block mt-4">
                        <button type="submit" className='retro text-[85%] md:text-sm bg-yellow-300 text-black font-black w-[99.5%] md:py-3.5 py-1.5 px-10 border-b-5 border-r-5 active:border-t-7 active:border-l-7 active:border-b-0 active:border-r-0 hover:border-b-7 hover:border-r-7  border-yellow-600/70 hover:bg-yellow-400 active:bg-yellow-300'>Update Link</button>
                    </div>
                </div>
            </form>
            
        </div>
        <div className='h-1/2'>
          <Project name={title} description={description} link={process.env.NEXT_PUBLIC_DOMAIN+customUrl} />
        </div>
        </div>
    )
}
