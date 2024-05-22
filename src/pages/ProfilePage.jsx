import React from 'react';

function ProfilePage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-100">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-teal-100 text-black rounded-full flex justify-center items-center text-2xl font-bold">
            SC
          </div>
          <div className="ml-4">
            <h1 className="text-xl font-bold">Samuel Carter</h1>
            <a href="/profile" className="text-sm text-gray-500">Visit your Profile</a>
          </div>
        </div>
        <hr />
        <nav className="mt-4">
          <a 
            href="/profile" 
            className="block px-4 py-2 text-black hover:bg-gray-100"
          >
            Edit Profile
          </a>
          <a 
            href="/create-listing" 
            className="block px-4 py-2 text-black hover:bg-gray-100"
          >
            Create Listing
          </a>
          <a 
            href="/saved" 
            className="block px-4 py-2 text-black hover:bg-gray-100"
          >
            My Saved
          </a>
          <a 
            href="/messages" 
            className="block px-4 py-2 text-black hover:bg-gray-100"
          >
            Messaging
          </a>
          <a 
            href="/logout" 
            className="block px-4 py-2 text-black hover:bg-gray-100"
          >
            Logout
          </a>
        </nav>
      </div>
    </div>
  );
}

export default ProfilePage;
