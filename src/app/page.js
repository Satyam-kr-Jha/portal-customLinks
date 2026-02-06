import Project from "@/component/Project";
import connectDB from "@/lib/route";
import urlModel from "@/models/urlModel";
import { unstable_noStore } from "next/cache";

export default async function Home() {
  unstable_noStore()
  await connectDB()
  const allUrls = await urlModel.find({},{title:1, description:1, customUrl:1, _id:0}).lean()

  if (allUrls.length === 0) {
    return (
      <div className="w-full min-h-screen bg-zinc-900 px-5 sm:py-16 py-5">
        <div className="retro -my-16 text-zinc-700/50 w-full h-screen flex justify-center items-center text-[7.5vw] text-center">NO PROJECTS <br /> TO SHOW</div>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-zinc-900 px-5 sm:py-16 py-5">
      <div className="grid md:grid-cols-2 grid-cols-1">
        {allUrls.map((urlData, idx) => (
          <div key={idx}>
            <Project name={urlData.title} description={urlData.description} link={process.env.NEXT_PUBLIC_DOMAIN + urlData.customUrl} QR={true} />
          </div>
        ))}
      </div>
    </div>
  );
}
