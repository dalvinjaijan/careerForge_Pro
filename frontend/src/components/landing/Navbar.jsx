import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import api from '../../services/axiosInstance';
import { logout } from '../../redux/slices/authSlice';

const Navbar = () => {

  const { user,accessToken} = useSelector((state) => state.auth)
  const plan = user?.plan
  console.log(
  useSelector(state => state)
  );
  const dispatch=useDispatch()
  
  const handleLogout = async () => {

  try {
    await api.post(
      "/auth/logout"
    );

    localStorage.removeItem(
      "token"
    );
    
    localStorage.removeItem(
      "user"
    );

    dispatch(logout());

    alert(
      "Logged out successfully"
    );

  } catch (error) {

    console.log(error);

    alert(
      error.response?.data?.message ||
      "Logout failed"
    );

  }

  };
  const handleUpgrade =
  async () => {

    try {

      const response =
        await api.post(
          "/payment/create-checkout-session"
        );

      window.location.href =
        response.data.url;
      

    } catch (error) {

      alert(
        "Failed to start payment"
      );

    }

};
  console.log("plan",plan)
  
  console.log("access", accessToken)
  
  return (
    <nav className="bg-white flex justify-between items-center px-22 py-5 shadow-xl fixed w-full top-0 left-0 z-[10]">
      <Link to="/">
        <h1 className="text-3xl font-bold text-blue-900 cursor-pointer">
          CareerForge <span className="text-[#0CDBB4]">Pro</span>{" "}
        </h1>
      </Link>

      <div className="flex gap-8 text-gray-700">
        <a
          href="#features"
          className="relative after:bg-[#0CDBB4] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer py-0.5"
        >
          Features
        </a>

        <a
          href="#pricing"
          className="relative after:bg-[#0CDBB4] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer py-0.5"
        >
          Pricing
        </a>

        <a
          href="#templates"
          className="relative after:bg-[#0CDBB4] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer py-0.5"
        >
          Templates
        </a>
      </div>

      <div className="flex gap-4">
{accessToken ?
          <button className="px-5 py-2 border-red-500 border-2 rounded-xl hover:bg-red-700 hover:text-white cursor-pointer"
            onClick={handleLogout}>
            Logout
          </button> :
           <Link to="/login">
          <button className="px-5 py-2 border-[#0CDBB4] border-2 rounded-xl hover:bg-[#01cea9] hover:text-white cursor-pointer">
            Login
          </button>
        </Link>
        }
       

       {
  !user ? (

    <Link to="/signup">
      <button className="bg-[#0CDBB4] text-white px-5 py-2 rounded-lg hover:bg-[#00b190]">
        Get Started
      </button>
    </Link>

  ) : plan === "pro" ? (

    <button
      disabled
      className="bg-green-600 text-white px-5 py-2 rounded-lg cursor-default"
    >
      Pro Version
    </button>

  ) : (

    <button
      onClick={handleUpgrade}
      className="bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600"
    >
      Upgrade to Pro
    </button>

  )
}
      </div>
    </nav>
  );
}

export default Navbar