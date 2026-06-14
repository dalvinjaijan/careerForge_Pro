import Resume from "../models/resumeSchema.js"

export const generateResume = async (req, res) => {
    try {

        const resume = await Resume.create(req.body)

        res.status(201).json({
            success: true,
            resume
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}