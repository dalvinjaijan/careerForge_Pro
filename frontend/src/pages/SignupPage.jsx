import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/axiosInstance";

const SignupPage = () => {

    const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
    const [name, setName] = useState("")
   
  const signup = async (e) => {
  e.preventDefault();

  try {
    const response=await api.post("/auth/signup", {
      name,
      email,
      password,
    });
    console.log("response",response)

    navigate("/login");

  } catch (error) {
    console.log(error.response.data.message);
  }
};
    return (
      <div className="h-screen w-full bg-[url(/bg_image.jpg)] bg-cover bg-center bg-no-repeat ">
        <div className="absolute bg-[#000000b6] w-full h-full grid backdrop-blur-xs">
          <form className=" shadow-2xl place-self-center w-[max(23vw, 330px)] text-[#808080] bg-[white] flex flex-col gap-5 px-10 py-8 rounded-2xl animate-[fadeIn_0.5s] ">
            <div className="flex justify-center items-center text-[#0CDBB4] font-bold text-2xl">
              <h2>Sign Up</h2>
            </div>
            <div className="flex flex-col gap-5">
              <input
                className="outline-[none] border border-solid border-[#c9c9c9] p-3 rounded"
                name="name"
                type="text"
                placeholder="Your name"
                onChange={(e)=>setName(e.target.value)}
                required
              />
              <input
                className="outline-[none] border border-solid border-[#c9c9c9] p-3 rounded"
                name="email"
                type="email"
                placeholder="Your email"
                onChange={(e)=>setEmail(e.target.value)}

                required
              />
              <input
                className="outline-[none] border border-solid border-[#c9c9c9] p-3 rounded"
                name="password"
                type="password"
                placeholder="Your password"
                onChange={(e)=>setPassword(e.target.value)}

                required
              />
            </div>
            <button
              className="border-none p-3 rounded text-[white] bg-[#0CDBB4] text-[18px] cursor-pointer"
              type="submit"
              onClick={signup}
            >
              Create Account
            </button>
            <p>
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-[#0CDBB4] font-medium cursor-pointer">
                  Login here
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
};

export default SignupPage;
