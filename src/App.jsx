// import React from 'react'
// import Modalf from "./api/Modalf"
// import Modals from "./api/Modals"
// import Combination from "./api/Combination"
// const App = () => {
//   return (
//     <div>
//       <Modalf/>
//       <Modals/>
//       <Combination/>
//     </div>
//   )
// }

// export default App
import React, { useState } from "react";

export default function BountyTaskForm() {
  const [selectedTab, setSelectedTab] = useState("Twitter");

  const tabs = ["Twitter", "Telegram", "Youtube", "Discord"];

  const tasks = [
    "Tweet about Project @",
    "Use hashtag",
    "English only",
    "Content must remain online for at least 7 days",
    "Account must be public",
    "One submission per Twitter Account",
    "No offensive or inappropriate content",
    "Fellow Bounty Description",
  ];

  const [checked, setChecked] = useState([true, false, false, false, false, false, false, false]);

  const handleCheck = (index) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-gradient-to-b from-[#0a0f1c] to-[#05080f] p-6 rounded-xl shadow-lg">
        {/* Tabs */}
        <div className="flex space-x-6 border-b border-gray-700 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`text-sm font-medium ${
                selectedTab === tab ? "text-white border-b-2 border-blue-500" : "text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search task"
            className="w-full px-4 py-2 rounded-md bg-[#101726] text-gray-200 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Checkboxes */}
        <div className="mt-4 space-y-3">
          {tasks.map((task, index) => (
            <label
              key={index}
              className="flex items-center px-3 py-3 rounded-md bg-[#101726] text-gray-300 cursor-pointer hover:bg-[#182132] transition"
            >
              <input
                type="checkbox"
                checked={checked[index]}
                onChange={() => handleCheck(index)}
                className="mr-3 h-4 w-4 accent-blue-500"
              />
              {task}
            </label>
          ))}
        </div>

        {/* Next button */}
        <div className="mt-6">
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
