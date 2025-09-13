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
