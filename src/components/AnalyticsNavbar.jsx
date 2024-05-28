import React from 'react';
import { FaBell } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-white shadow-md mb-2"> 
      <div className="w-full px-4 flex items-center justify-between py-2">
        <div className="flex items-center">
          
        </div>
        <div className="flex items-center">
          <FaBell className="text-gray-400 mr-4" />
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full p-2 mr-2">SC</div>
            <span>Samue Carter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
