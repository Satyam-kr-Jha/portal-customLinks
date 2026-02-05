import EditDel from '@/component/EditDel';
import connectDB from '@/lib/route';
import urlModel from '@/models/urlModel';
import { redirect } from 'next/navigation';
import React from 'react'

const Analytics = async ({ params }) => {
  try {
    const { id } = await params;
    await connectDB();
    const url = await urlModel.findById(id);
    if (!url) redirect("/generate");
    return (
      <div className='w-full min-h-screen bg-zinc-900 text-white py-16 px-5'>
        <div>
          <div className='sm:flex sm:gap-2 w-full sm:justify-between px-2'>
            <div className='sm:w-[90%]'>
              <div className='retro md:text-[4vw] text-[3.5vh] underline my-2 flex justify-between items-start'>
                {url.title}
                <a href={url.originalUrl} target="_blank" rel="noopener noreferrer">
                  <img className='w-9' src="/arrow.svg" alt="" />
                </a>
              </div>
              <p className='font-mono text-lg pb-2 mx-5'>{url.description}</p>
            </div>
            <div className='hidden sm:flex retro border-4 bg-zinc-950/30 p-4 min-w-60 min-h-50 flex-col justify-self-center items-center justify-center'>
              <div className='w-full p-2 text-center bg-white text-black text-2xl font-black '>Clicks</div>
              <h1 className='text-[6rem] leading-normal -mb-6 px-4'>{url.analytic.click}</h1>
            </div>
          </div>
          <div className='retro text-sm m-2 flex md:flex-row gap-4 flex-col justify-between'>
            <h3>
              Original Link:{' '}
              <span className="text-lg font-mono  text-zinc-200 wrap-break-word">
                {url.originalUrl}
              </span>
            </h3>
            <h3>Custom Link: <span className='text-lg font-mono wrap-break-word'>{process.env.NEXT_PUBLIC_DOMAIN}{url.customUrl}</span></h3>
          </div>
        </div>
        <EditDel id={id}/>
        <div className='w-screen -ml-5 bg-zinc-700/80 h-1'/>
        <div className='flex justify-center my-6'>
          <div className='retro border-4 bg-zinc-950/50 p-4 mx-[2vw] min-w-[70vw] min-h-50 sm:hidden flex flex-col md:justify-self-auto justify-self-center items-center justify-center'>
            <div className='w-full text-center bg-white text-black text-2xl font-black py-2'>Clicks</div>
            <h1 className='text-[5.5rem] text-center min-w-full leading-normal -mb-6'>{url.analytic.click}</h1>
          </div>
        </div>
        <div className='w-full overflow-x-scroll no-scrollbar shadow-[4px_4px_#cdcdcd]'>
          <table className="w-full border-3 border-zinc-200 text-sm text-zinc-100 font-mono">
            <thead className="bg-zinc-200 text-black retro text-[65%]">
              <tr>
                <th className="px-2 py-3 text-left ">Country</th>
                <th className="px-2 py-3 text-left ">State</th>
                <th className="px-2 py-3 text-left ">City</th>
                <th className="px-2 py-3 text-left ">Date</th>
                <th className="px-2 py-3 text-left ">Time</th>
              </tr>
            </thead>
            <tbody>
              {url.analytic.visited.map((time, idx) => {
                const d = new Date(time);
                return (
                  <tr
                    key={idx}
                    className="odd:bg-zinc-800 even:bg-zinc-800/50"
                  >
                    <td className="p-2 border-b border-zinc-800">
                      {url.analytic.country[idx]}
                    </td>
                    <td className="px-3 py-2 border-b border-zinc-800">
                      {url.analytic.state[idx]}
                    </td>
                    <td className="px-3 py-2 border-b border-zinc-800">
                      {url.analytic.city[idx]}
                    </td>
                    <td className="px-3 py-2 border-b border-zinc-800">
                      {d.toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      }).replace(/\s/g, "-")}
                    </td>
                    <td className="px-3 py-2 border-b border-zinc-800">
                      {d.toLocaleTimeString("en-IN", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

        </div>
      </div>
    )
  } catch (err) {
    console.log(err.message)
    redirect("/generate");
  }
}

export default Analytics