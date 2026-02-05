import connectDB from "@/lib/route";
import urlModel from "@/models/urlModel";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
    await connectDB()
    const {title, description, originalUrl, customUrl}=await req.json();
    if(!title || !description || !originalUrl || !customUrl) return NextResponse.json({message:"Please fill all details"},{status:400})
    const ifExist=await urlModel.findOne({originalUrl})
    if (ifExist) return NextResponse.json({message:"Already Exists...", url:ifExist},{status:400})
    await urlModel.create({
        title, description, originalUrl, customUrl
    })
    
    return NextResponse.json({message: "Url created successfully"},{status:201})
    }catch(err){
        return NextResponse.json({message:err.message}, {status:500})
    }
}

// Never make get function in rest api