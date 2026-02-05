'use client'
import copy from "copy-to-clipboard";
import { useRouter } from "next/navigation";

const UrlTable = (props) => {
  const {urls}=props
  const router=useRouter();
  const viewAnalytics=(id)=>{
    router.push(`/analytics/${id}`);
  }
  return (
    <div className='md:mt-10 mt-5'>
      {urls.length == 0 && <h5 className='text-zinc-500 retro'>No URL Generated yet...</h5>}
        {urls.length > 0 &&<table className="w-full table-fixed border-collapse">
          <thead>
            <tr className='md:text-sm text-[40%] border-3 border-zinc-700 bg-zinc-800 text-left md:text-center'>
              <th className="hidden md:block md:w-[5%] pl-2 py-2 retro md:text-xs text-[40%]">Sno.</th>
              <th className="w-[45%] p-2 retro md:text-xs text-[40%]">Original Url</th>
              <th className="w-[45%] py-2 retro md:text-xs text-[40%]">Short Url</th>
              <th className="w-[10%] md:w-[5%] py-2 text-left retro md:text-xs text-[40%]">Copy</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((urldata, i) => (
              <tr key={i} onClick={()=>viewAnalytics(urldata._id)} className="md:text-sm text-[50%] border-3 border-zinc-700 md:text-center hover:bg-zinc-950/30">
                <td className="hidden md:block py-2 md:py-1.5">{i + 1}</td>
                <td className="py-2 md:py-1.5 px-2">
                  <div className="truncate max-w-full text-[85%]">
                    {urldata.originalUrl}
                  </div>
                </td>
                <td className="py-2 md:py-1.5">
                  <div className="truncate max-w-full">
                    {process.env.NEXT_PUBLIC_DOMAIN}{urldata.customUrl}
                  </div>
                </td>
                <td>
                  <div onClick={(e)=>{
                    e.stopPropagation()
                    copy(`http://localhost:3000/${urldata.customUrl}`)
                  }}
                  className="md:w-6 w-5 opacity-[0.5] hover:opacity-[0.8] active:opacity-[1]">
                    <img src="/copy.svg" alt="" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>}
      </div>
  )
}

export default UrlTable