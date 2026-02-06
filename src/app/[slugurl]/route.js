import connectDB from "@/lib/route";
import urlModel from "@/models/urlModel";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const { slugurl } = await params;
        if (slugurl === 'favicon.ico') {
            return new NextResponse(null, { status: 204 });
        }
        const h = headers();

        const geo = {
            country: h.get("x-vercel-ip-country") || "Unknown",
            region: h.get("x-vercel-ip-country-region") || "Unknown",
            city: h.get("x-vercel-ip-city") || "Unknown",
        };
        await connectDB()
        const url = await urlModel.findOneAndUpdate(
            { customUrl: slugurl },
            {
                $inc: { 'analytic.click': 1 },
                $push: {
                    'analytic.country': geo.country,
                    'analytic.state': geo.region,
                    'analytic.city': geo.city,
                    'analytic.visited': new Date()
                },
            },
            { new: true }
        );
        if (!url) return NextResponse.json({ message: "No Such Url found. Please check your Link" }, { status: 400 })
        return NextResponse.redirect(url.originalUrl);
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 })
    }
}