import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { setCredentials } from "../redux/slices/authSlice";
import api from '../services/axiosInstance';
import { useDispatch } from 'react-redux';

const LoginPage = () => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate=useNavigate()
  

  const login = async (e) => {
    e.preventDefault();
    console.log("login clicked")

    try {
      const response =
        await api.post("/auth/login", {
          email,
          password,
        });

      dispatch(
        setCredentials({
          accessToken:
            response.data.accessToken,
          user: response.data.user,
        })
      );
      localStorage.setItem("token", response.data.accessToken);
      navigate('/get-started')

    } catch (error) {
      console.log(error.response.data.message);
    }
  }
    return (
      <div className="h-screen w-full bg-[url(/bg_image.jpg)] bg-cover bg-center bg-no-repeat ">
        <div className="absolute bg-[#000000b6] w-full h-full grid backdrop-blur-xs">
          <form className=" shadow-2xl place-self-center w-[max(23vw, 330px)] text-[#808080] bg-[white] flex flex-col gap-5 px-10 py-8 rounded-2xl animate-[fadeIn_0.5s] ">
            <div className="flex justify-center items-center text-[#0CDBB4] font-bold text-2xl">
              <h2>Log In</h2>
            </div>
            <div className="flex flex-col gap-5">
              <input
                className="outline-[none] border border-solid border-[#c9c9c9] p-3 rounded"
                name="email"
                type="email"
                placeholder="Your email"
                required
                onChange={(e)=>setEmail(e.target.value)}
              />
              <input
                className="outline-[none] border border-solid border-[#c9c9c9] p-3 rounded"
                name="password"
                type="password"
                placeholder="Your password"
                required
                onChange={(e)=>setPassword(e.target.value)}

              />
            </div>
            <button
              className="border-none p-3 rounded text-[white] bg-[#0CDBB4] text-[18px] cursor-pointer"
              type="submit"
              onClick={login}
            >
              Log In
            </button>
            <p>
              Don't have an account?{" "}
              <Link to="/signup">
                <span className="text-[#0CDBB4] font-medium cursor-pointer">
                  Create new account
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
}

export default LoginPage