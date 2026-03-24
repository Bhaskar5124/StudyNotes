import Link from 'next/link';

export default function UsersDirectory() {
  // Simulating data you might usually get from MongoDB
  const users = [
    { id: '1', name: 'Alex Rivera', role: 'Fullstack Developer' },
    { id: '2', name: 'Sarah Chen', role: 'UI/UX Designer' },
    { id: '3', name: 'Jordan Smyth', role: 'DevOps Engineer' },
    { id: '4', name: 'Maria Garcia', role: 'Backend Lead' },
  ];

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Team Directory</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.map((user) => (
          <Link href={`/user/${user.id}`} key={user.id}>
            <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow cursor-pointer border-zinc-200 bg-white">
              <h2 className="text-xl font-semibold text-blue-600">{user.name}</h2>
              <p className="text-zinc-500">{user.role}</p>
              <span className="text-sm text-zinc-400 mt-4 block">View Profile →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}