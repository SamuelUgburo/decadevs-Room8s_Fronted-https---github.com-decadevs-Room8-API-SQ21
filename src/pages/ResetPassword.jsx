import React from "react";
import backgroundImage from "../assets/Images/bg-image.jpg"; 

export default function ResetPassword() {
  return (
    <div
      className="reset-password-page bg-cover bg-center flex justify-center items-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="card bg-white p-12 shadow-md flex flex-col justify-center items-center w-full max-w-lg">
        <form method="post" className="w-full">
          <div className="text-center mb-6">
            <h1 className="text-pry-color text-3xl font-bold">Room8s</h1>
          </div>
          <div className="title-section mb-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Reset your password</h2>
            <p className="text-gray-500 text-sm">
              Enter your email below and we'll send you instructions <br />
              on how to reset your password
            </p>
          </div>
          <div className="input-group mb-6 w-full">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="input-with-icon relative">
              <input
                type="email" 
                id="email"
                className="rounded-md form-input w-full py-3 pl-10 pr-4 border border-gray-300"
                placeholder="SamuelC@gmail.com"
                required
              />
              <span className="icon absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">&#9993;</span>
            </div>
          </div>
          <div className="input-group w-full">
            <button
              type="submit"
              className="rounded-md w-full py-3 px-4 bg-pry-color text-white font-semibold"
            >
              Send reset instructions
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
