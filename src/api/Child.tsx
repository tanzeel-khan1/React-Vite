import React from "react";
interface ChildProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}


function Child({ name, setName }: ChildProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-xl font-bold text-blue-700">Name: {name}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"/>
    </div>
  );
}

export default Child;
