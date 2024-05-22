import React from 'react';

function UserProfileNav() {
  return (
    <div className="bg-white">
      <nav className="max-w-4xl mx-auto p-4 flex space-x-8">
        <a href="#" className="text-gray-700 border-b-2 border-transparent hover:text-[#7FDBCA] hover:border-[#7FDBCA]">
          Profile Settings
        </a>
        <a href="#" className="text-gray-700 border-b-2 border-transparent hover:text-[#7FDBCA] hover:border-[#7FDBCA]">
          Property Listing
        </a>
        <a href="#" className="text-gray-700 border-b-2 border-transparent hover:text-[#7FDBCA] hover:border-[#7FDBCA]">
          Saved
        </a>
        <a href="#" className="text-gray-700 border-b-2 border-transparent hover:text-[#7FDBCA] hover:border-[#7FDBCA]">
          About Me
        </a>
      </nav>
    </div>
  );
}

export default UserProfileNav;
