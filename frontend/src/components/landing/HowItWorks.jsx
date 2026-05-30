const HowItWorks = () => {
  return (
    <section className="px-20 py-20">

      <h2 className="text-4xl font-bold text-center mb-16">
        How It Works
      </h2>

      <div className="grid grid-cols-3 gap-10">

        <div className="shadow-lg p-8 rounded-2xl">

          <h3 className="text-2xl font-semibold mb-4">
            Upload Resume
          </h3>

          <p className="text-gray-600">
            Upload your existing resume in PDF or DOCX format.
          </p>

        </div>

        <div className="shadow-lg p-8 rounded-2xl">

          <h3 className="text-2xl font-semibold mb-4">
            Paste Job Description
          </h3>

          <p className="text-gray-600">
            Add the target job description you are applying for.
          </p>

        </div>

        <div className="shadow-lg p-8 rounded-2xl">

          <h3 className="text-2xl font-semibold mb-4">
            Get Optimized Resume
          </h3>

          <p className="text-gray-600">
            AI rewrites and improves your ATS score instantly.
          </p>

        </div>

      </div>

    </section>
  )
}

export default HowItWorks