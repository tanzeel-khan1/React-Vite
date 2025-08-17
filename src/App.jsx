import React, { useState } from 'react';
import Child from './api/Child.jsx';
import Parent from './api/Parent.jsx';

function App() {
  const [userInput, setUserInput] = useState(''); 
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>User Input Demo</h2>
      
      <Parent 
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      
      <Child userName={userInput} />
    </div>
  );
}

export default App;