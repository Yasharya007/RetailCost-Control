import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function RegisterForm() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    city: "",
    country: "",
    phone: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: "",
  });

  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });

  let handdleNameChange = (e) => {
    setUserData((prev) => {
      return { ...prev, username: e.target.value };
    });
  };

  let handdleCityChange = (e) => {
    setUserData((prev) => {
      return { ...prev, city: e.target.value };
    });
  };

  let handdleCountryChange = (e) => {
    setUserData((prev) => {
      return { ...prev, country: e.target.value };
    });
  };
  let handdlePhoneChange = (e) => {
    setUserData((prev) => {
      return { ...prev, phone: e.target.value };
    });
  };

  let handdleEmailChange = (e) => {
    setUserData((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  let handdlePasswordChange = (e) => {
    setUserData((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  let handdleConfirmPasswordChange = (e) => {
    setUserData((prev) => {
      return { ...prev, confirmPassword: e.target.value };
    });
  };

  let handdleAvatarChange = (e) => {
    setUserData((prev) => {
      return { ...prev, avatar: e.target.files[0] };
    });
  };

  let handdle = (e) => {
    setUserData((prev) => {
      return { ...prev, avatar: e.target.files[0] };
    });
  };

  const registerUser = async () => {
    if (
      userData.username === "" ||
      userData.email === "" ||
      userData.password === "" ||
      userData.phone === "" ||
      userData.avatar === ""
    ) {
      toast.error("All fields are required");
      return;
    }
    if (userData.password !== userData.confirmPassword) {
      toast.error("passwords are not same");
      return;
    }
    const formData = new FormData();
    formData.append("username", userData.username);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("avatar", userData.avatar);
    // console.log(formData);
    // console.log(userData.avatar);
    const toastId = toast.loading("Loading ...");
    axios
      .post("http://localhost:8000/general/register", formData)
      .then((response) => {
        // console.log(response);
        toast.success("User Created Successfully");
        setUserData({
          city: "",
          country: "",
          phone: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          avatar: "",
        });
        // console.log("GAYA to thha")
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.request.response);
        toast.error("Error while creating user");
        console.log(error.request.response);
      })
      .finally(() => {
        toast.dismiss(toastId);
      });
  };

  const handleLoginEmail = (e) => {
    // console.log(loginUserData);
    setLoginUserData((prev) => {
      return { ...prev, email: e.target.value };
    });
  }
  
  const handleLoginPassword = (e) => {
    // console.log(loginUserData);
    setLoginUserData((prev) => {
      return { ...prev, password: e.target.value };
    });
  }

  const handleLogin = () => {

  }

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white p-8 rounded-lg w-full max-w-md relative overflow-hidden">
        <h2 className="text-2xl font-bold mb-3 text-center">
          {step === 3 ? "Login your Account" : "Create an Account"}
        </h2>

        <div className={`step ${step === 1 ? "" : "hidden"}`}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                User Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={userData.username}
                onChange={handdleNameChange}
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={userData.city}
                onChange={handdleCityChange}
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={userData.country}
                onChange={handdleCountryChange}
              />
            </div>
            <div>
              <label
                htmlFor="Phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="Phone"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={userData.phone}
                onChange={handdlePhoneChange}
              />
            </div>

            <div>
              <button
                type="button"
                onClick={() => {
                  setStep(2);
                }}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Next
              </button>
            </div>
            <p className=" text-base mb-6 text-center">
              Already have account ?{" "}
              <span
                className="text-blue-500 cursor-pointer hover:text-blue-700 hover:font-semibold"
                onClick={() => {
                  setStep(3);
                }}
              >
                Login
              </span>
            </p>
          </div>
        </div>
        <div className={`step ${step === 2 ? "" : "hidden"}`}>
          <div className="space-y-4">
            {/* <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" id="username" name="username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div> */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={userData.email}
                onChange={handdleEmailChange}
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
                value={userData.password}
                onChange={handdlePasswordChange}
              />
            </div>
            <div>
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={userData.confirmPassword}
                onChange={handdleConfirmPasswordChange}
              />
            </div>
            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              >
                Select Avatar
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handdleAvatarChange}
              />
              {/* <img src={userData.avatar}/> */}
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              >
                Back
              </button>
              <button
                type="submit"
                onClick={registerUser}
                className="w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
            <p className=" text-base mb-6 text-center">
              Already have account ?{" "}
              <span
                className="text-blue-500 cursor-pointer hover:text-blue-700 hover:font-semibold"
                onClick={() => {
                  setStep(3);
                }}
              >
                Login
              </span>
            </p>
          </div>
        </div>

        <div className={`step ${step === 3 ? "" : "hidden"}`}>
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
                onClick={() => {
                  setStep(1);
                }}
              >
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;