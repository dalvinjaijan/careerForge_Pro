import Resume from "../models/resumeSchema.js"
import groq from "../config/groq.js"

export const createResume = async (req, res) => {
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
      jobDescription
      } = req.body;
      console.log("resume",resume,jobDescription)

    const keywordPrompt = `
Extract the most important ATS keywords
from the following Job Description.

Return ONLY a valid JSON array.

Job Description:

${jobDescription}
`;

    const keywordResponse =
      await groq.chat.completions.create({

        model:
          "llama-3.3-70b-versatile",

        messages: [
          {
            role: "user",
            content: keywordPrompt
          }
        ]
      });
      console.log("keyword",keywordResponse)

    const keywordText =
      keywordResponse.choices[0]
        .message.content;

    const keywords =
      JSON.parse(keywordText);

    const resumeText =
      JSON.stringify(
        resume
      ).toLowerCase();

    const matchedKeywords =
      keywords.filter(keyword =>
        resumeText.includes(
          keyword.toLowerCase()
        )
      );

    const missingKeywords =
      keywords.filter(keyword =>
        !resumeText.includes(
          keyword.toLowerCase()
        )
      );

    const score =
      Math.round(
        (
          matchedKeywords.length /
          keywords.length
        ) * 100
          );
      console.log('score',score)

    res.json({
      score,
      keywords,
      matchedKeywords,
      missingKeywords
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "ATS analysis failed"
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
      jobDescription
    } = req.body;

    const prompt = `
You are a professional ATS
resume writer.

Job Description:

${jobDescription}

Candidate Resume:

${JSON.stringify(resume)}

Rewrite ONLY the experience section.

Requirements:

1. Increase ATS score.
2. Include relevant keywords.
3. Maintain factual accuracy.
4. Return clean bullet points.

Return only rewritten experience.
`;

    const response =
      await groq.chat.completions.create({

        model:
          "llama-3.3-70b-versatile",

        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      });

    const optimizedExperience =
      response.choices[0]
        .message.content;
console.log("optimizedExperience",optimizedExperience)
    res.json({
      optimizedExperience
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Resume rewrite failed"
    });
  }
};