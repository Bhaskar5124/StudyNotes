// src/app/loading.jsx
export default function GlobalLoading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      <p className="ml-3 font-medium text-gray-600">Loading Application...</p>
    </div>
  );
}