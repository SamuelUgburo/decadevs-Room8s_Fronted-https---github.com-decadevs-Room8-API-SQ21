import React from "react";
import UserProfileNavbar from "./UserprofileNavbar";

function UserProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <UserProfileNavbar />
      <div className="max-w-4xl mx-auto mt-8">
        <div className="p-8">
          <div className="flex mb-4">
            <div className="flex-1 mr-2">
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Samuel" />
            </div>
            <div className="flex-1 ml-2">
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Carter" />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-1 mr-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="samuellk@gmail.com" />
            </div>
            <div className="flex-1 ml-2">
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <div className="flex">
                <select className="block w-1/4 p-2 border border-gray-300 rounded-l-md">
                  <option>+1</option>
                  <option>+44</option>
                  <option>+91</option>
                  {/* Add more options as needed */}
                </select>
                <input type="text" className="mt-1 flex-1 p-2 border border-gray-300 rounded-r-md" placeholder="Mobile Number" />
              </div>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-1 mr-2">
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Port Harcourt</option>
              </select>
            </div>
            <div className="flex-1 ml-2">
              <label className="block text-sm font-medium text-gray-700">Sex</label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-1 mr-2">
              <label className="block text-sm font-medium text-gray-700">Occupation</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Self-employed" />
            </div>
            <div className="flex-1 ml-2">
              <label className="block text-sm font-medium text-gray-700">Zodiac Sign</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Virgo" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-8 flex justify-start space-x-4 mt-4">
        <button className="px-4 py-2 bg-[#7FDBCA] text-white rounded-md">
          Save Changes
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
