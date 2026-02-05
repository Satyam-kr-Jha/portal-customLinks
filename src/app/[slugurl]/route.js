import connectDB from "@/lib/route";
import urlModel from "@/models/urlModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const { slugurl } = await params;
        if (slugurl === 'favicon.ico') {
            return new NextResponse(null, { status: 204 });
        }
        const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ||
            req.headers.get("x-real-ip") || "127.0.0.1";
        let geo = { country_name: 'Unknown', region: 'Unknown' };

        try {
            const geoRes = await fetch(`https://ipapi.co/${ip}/json/`, {cache: "no-store",});
            if (geoRes.ok) geo = await geoRes.json();
        } catch (error) {
            console.log('Geo API failed, using defaults');
        }
        await connectDB()
        const url = await urlModel.findOneAndUpdate(
            { customUrl: slugurl },
            {
                $inc: { 'analytic.click': 1 },
                $push: {
                    'analytic.country': geo.country_name || 'Unknown',
                    'analytic.state': geo.region || 'Unknown',
                    'analytic.city': geo.city || 'Unknown',
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