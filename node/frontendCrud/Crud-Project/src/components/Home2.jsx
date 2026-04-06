import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home2 = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [active,setActive] = useState(false);
  const navigate = useNavigate();

  // 1. Add 'image' to your state (initial value is null)
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    bio: "",
    hobby: "",
    image: null, 
  });

  const handleChange = (e) => {
    // 2. Logic to handle file input separately from text inputs
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  // ✅ Register
  const handleRegister = async (e) => {
    e.preventDefault();
    setActive(true);

    try {
      // 3. Create FormData object
      const dataToSend = new FormData();
      dataToSend.append("userName", formData.userName);
      dataToSend.append("email", formData.email);
      dataToSend.append("password", formData.password);
      dataToSend.append("bio", formData.bio);
      dataToSend.append("hobby", formData.hobby);
      
      // "avatar" must match the name in your Backend upload.single('avatar')
      if (formData.image) {
        dataToSend.append("avatar", formData.image);
      }

      const res = await fetch("http://localhost:8000/register", {
        method: "POST",
        // IMPORTANT: Remove 'Content-Type' header. 
        // The browser sets it automatically to 'multipart/form-data' with a boundary.
        body: dataToSend, 
      });

      const data = await res.json();
      if (res.ok) {
        alert("Registered Successfully");
        setIsLogin(true);
      } else {
        alert(data.message || "Registration Failed");
      }
    } catch (err) {
      console.log("Registration Error:", err);
    }finally{
      setActive(false);
    }
  };

  // ✅ Login (Remains mostly same, uses JSON)
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userInfo", JSON.stringify(data.user));
        alert("Login Successful");
        navigate("/dashboard");
      }
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

        <form onSubmit={isLogin ? handleLogin : handleRegister} className="flex flex-col gap-4">
          {!isLogin && (
            <>
              <input
                type="text"
                name="userName"
                placeholder="Username"
                value={formData.userName}
                onChange={handleChange}
                className="p-2 rounded bg-gray-700 focus:outline-none"
                required
              />
              <textarea
                name="bio"
                placeholder="Your Bio"
                value={formData.bio}
                onChange={handleChange}
                className="p-2 rounded bg-gray-700 focus:outline-none"
                required
              />
              <input
                type="text"
                name="hobby"
                placeholder="Your Hobby"
                value={formData.hobby}
                onChange={handleChange}
                className="p-2 rounded bg-gray-700 focus:outline-none"
                required
              />
              {/* 4. New Image Input */}
              <label className="text-sm text-gray-400">Profile Picture:</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="text-sm text-gray-300"
                required={!isLogin}
              />
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 focus:outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 focus:outline-none"
            required
          />

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 transition p-2 rounded font-semibold">
            {isLogin ? "Login" : active ? "Registering...": "Register"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-400 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default Home2;