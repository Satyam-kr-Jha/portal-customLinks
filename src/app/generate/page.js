import UrlForm from '@/component/UrlForm'
import UrlTable from '@/component/UrlTable'
import connectDB from '@/lib/route';
import urlModel from '@/models/urlModel';
import { auth } from '@/lib/auth';
import { headers } from "next/headers";
import { redirect } from 'next/navigation';

const Generate = async () => {
const session = await auth.api.getSession({
    headers: await headers()
})
if(!session?.user) return redirect('/login')


  await connectDB();
  const allUrls = await urlModel.find().sort({ createdAt: -1 })
  console.log(session?.user)
  return (
    <div className="w-full min-h-screen font-mono bg-zinc-900 md:px-6 px-3 md:py-20 py-16 text-white">
      {(session?.user.email===process.env.ADMIN_EMAIL)? <div><UrlForm/>
      <UrlTable urls={JSON.parse(JSON.stringify(allUrls))}/></div>: <div className='w-full h-full text-center flex items-center justify-center text-[7vw] retro text-zinc-800'>
        <h1>You're Not <br /> Eligible</h1>
        </div> }
    </div>
  )
}
export default Generate