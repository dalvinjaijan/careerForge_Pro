import { useSelector } from "react-redux";

const DashboardStats = () => {

  const {
    totalResumes,
    averageATS,
    highestATS,
  } = useSelector(
    state => state.dashboard
  );

  const user =
    useSelector(
      state => state.auth.user
    );

  return (

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

      <div className="bg-white rounded-2xl shadow-md p-6">

        <p className="text-gray-500">
          Total Resumes
        </p>

        <h2 className="text-4xl font-bold mt-2 text-blue-700">

          {totalResumes}

        </h2>

      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">

        <p className="text-gray-500">
          Average ATS
        </p>

        <h2 className="text-4xl font-bold mt-2 text-green-600">

          {averageATS}%

        </h2>

      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">

        <p className="text-gray-500">
          Highest ATS
        </p>

        <h2 className="text-4xl font-bold mt-2 text-purple-600">

          {highestATS}%

        </h2>

      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">

        <p className="text-gray-500">
          Current Plan
        </p>

        <h2
          className={`text-4xl font-bold mt-2 ${
            user?.plan === "pro"
              ? "text-emerald-600"
              : "text-orange-500"
          }`}
        >

          {user?.plan === "pro"
            ? "PRO"
            : "FREE"}

        </h2>

      </div>

    </div>

  );

};

export default DashboardStats;