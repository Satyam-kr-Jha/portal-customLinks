import mongoose from "mongoose";

const urlSchema= new mongoose.Schema({
    originalUrl:{
        type: String,
        required: true,
    },
    customUrl:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    title:{
        type: String,
        required: true,
    },
    description: String,
    analytic:{
        click:{
            type: Number,
            default: 0
        },
        country: [String],
        state: [String],
        city: [String],
        visited: [Date]
    }
},{timestamps: true})

const urlModel=mongoose.models.url || mongoose.model('url', urlSchema)

export default urlModel;