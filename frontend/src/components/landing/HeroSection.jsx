const HeroSection = () => {
  return (
    <section className="grid grid-cols-2 gap-10 px-20 py-20 items-center mt-20">
      <div>
        <p className="bg-indigo-100 text-indigo-700 inline-block px-4 py-2 rounded-full mb-6">
          AI enhanced Resume optimizer
        </p>

        <h1 className="text-5xl font-bold leading-tight">
          <span className="text-[#0CDBB4]">Optimize</span> Your Resume, Beat ATS
          &<span className="text-blue-900"> Land More Interviews</span>
        </h1>

        <p className="text-gray-600 mt-6 text-lg">
          Upload your resume, paste the job description, and let AI rewrite and
          optimize your resume to match ATS keywords and impress recruiters.
        </p>

        <div className="flex gap-5 mt-8">
          <button className="bg-[#0CDBB4] text-white px-6 py-3 rounded-xl hover:bg-[#00b190] cursor-pointer">
            Get Started Free
          </button>

          <button className="border border-[#0CDBB4] px-6 py-3 rounded-xl hover:bg-[#01cea9] hover:text-white cursor-pointer">
            See How It Works
          </button>
        </div>
      </div>

      <div className="bg-white p-8">
        <img
          src="/section_1.png"
          alt="resume"
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}

export default HeroSection