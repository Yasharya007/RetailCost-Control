import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });

  const handleLoginEmail = (e) => {
    // console.log(loginUserData);
    setLoginUserData((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  const handleLoginPassword = (e) => {
    // console.log(loginUserData);
    setLoginUserData((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  const handleLogin = async() => {
    if (
      loginUserData.email === "" ||
      loginUserData.password === ""
    ) {
      toast.error("All fields are required");
      return;
    }
    const toastId = toast.loading("Loading ...");
    axios
      .post("http://localhost:8000/general/login",loginUserData,{ withCredentials: true })
      .then((response) => {
        // console.log(response);
        toast.success("Login Successfully");
        navigate("/dashboard");
        // console.log("GAYA to thha")
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.request.response);
        toast.error("Error while login");
        console.log(error.request.response);
      })
      .finally(() => {
        toast.dismiss(toastId);
      });

  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white p-8 rounded-lg w-full max-w-md relative overflow-hidden">
        <h2 className="text-2xl font-bold mb-3 text-center">
          Login Your Account
        </h2>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={loginUserData.email}
              onChange={handleLoginEmail}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={loginUserData.password}
              onChange={handleLoginPassword}
            />
          </div>
          <div>
            <button
              type="button"
              onClick={handleLogin}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </div>
          <p className=" text-base mb-6 text-center">
            Didn't have account ?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:text-blue-700 hover:font-semibold"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
