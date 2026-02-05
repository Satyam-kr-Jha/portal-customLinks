import Project from "@/component/Project";
import connectDB from "@/lib/route";
import urlModel from "@/models/urlModel";

export default async function Home() {
  await connectDB()
  const allUrls=await urlModel.find().lean()

  return (
    <div className="w-full min-h-screen bg-zinc-900 px-5 sm:py-16 py-5">
        {(allUrls.length==0) && <div className="retro -my-16 text-zinc-700/50 w-full h-screen flex justify-center items-center text-[7.5vw] text-center">NO PROJECTS <br/> TO SHOW</div>
          }
      <div className="grid md:grid-cols-2 grid-cols-1">
        {allUrls.map((urlData, idx)=>(
          <div key={idx}>
          <Project name={urlData.title} description={urlData.description} link={process.env.NEXT_PUBLIC_DOMAIN+urlData.customUrl} QR={true} />
          </div>
        ))}
      </div>
    </div>
  );
}
