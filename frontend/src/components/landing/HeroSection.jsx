const HeroSection = () => {
  return (
    <section className="grid grid-cols-2 gap-10 px-20 py-20 items-center">

      <div>

        <p className="bg-indigo-100 text-indigo-700 inline-block px-4 py-2 rounded-full mb-6">
          AI enhanced Resume optimizer
        </p>

        <h1 className="text-6xl font-bold leading-tight">

          Optimize Your Resume,
          Beat ATS &
          <span className="text-indigo-600">
            {" "}Land More Interviews
          </span>

        </h1>

        <p className="text-gray-600 mt-6 text-lg">

          Upload your resume, paste the job description,
          and let AI rewrite and optimize your resume
          to match ATS keywords and impress recruiters.

        </p>

        <div className="flex gap-5 mt-8">

          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl">
            Get Started Free
          </button>

          <button className="border px-6 py-3 rounded-xl">
            See How It Works
          </button>

        </div>

      </div>

      <div className="bg-white shadow-2xl rounded-3xl p-8 border">

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt="resume"
          className="rounded-2xl"
        />

      </div>

    </section>
  )
}

export default HeroSection