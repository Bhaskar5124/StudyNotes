import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [feed, setFeed] = useState([]);

  const fetchPublicFeed = async () => {
    try {
      const res = await fetch("http://localhost:8050/all-comments");
      const data = await res.json();
      setFeed(data);
    } catch (err) {
      console.log("Error fetching feed:", err);
    }
  };

  useEffect(() => {
    fetchPublicFeed();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Community Feed</h2>

        <div className="space-y-6">
          {feed.map((item) => (
            <div key={item._id} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg flex gap-4">
              
              {/* User Avatar from Populated Data */}
              <img 
                src={item.author?.image || "https://via.placeholder.com/150"} 
                alt="profile" 
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-600"
              />

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-gray-100">
                    {item.author?.userName || "Anonymous"}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {new Date(item.createdAt).toLocaleDateString()} • {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  {item.comment}
                </p>
              </div>
            </div>
          ))}

          {feed.length === 0 && <p className="text-center text-gray-500">No comments yet. Be the first to post!</p>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;