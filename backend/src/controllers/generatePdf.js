import puppeteer from "puppeteer";

export const generatePDF =
  async (req, res) => {

    try {

      const { resumeId } =
            req.params;
        console.log("resume id",resumeId)

      const browser =
        await puppeteer.launch({
          headless: true,
        });

      const page =
        await browser.newPage();

      await page.goto(
        `${process.env.FRONTEND_URL}/resume-pdf/${resumeId}`,
        {
          waitUntil:
            "networkidle0",
        }
      );

      const pdf =
        await page.pdf({
          format: "A4",

          printBackground:
            true,

          margin: {
            top: "10mm",
            right: "10mm",
            bottom: "10mm",
            left: "10mm",
          },
        });

      await browser.close();

      res.set({
        "Content-Type":
          "application/pdf",

        "Content-Disposition":
          "attachment; filename=ATS-Resume.pdf",
      });

      res.send(pdf);

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "PDF generation failed",
      });

    }
};