import { Link } from "react-router-dom"

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
          <Link to={"/get-started"}>
            <button className="bg-[#0CDBB4] hover:bg-[#00bb99] text-white px-6 py-3 rounded-xl">
              Get Started Free
            </button>
          </Link>

          <button className="border border-[#0CDBB4] px-6 py-3 rounded-xl hover:bg-[#01cea9] hover:text-white cursor-pointer">
            See How It Works
          </button>
        </div>
        <div className="flex items-center mt-10">
          <div className="flex -space-x-3 pr-3">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
              alt="user3"
              className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[1]"
            />
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="user1"
              className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[2]"
            />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="user2"
              className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[3]"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
              alt="user3"
              className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[4]"
            />
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="user5"
              className="size-8 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[5]"
            />
          </div>

          <div>
            <div className="flex ">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star text-transparent fill-[#0CDBB4]"
                    aria-hidden="true"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                ))}
            </div>
            <p className="text-sm text-gray-700">Used by 10,000+ users</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8">
        <img src="/section_1.png" alt="resume" className="rounded-2xl" />
      </div>
    </section>
  );
}

export default HeroSection