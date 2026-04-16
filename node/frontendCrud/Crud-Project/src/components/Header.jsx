import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // Get and parse user info from localStorage
  const user = JSON.parse(localStorage.getItem("userInfo"));

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    navigate("/");
  }

  // 2. Updated Logout Logic
  // async function handleLogout() {
  //   try {
  //     // ✅ CALL THE BACKEND: We must tell the server to clear the cookie
  //     const res = await fetch("http://localhost:8000/logout", {
  //       method: "POST",
  //       credentials: "include", // 👈 IMPORTANT: Sends the cookie to be deleted
  //     });

  //     if (res.ok) {
  //       // ✅ CLEANUP: Remove local UI state
  //       localStorage.removeItem("userInfo");
  //       alert("Logged out successfully");
  //       navigate("/");
  //     }
  //   } catch (error) {
  //     console.error("Logout failed:", error);
  //   }
  // }

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo / Title */}
        <h1 className="text-xl font-bold text-blue-400">
          MyApp
        </h1>

        {/* Right Side */}
        {user ? (
          <div className="flex items-center gap-4">
            
            <Link
              to="/update"
              className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition"
            >
              Update Profile
            </Link>

            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 transition font-semibold"
            >
              Logout
            </button>
            {/* Show the Cloudinary Image */}
           
              <img 
                src={user?.image} 
                alt="Profile" 
                className="w-15 h-15 rounded-full object-cover border-4 border-blue-500"
              />
            
          </div>
        ) : (
          <p className="text-gray-400">Please Login</p>
        )}
      </div>
    </header>
  );
}

export default Header;