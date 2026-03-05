import React, { useState } from 'react';
import axios from 'axios'; // 1. Import axios

const ProductListAxios = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCall = async () => {
    setLoading(true);
    setError(null);

    try {
      // 2. Axios combines fetch and .json() into one step
      // It also automatically throws an error if the status is not 2xx
      const response = await axios.get('https://dummyjson.com/quotes');
      console.log(response);

      // 3. Axios puts the actual data inside a 'data' property
      setData(response.data.quotes); 
      
    } catch (err) {
      // 4. Axios errors have more detail (like err.response)
      setError(err.message || "Something went wrong");
      console.error("Axios error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <button 
        onClick={handleCall}
        disabled={loading}
        className="px-4 py-2 bg-[#C3582B] text-white rounded shadow-md disabled:bg-gray-400"
      >
        {loading ? 'Fetching...' : 'Call Data with Axios'}
      </button>

      {error && <p className="text-red-500 mt-4 font-semibold">{error}</p>}

      {data && (
        <ul className="mt-4 space-y-2">
          {data.map(item => (
            <li key={item.id} className="p-2 bg-gray-50 rounded border">
              <h1 className="text-gray-500">{item.author}</h1>
              <p  className="text-red-500">{item.quote}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductListAxios;