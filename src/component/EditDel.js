"use client"
import {useRouter } from 'next/navigation'
import React from 'react'

const EditDel = ({id}) => {
    const router= useRouter();
    async function handleEdit(){
        router.push(`/edit/${id}`)        
    }
    async function handleDelete(){
        await fetch(`/api/yoururl/${id}`,{
            method:'DELETE'
        })
        router.push('/generate')
    }
    return (
        <div className='flex w-full gap-5 px-5 my-5 justify-between'>
            <div onClick={handleEdit} className='h-10 md:px-5 p-2 bg-zinc-800 shadow-[4px_4px_#353535] hover:text-yellow-200 active:text-yellow-400 flex items-center gap-2 transition hover:cursor-pointer'>
                <svg className='w-8 h-8 fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z" /></svg>
                <span className='hidden md:inline text-xl retro'>EDIT</span>
            </div>
            <div onClick={handleDelete} className='h-10 md:px-5 p-2 bg-zinc-800 shadow-[4px_4px_#353535] active:text-red-500 hover:text-red-400 flex items-center gap-2 transition hover:cursor-pointer'>
                <svg className='w-8 h-8 fill-current' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z" /></svg>
                <span className='hidden md:inline text-xl retro'>DELETE</span>
            </div>
        </div>
    )
}

export default EditDel