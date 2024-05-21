import React from "react";
import Searchbar from "./Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell as faBellRegular } from "@fortawesome/free-regular-svg-icons"; // Import regular bell icon

function UserProfileNavbar() {
  return (
    <div className="bg-white shadow-[0_4px_8px_0px_rgba(0,0,0,0.04)]">
      <div className="container mx-auto py-2 flex justify-between items-center">
        <div className="text-[#7FDBCA] text-2xl font-bold leading-7">
          Room8s
        </div>
        <div className="flex-1 flex justify-center">
          <Searchbar />
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faBellRegular} className="text-gray-500" />
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white">
            SC
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileNavbar;
