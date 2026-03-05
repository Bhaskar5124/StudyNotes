import React, { useState } from 'react';

const ProductList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCall = async () => {
    // 1. Reset states before starting a new call
    setLoading(true);
    setError(null);

    try {
      // 2. Start the fetch
      const response = await fetch('https://dummyjson.com/products');

      // 3. Check if the response is successful (e.g., not a 404 or 500)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // 4. Parse the JSON
      const fdata = await response.json();

      // 5. Update the UI state
      setData(fdata.products); // dummyjson returns an object with a products array
    } catch (err) {
      // 6. Catch any network or parsing errors
      setError(err.message);
      console.error("Fetch error:", err);
    } finally {
      // 7. Always stop the loader regardless of success or failure
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <button 
        onClick={handleCall}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
      >
        {loading ? 'Loading...' : 'Call Data'}
      </button>

      {error && <p className="text-red-500 mt-4">Error: {error}</p>}

      {data && (
        <ul className="mt-4">
          {data.map(product => (
            <div>
                <img src={product.images[0]}/>
                <li key={product.id} className="border-b py-2">{product.title}</li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;



