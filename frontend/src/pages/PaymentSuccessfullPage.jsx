import { useNavigate } from "react-router-dom";
import { setCredentials } from "../redux/slices/authSlice";
import api from "../services/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const PaymentSuccessPage = () => {

  const navigate = useNavigate()
  
   const dispatch = useDispatch();

  const { accessToken } = useSelector(
    state => state.auth
  );

  useEffect(() => {

    const getUpdatedUser = async () => {

      try {

        const response =
          await api.get("/auth/me");

        dispatch(
          setCredentials({
            accessToken,
            user: response.data.user,
          })
        );

        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

      } catch (error) {
        console.log(error);
      }

    };

    getUpdatedUser();

  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600">
          Payment Successful 🎉
        </h1>

 <p className="mt-4">
          Your account has been upgraded to Pro.
          </p>
       
        <button className="bg-red-500 text-white px-2 py-1 rounded-xl mt-4 cursor-pointer"
        onClick={()=>navigate("/get-started")}> {"<- Go home"}</button>

       
      </div>
    </div>
  );
};

export default PaymentSuccessPage;