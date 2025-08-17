import React from 'react';

function Parent({ value, onChange, placeholder }) {
  return (
    <div>
      <label>Enter your name:</label>
      <input 
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          padding: '8px',
          margin: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
      trytry
    </div>
  );
}

export default Parent;