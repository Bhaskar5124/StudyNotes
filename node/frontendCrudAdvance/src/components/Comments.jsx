import React, { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  
  // ✅ New States for Editing
  const [editId, setEditId] = useState(null); // Stores the ID of the comment being edited
  const [editText, setEditText] = useState(""); // Stores the temporary text while typing
  
  const token = localStorage.getItem("token");

  const fetchComments = async () => {
    try {
      const res = await fetch("http://localhost:8050/comments", {
        headers: { "Authorization": `Bearer ${token}` },
      });
      const data = await res.json();
      setComments(data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => { fetchComments(); }, []);

  const handlePost = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    try {
      const res = await fetch("http://localhost:8050/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ comment: newComment }),
      });
      const data = await res.json();
      if (res.ok) {
        setComments([data.comment, ...comments]);
        setNewComment("");
      }
    } catch (err) { console.log(err); }
  };

  // ✅ NEW: Save Edited Comment
  const handleSaveEdit = async (id) => {
    try {
      const res = await fetch(`http://localhost:8050/comments/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ comment: editText }),
      });

      if (res.ok) {
        // Update the local state so the UI reflects the change immediately
        setComments(comments.map(c => c._id === id ? { ...c, comment: editText } : c));
        setEditId(null); // Exit edit mode
      }
    } catch (err) { console.log(err); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await fetch(`http://localhost:8050/comments/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` },
      });
      setComments(comments.filter((c) => c._id !== id));
    } catch (err) { console.log(err); }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">My Comments</h2>

        <form onSubmit={handlePost} className="mb-8 flex flex-col gap-3">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
            rows="2"
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-500 self-end px-6 py-2 rounded-lg font-bold">
            Post
          </button>
        </form>

        <div className="grid gap-4">
          {comments.map((item) => (
            <div key={item._id} className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-md">
              <div className="flex justify-between items-start">
                <div className="flex-1 mr-4">
                  {/* ✅ CONDITIONAL RENDERING: Show Input if editing, otherwise show Text */}
                  {editId === item._id ? (
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="w-full p-2 bg-gray-700 border border-blue-500 rounded outline-none text-white"
                      autoFocus
                    />
                  ) : (
                    <p className="text-gray-300 mb-2">{item.comment}</p>
                  )}
                  
                  <span className="text-xs text-gray-500">
                    {new Date(item.createdAt).toLocaleString()}
                  </span>
                </div>

                <div className="flex gap-2">
                  {/* ✅ TOGGLE BUTTONS: Show Save/Cancel if editing, otherwise show Edit/Delete */}
                  {editId === item._id ? (
                    <>
                      <button onClick={() => handleSaveEdit(item._id)} className="text-green-400 hover:underline text-sm">Save</button>
                      <button onClick={() => setEditId(null)} className="text-gray-400 hover:underline text-sm">Cancel</button>
                    </>
                  ) : (
                    <>
                      <button 
                        onClick={() => { setEditId(item._id); setEditText(item.comment); }} 
                        className="bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white px-3 py-1 rounded text-sm transition"
                      >
                        Edit
                      </button>
                      <button onClick={() => handleDelete(item._id)} className="bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white px-3 py-1 rounded text-sm transition">
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;