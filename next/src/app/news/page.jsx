'use client'; // 1. The "Interactive" flag

import { useState } from 'react';

export default function InteractivePoll() {
  // 2. State: The server doesn't have "memory" for user clicks, only the browser does.
  const [likes, setLikes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [error,setError] = useState(false);

  // 3. Event Handler: The server doesn't know what a "click" is.
  const handleVote = () => {
    setLikes(likes + 1);
    setHasVoted(true);
  };

  if(error){
    throw new Error();
  }

  function handleError(){
    setError(true);
    // throw new Error();
  }

  return (
    <div className="text-gray-900 p-8 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 text-center">
      <h2 className="text-xl font-semibold mb-4">Is Next.js better than plain React?</h2>
      
      <div className="text-4xl mb-4">👍 {likes}</div>

      <button
        onClick={handleVote} // 4. Interactivity: Attaching a listener to a DOM element
        disabled={hasVoted}
        className={`px-6 py-2 rounded-full font-medium transition-all ${
          hasVoted 
          ? 'bg-gray-300 cursor-not-allowed' 
          : 'bg-indigo-600 text-white hover:scale-105 active:scale-95'
        }`}
      >
        {hasVoted ? "Thanks for voting!" : "Vote Yes"}
      </button>

      <button onClick={handleError}>Throw Error</button>

      {hasVoted && (
        <p className="mt-4 text-sm text-indigo-500 animate-bounce">
          You just triggered a client-side state update!
        </p>
      )}
    </div>
  );
}