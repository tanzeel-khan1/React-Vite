import axios from "axios";
import { useState } from "react";

function Manually() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const fetchData = async () => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get('http://127.0.0.1:5000/users');
      const filtered = response.data.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>🔍 Manual Search (with Button)</h2>
      <input
        type="text"
        value={query}
        placeholder="Type to search..."
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />
      <button onClick={fetchData} style={{ padding: '10px', width: '100%' }}>
        Search
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {results.length > 0 ? (
            results.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))
          ) : query ? (
            <li>No results found</li>
          ) : null}
        </ul>
      )}
    </div>
  );
}

export default Manually;
