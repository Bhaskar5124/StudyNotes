import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    bio: "",
    hobby: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Register
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // now includes bio + hobby
      });

      const data = await res.json();
      alert("Registered Successfully");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ Login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      alert("Login Successful");
      navigate("/dashboard");
      localStorage.setItem('token',data.token);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-[350px] text-white">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form
          onSubmit={isLogin ? handleLogin : handleRegister}
          className="flex flex-col gap-4"
        >
          {/* Username */}
          {!isLogin && (
            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={formData.userName}
              onChange={handleChange}
              className="p-2 rounded bg-gray-700 focus:outline-none"
              required
            />
          )}

          {/* Bio */}
          {!isLogin && (
            <textarea
              name="bio"
              placeholder="Your Bio"
              value={formData.bio}
              onChange={handleChange}
              className="p-2 rounded bg-gray-700 focus:outline-none"
              required
            />
          )}

          {/* Hobby */}
          {!isLogin && (
            <input
              type="text"
              name="hobby"
              placeholder="Your Hobby"
              value={formData.hobby}
              onChange={handleChange}
              className="p-2 rounded bg-gray-700 focus:outline-none"
              required
            />
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 focus:outline-none"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition p-2 rounded font-semibold"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p
          className="text-center mt-4 text-sm text-gray-400 cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default Home;