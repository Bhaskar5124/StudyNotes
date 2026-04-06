import React, { useState, useEffect } from "react";

const Profile = () => {
  const token = localStorage.getItem("token");
  const storedUser = JSON.parse(localStorage.getItem("userInfo"));

  // State for form inputs
  const [formData, setFormData] = useState({
    userName: storedUser?.userName || "",
    bio: storedUser?.bio || "",
    hobby: storedUser?.hobby || "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8050/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Profile updated successfully!");
        // ✅ CRITICAL: Update localStorage so the Header and Profile reflect changes
        const updatedUser = { ...storedUser, ...formData };
        localStorage.setItem("userInfo", JSON.stringify(updatedUser));
      } else {
        alert(data.message || "Update failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-700">
        <div className="flex flex-col items-center mb-6">
          <img
            src={storedUser?.image}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 mb-4"
          />
          <h2 className="text-2xl font-bold">Edit Profile</h2>
          <p className="text-gray-400 text-sm">{storedUser?.email}</p>
        </div>

        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-400 block mb-1">Username</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-1">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 outline-none h-24"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-1">Hobby</label>
            <input
              type="text"
              name="hobby"
              value={formData.hobby}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-4 p-2 rounded font-bold transition ${
              loading ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-500"
            }`}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;