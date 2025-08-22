// import React from 'react';

// function Parent({ value, onChange, placeholder }) {
//   return (
//     <div>
//       <label>Enter your name:</label>
//       <input 
//         type="text"
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         style={{
//           padding: '8px',
//           margin: '10px',
//           border: '1px solid #ccc',
//           borderRadius: '4px'
//         }}
//       />
      
//     </div>
//   );
// }

// export default Parent;
import React, { useState } from "react";
import Child from "./Child";
function Parent() {
  const [name, setName] = useState<string>("babar"); 
  return (
    <div className="p-5">
      <Child name={name} setName={setName} /> 
    </div>
  );
}

export default Parent;
