import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
    return (
      <div className="h-screen w-full bg-[url(/public/bg_image.jpg)] bg-cover bg-center bg-no-repeat ">
        <div className="absolute bg-[#000000b6] w-full h-full grid backdrop-blur-xs">
          <form className=" shadow-2xl place-self-center w-[max(23vw, 330px)] text-[#808080] bg-[white] flex flex-col gap-5 px-10 py-8 rounded-2xl animate-[fadeIn_0.5s] ">
            <div className="flex justify-center items-center text-[#474dff] font-bold text-2xl">
              <h2>Sign Up</h2>
            </div>
            <div className="flex flex-col gap-5">
              <input
                className="outline-[none] border border-solid border-[#c9c9c9] p-3 rounded"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
              <input
                className="outline-[none] border border-solid border-[#c9c9c9] p-3 rounded"
                name="email"
                type="email"
                placeholder="Your email"
                required
              />
              <input
                className="outline-[none] border border-solid border-[#c9c9c9] p-3 rounded"
                name="password"
                type="password"
                placeholder="Your password"
                required
              />
            </div>
            <button
              className="border-none p-3 rounded text-[white] bg-[#474dff] text-[18px] cursor-pointer"
              type="submit"
            >
              Create Account
            </button>
            <p>
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-[#474dff] font-medium cursor-pointer">
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
