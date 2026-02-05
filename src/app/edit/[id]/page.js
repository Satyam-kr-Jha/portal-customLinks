import EditForm from "@/component/EditForm"
import Project from "@/component/Project"
import connectDB from "@/lib/route"
import urlModel from "@/models/urlModel"

const Edit = async({params}) => {
    const {id}=await params
    await connectDB()
    const url= await urlModel.findById(id).lean() 
    return (
        <div className="w-full h-screen font-mono bg-zinc-900 md:px-6 px-3 md:py-20 py-16 text-white ">
            <EditForm id={id} initialTitle={url.title} initialDescription={url.description} initialCustomUrl={url.customUrl}/>
        </div>
    )
}
export default Edit