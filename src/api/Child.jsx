import React from 'react';

function Child({ userName }) {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h1>Hello {userName || 'Guest'}!</h1>
      <p>Welcome {userName || 'Guest'} to our website</p>
      <p>Your name is: <strong>{userName || 'No name entered'}</strong></p>
    </div>
  );
}

export default Child;