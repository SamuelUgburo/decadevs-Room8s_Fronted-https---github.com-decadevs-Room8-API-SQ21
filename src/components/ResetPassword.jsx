import React from "react";
import backgroundImage from "../Images/background-img.png"; // Import the image

export default function ResetPassword() {
  return (
    <div className="reset-password-page bg-cover bg-center bg-gray-100 flex justify-center items-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="card bg-white p-8 shadow-md flex flex-col justify-center items-center">
        <form method="post" className="w-full">
          <div className="text-center mb-8">
            <h1 className="text-green-500 text-3xl font-bold">Room8s</h1>
          </div>
          <div className="title-section mb-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Reset your Password</h2>
            <p className="text-gray-400 text-sm">
              Enter your email below and we'll send you instructions <br /> on how to reset your Password
            </p>
          </div>
          <div className="input-group mb-8 w-full">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="input-with-icon relative">
              <input
                type="text"
                id="email"
                className="form-input w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md"
                placeholder="SamuelC@gmail.com"
                required
              />
              <span className="icon absolute left-3 top-1/2 transform -translate-y-1/2">&#9993;</span>
            </div>
          </div>
          <div className="input-group w-full">
            <button type="submit" className="btn btn-success w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md">
              Send reset instructions
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
