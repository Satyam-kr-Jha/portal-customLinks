import connectDB from "@/lib/route";
import urlModel from "@/models/urlModel";
import { NextResponse } from "next/server";


export async function PUT(req, {params}) {
    try {
        const { slugId } =await params
        const {customUrl, title, description}=await req.json()
        await connectDB()
        const updatedUrl = await urlModel.findByIdAndUpdate(slugId, { customUrl, title, description }, { new: true })
        if (!updatedUrl) {
            return NextResponse.json({ message: "URL not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "URL updated successfully", updatedUrl }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
export async function DELETE(req, {params}) {
    try {
        const { slugId } = await params
        await connectDB()
        const url = await urlModel.findByIdAndDelete(slugId)
        if (!url) {
            return NextResponse.json({ message: "URL not found" }, { status: 404 });
        }
        return NextResponse.json({ message: 'URL deleted' }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}