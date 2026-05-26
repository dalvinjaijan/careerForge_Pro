import mongoose from "mongoose"

const educationSchema = new mongoose.Schema({
    institute: String,
    degree: String,
    startYear: String,
    endYear: String
})

const experienceSchema = new mongoose.Schema({
    company: String,
    role: String,
    description: String,
    startDate: String,
    endDate: String
})

const resumeSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    summary: String,

    education: [educationSchema],

    experience: [experienceSchema],

    skills: [String]
})

const Resume = mongoose.model("Resume", resumeSchema)

export default Resume