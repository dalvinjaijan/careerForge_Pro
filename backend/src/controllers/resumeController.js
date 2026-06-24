import Resume from "../models/resumeSchema.js"
import groq from "../config/groq.js"
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import User from "../models/userSchema.js";


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

export const analyzeATS = async (
  req,
  res
) => {
  try {

    const {
      resume,
      jobDescription,
    } = req.body;
    console.log("req",req.body)

    if (
      !resume ||
      !jobDescription
    ) {
      return res
        .status(400)
        .json({
          message:
            "Resume and Job Description are required",
        });
    }

    const prompt = `
You are an ATS (Applicant Tracking System).

Analyze the resume against the job description.

IMPORTANT:

- score must be an integer between 0 and 100.
- Never return decimal values like 0.85 or 0.9.
- Example: 85
- Understand equivalent technologies.
- Treat Node.js, NodeJS and Node as the same skill.
- Treat React and ReactJS as the same skill.
- Treat MongoDB and Mongo DB as the same skill.
- Match concepts semantically, not only exact words.

Resume:

${JSON.stringify(resume)}

Job Description:

${jobDescription}

Return ONLY valid JSON.

{
  "score": 0,
  "matchedKeywords": [],
  "missingKeywords": [],
  "suggestions": []
}
`;

    const response =
      await groq.chat.completions.create({
        model:
          "llama-3.3-70b-versatile",

        temperature: 0,

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    const content =
      response.choices[0]
        .message.content
        .trim();
      const cleaned =
  content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();


    const result =
      JSON.parse(cleaned);
    console.log("cleaned",cleaned)

    return res.status(200).json(
      result
    );

  } catch (error) {

    console.error(
      "ATS Analysis Error:",
      error
    );

    return res.status(500).json({
      message:
        "ATS analysis failed",
    });
  }
};

export const rewriteResume = async (
  req,
  res
) => {
  try {

    const {
      resume,
      jobDescription,
    } = req.body;

    if (
      !resume ||
      !jobDescription
    ) {
      return res
        .status(400)
        .json({
          message:
            "Resume and Job Description are required",
        });
    }

    const prompt = `
You are a professional ATS Resume Writer.

Rewrite the resume to maximize ATS score.

Rules:

1. Preserve factual accuracy.
2. Do not invent experience.
3. Improve wording.
4. Add relevant ATS keywords from the job description.
5. Convert responsibilities into achievement-focused bullet points.
6. Use strong action verbs.
7. Keep resume ATS friendly.
8. Single-column format.
9. Use concise professional language.

Resume:

${JSON.stringify(resume)}

Job Description:

${jobDescription}

Return ONLY valid JSON.

{
  "fullName": "",
  "email": "",
  "phone": "",
  "location": "",
  "linkedin": "",
  "github": "",

  "summary": "",

  "skills": [],

  "experience": [
    {
      "company": "",
      "position": "",
      "duration": "",
      "achievements": []
    }
  ],

  "projects": [
    {
      "title": "",
      "technologies": [],
      "achievements": []
    }
  ],

  "education": [
    {
      "institution": "",
      "degree": "",
      "year": ""
    }
  ]
}
`;

    const response =
      await groq.chat.completions.create({
        model:
          "llama-3.3-70b-versatile",

        temperature: 0.3,

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    const content =
      response.choices[0]
        .message.content
        .trim();
    const cleaned =
  content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

    const optimizedResume =
      JSON.parse(cleaned);

    return res.status(200).json({
      optimizedResume,
    });

  } catch (error) {

    console.error(
      "Resume Rewrite Error:",
      error
    );

    return res.status(500).json({
      message:
        "Resume rewrite failed",
    });
  }
};





export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF file uploaded",
      });
    }

    // Extract text from PDF
   const pdf = await pdfjsLib.getDocument({
  data: new Uint8Array(req.file.buffer),
}).promise;

let extractedText = "";

for (let i = 1; i <= pdf.numPages; i++) {
  const page = await pdf.getPage(i);

  const content =
    await page.getTextContent();

  extractedText +=
    content.items
      .map(item => item.str)
      .join(" ") + "\n";
}
    // Send extracted text to Groq
    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0,
        messages: [
          {
            role: "system",
            content: `
Extract resume information and return ONLY valid JSON.

Return in this format:

{
  "fullName": "",
  "email": "",
  "phone": "",
  "summary": "",
  "skills": [],
  "education": [],
  "experience": [],
  "projects": []
}

Do not wrap the response in markdown.
Do not include \`\`\`json.
Return only JSON.
            `,
          },
          {
            role: "user",
            content: extractedText,
          },
        ],
      });

    const aiResponse =
      completion.choices[0].message.content;

    const resumeData =
      JSON.parse(aiResponse);
    console.log("response",resumeData)

    return res.status(200).json({
      success: true,
      originalResume: resumeData,
    });
  } catch (error) {
    console.error("Resume Upload Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to process resume",
    });
  }
};

export const saveResume =
async (
  req,
  res
) => {
  try {
    console.log("userID",req.userId)
    const resume =
      await Resume.create({

        userId:
          req.userId,

        originalResume:
          req.body.originalResume,

        optimizedResume:
          req.body.optimizedResume,

        atsScore:
          req.body.atsScore,

        jobDescription:
          req.body.jobDescription
      });
    console.log("resume",resume)

    await User.findByIdAndUpdate(
      req.userId,
      {
        $inc: {
          resumesCreated: 1
        }
      }
    );

    res.json(resume);
  }
  catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to save resume",
    });

  }
};


export const getResumeById =
  async (req, res) => {

    try {

      const resume =
        await Resume.findById(
          req.params.resumeId
        );

      if (!resume) {
        return res.status(404).json({
          message:
            "Resume not found",
        });
      }

      res.json(resume);

    } catch (error) {

      res.status(500).json({
        message:
          "Failed to fetch resume",
      });

    }
};