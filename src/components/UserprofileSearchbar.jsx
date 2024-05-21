import React from "react";

function UserprofileSearchbar() {
  return (
    <div className="flex items-center justify-center w-full max-w-lg mx-auto">
      <input 
        className="flex-grow pl-5 pr-3 py-2 rounded-l-full border focus:outline-none focus:ring-1 focus:ring-[#7FDBCA] text-gray-500 text-sm font-normal leading-7" 
        type='text' 
        placeholder='Search for Apartments'
      />
      <button 
        className="border border-l-0 bg-[#7FDBCA] text-white px-4 py-2 rounded-r-full"
      >
        Search
      </button>
    </div>
  );
}

export default UserprofileSearchbar;
