import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import api from "../services/axiosInstance";

import DashboardStats from "../components/DashboardStats";
import ResumeCard from "../components/ResumeCard";

import {
  setDashboard,
  setLoading,
} from "../redux/slices/dashboardSlice";

import { useState } from "react";

const DashboardPage = () => {

  const dispatch =
    useDispatch();

  const {
    resumes,
    loading,
  } = useSelector(
    state => state.dashboard
  );

  const user =
    useSelector(
      state => state.auth.user
    );

  const [
    search,
    setSearch
  ] = useState("");

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard =
    async () => {

      try {

        dispatch(
          setLoading(true)
        );

        const response =
          await api.get(
            "/dashboard"
          );

        dispatch(
          setDashboard(
            response.data
          )
        );

      } catch (error) {

        alert(
          error.response?.data?.message ||
          "Failed to fetch dashboard"
        );

      } finally {

        dispatch(
          setLoading(false)
        );

      }

    };

  const filteredResumes =
    useMemo(() => {

      return resumes.filter(
        resume =>
          resume.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    }, [
      resumes,
      search
    ]);

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="max-w-7xl mx-auto px-8 py-10">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-4xl font-bold">

              Welcome,

              {" "}

              {user?.name || "User"}

            </h1>

            <p className="text-gray-600 mt-2">

              Manage all your AI generated resumes.

            </p>

          </div>

        </div>

        <DashboardStats />

        <div className="mb-10">

          <input

            type="text"

            value={search}

            onChange={(e)=>

              setSearch(
                e.target.value
              )

            }

            placeholder="Search Resume..."

            className="w-full bg-white border rounded-xl p-4 outline-none"

          />

        </div>

        {

          loading ?

          (

            <div className="text-center py-20">

              <h2 className="text-2xl">

                Loading...

              </h2>

            </div>

          )

          :

          filteredResumes.length === 0 ?

          (

            <div className="text-center py-20">

              <h2 className="text-3xl font-bold">

                No resumes found

              </h2>

              <p className="text-gray-500 mt-4">

                Generate your first ATS Resume.

              </p>

            </div>

          )

          :

          (

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

              {

                filteredResumes.map(

                  resume =>

                    <ResumeCard

                      key={resume._id}

                      resume={resume}

                    />

                )

              }

            </div>

          )

        }

      </div>

    </div>

  );

};

export default DashboardPage;