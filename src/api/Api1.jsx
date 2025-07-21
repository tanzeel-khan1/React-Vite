import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LiveSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() !== '') {
        fetchData();
      } else {
        setResults([]);
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(delayDebounce); // Cleanup
  }, [query]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
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
    <div style={{
      maxWidth: '500px',
      margin: '40px auto',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      backgroundColor: '#ffffff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333'
      }}>
        🔍 Live User Search
      </h2>

      <input
        type="text"
        value={query}
        placeholder="Search by name..."
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          marginBottom: '15px',
          outline: 'none',
          boxSizing: 'border-box'
        }}
      />

      {loading ? (
        <p style={{ textAlign: 'center', color: '#888' }}>Loading...</p>
      ) : (
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {results.length > 0 ? (
            results.map(user => (
              <li key={user.id} style={{
                padding: '10px 15px',
                borderBottom: '1px solid #eee',
                fontSize: '15px',
                color: '#444'
              }}>
                {user.name}
              </li>
            ))
          ) : query ? (
            <li style={{
              padding: '10px',
              textAlign: 'center',
              color: '#999'
            }}>
              No results found.
            </li>
          ) : null}
        </ul>
      )}
    </div>
  );
}

export default LiveSearch;
