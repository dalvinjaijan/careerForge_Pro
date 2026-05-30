const StatsSection = () => {
  return (
    <section className="px-20 py-10">

      <div className="bg-indigo-700 text-white rounded-3xl grid grid-cols-4 p-10">

        <div>
          <h1 className="text-4xl font-bold">
            85%
          </h1>

          <p>Average ATS Increase</p>
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            10K+
          </h1>

          <p>Resumes Optimized</p>
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            5K+
          </h1>

          <p>Happy Users</p>
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            4.9/5
          </h1>

          <p>User Rating</p>
        </div>

      </div>

    </section>
  )
}

export default StatsSection