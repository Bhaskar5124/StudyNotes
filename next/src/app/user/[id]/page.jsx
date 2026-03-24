// src/app/users/[id]/page.jsx

// 1. Make the function async
export default async function UserProfile({ params }) {
  
  // 2. Await the params before using them
  const resolvedParams = await params;
  const id = resolvedParams.id;
  

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <div className="bg-zinc-50 p-10 rounded-3xl border border-zinc-100">
        <h1 className="text-4xl font-extrabold mb-2 text-black">
          User Details
        </h1>
        <p className="text-lg text-zinc-600">
          Viewing ID: <span className="font-mono text-blue-600 font-bold">{id}</span>
        </p>
      </div>
    </div>
  );
}