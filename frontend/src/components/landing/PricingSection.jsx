const PricingSection = () => {
  return (
    <section id="pricing" className="px-20 py-20">

      <h2 className="text-4xl font-bold text-center mb-16">
        Pricing
      </h2>

      <div className="grid grid-cols-2 gap-10">

        <div className="border rounded-3xl p-10">

          <h3 className="text-3xl font-bold mb-4">
            Free
          </h3>

          <h1 className="text-5xl font-bold mb-6">
            $0
          </h1>

          <ul className="space-y-4 text-gray-600">

            <li>1 Resume</li>

            <li>Basic ATS Scan</li>

            <li>Standard Templates</li>

          </ul>

        </div>

        <div className="bg-indigo-600 text-white rounded-3xl p-10">

          <h3 className="text-3xl font-bold mb-4">
            Pro
          </h3>

          <h1 className="text-5xl font-bold mb-6">
            $9.99
          </h1>

          <ul className="space-y-4">

            <li>Unlimited Resumes</li>

            <li>AI Rewrite & Optimization</li>

            <li>Cover Letter Generator</li>

            <li>Premium Templates</li>

          </ul>

        </div>

      </div>

    </section>
  )
}

export default PricingSection