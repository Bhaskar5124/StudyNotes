
import React, { useState } from "react"; // Added useState
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false); // State to toggle menu
  
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("userInfo"));
  


  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo"); // Clean up user info too
    setShowMenu(false);
    navigate("/");
  }

  return (
    <header className="bg-gray-900 text-white shadow-md relative">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="text-xl font-bold text-blue-400 cursor-pointer" onClick={() => navigate("/dashboard")}>
          MyApp
        </h1>

        {token ? (
          <div className="flex items-center gap-4 relative">
            
            {/* The Clickable Profile Image */}
            <div className="relative cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
              <img 
                src={user?.image} 
                alt="Profile" 
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 hover:border-blue-400 transition"
              />

              {/* DROPDOWN MENU */}
              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl py-2 z-50 border border-gray-700">
                  <Link 
                    to="/myprofile" 
                    className="block px-4 py-2 hover:bg-gray-700 transition"
                    onClick={() => setShowMenu(false)}
                  >
                    👤 My Profile
                  </Link>
                  
                  <Link 
                    to="/mycomments" 
                    className="block px-4 py-2 hover:bg-gray-700 transition"
                    onClick={() => setShowMenu(false)}
                  >
                    💬 My Comments
                  </Link>

                  <hr className="border-gray-700 my-1" />

                 
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-400 hover:bg-gray-700 transition font-semibold"
                  >
                    🚪 Logout
                  </button>

                </div>
              )}
            </div>
            
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;