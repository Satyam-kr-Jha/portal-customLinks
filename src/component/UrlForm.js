"use client"
import { useRouter } from "next/navigation"
import { PixelToastContainer, pixelToast } from "./Toast"
import { useRef } from "react"
const UrlForm = () => {
  const pasteRef= useRef()
  const handlePaste=async()=>{
    const text= await navigator.clipboard.readText()
    if(text){
      pasteRef.current.value=text;
    }
  }
  
  
  const router = useRouter()
  const genrateLink = async (e) => {
    e.preventDefault()
    const formData = {
      title: e.target.title.value,
      description: e.target.description.value,
      originalUrl: e.target.originalUrl.value,
      customUrl: e.target.customUrl.value
    }
    try {
      const res = await fetch('/api/yoururl', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      if (res.ok) {
        pixelToast.success(data.message);
        e.target.reset()
        router.refresh()
      } else {
        pixelToast.error(data.message || "Error Generating custom URL")
      }
    } catch (e) {
      pixelToast.error('Failed to create link:');
    }
  }
  return (
    <div className="relative border-3 border-white/90 p-4 mb-4">
      <p className="pl-0.5 retro absolute bg-zinc-900 md:-top-4 -top-2 left-5 md:text-lg text-[60%]">Create custom URL</p>

      <form onSubmit={genrateLink}>
        <div className="grid md:grid-cols-2 md:gap-5 grid-cols-1 gap-2">
          <div className='md:text-lg text-[60%] tracking-tighter'>
            <label htmlFor="name">Enter Your Project Name :</label>
            <input type="text" required id="name" name="title" className="md:border-3 border-2 border-dashed focus:outline-dashed focus:outline-zinc-900 focus:outline-2 py-2 md:px-5 px-2 w-full mt-1" placeholder='Portal' />
          </div>

          <div className='md:text-lg text-[60%] tracking-tighter'>
            <label htmlFor="originalUrl">Enter Your Original URL :</label>
            <div className="flex items-center">
            <input ref={pasteRef} type="url" required id="originalUrl" name="originalUrl" className="md:border-3 border-2 border-dashed focus:outline-dashed focus:outline-zinc-900 focus:outline-2 py-2 md:px-5 px-2 w-full lg:w-[90%] mt-1" placeholder='https://yourOriginalVeryLongUrl.com' />
            <img onClick={handlePaste} className="xl:w-[2.9rem] h-[3.1rem] lg:w-[3.1rem] lg:inline-block hidden p-2 mt-1 border-y-3 border-r-3 border-dashed" src="/paste.svg" alt="paste" />
            </div>
          </div>

          <div className='md:text-lg text-[60%] tracking-tighter'>
            <label htmlFor="Description">Enter Your Project Description :</label>
            <textarea id="Description" required name="description" className="md:border-3 border-2 border-dashed focus:outline-dashed focus:outline-zinc-900 focus:outline-2 py-2 md:px-5 px-2 w-full h-30 mt-1 resize-none" placeholder='Portal shortens your URL and create custom Links' />
          </div>

          <div className='md:text-lg text-[60%] tracking-tighter'>
            <label htmlFor="customUrl">Enter Your Custom URL Text:</label>
            <input type="text" id="customUrl" required name="customUrl" className="md:border-3 border-2 border-dashed focus:outline-dashed focus:outline-zinc-900 focus:outline-2 py-2 md:px-5 px-2 w-full mt-1" placeholder={`mario -> ${process.env.NEXT_PUBLIC_DOMAIN}mario`} />

            <div className="md:w-full md:text-center md:inline-block mt-4">
              <button type="submit" className='retro text-[85%] md:text-sm bg-green-500 w-[99.5%] md:py-3.5 py-1.5 px-10 border-b-5 border-r-5 active:border-t-7 active:border-l-7 active:border-b-0 active:border-r-0 hover:border-b-7 hover:border-r-7  border-green-900 hover:bg-green-600 active:bg-green-700'>Create Custom URL</button>
            </div>
          </div>
        </div>
      </form>
    </div>

  )
}
export default UrlForm