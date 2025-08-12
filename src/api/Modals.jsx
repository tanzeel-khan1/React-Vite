// import React, { useState } from "react";

// function Modals({ onCloseModal }) {
//   const [tabs] = useState([
//     { id: 1, title: "Tab 1" },
//     { id: 2, title: "Tab 2" },
//     { id: 3, title: "Tab 3" },
//   ]);
//   const [activeTab, setActiveTab] = useState(1);
//   const handleTabClick = (id) => {
//     if (id === 3) {
//       onCloseModal();
//     } else {
//       setActiveTab(id);
//     }
//   };

//   return (
//     <div>
//       <div
//         style={{
//           border: "1px solid #ccc",
//           background: "blue",
//           padding: "10px",
//         }}
//       >
//         <div>
//           {tabs.map((tab) => (
//             <div
//               key={tab.id}
//               onClick={() => handleTabClick(tab.id)}
//               style={{
//                 display: "inline-block",
//                 padding: "8px 16px",
//                 margin: "0 4px",
//                 border: "1px solid #aaa",
//                 cursor: "pointer",
//                 backgroundColor:
//                   tab.id === activeTab ? "#ddd" : "#fff",
//               }}
//             >
//               {tab.title}
//             </div>
//           ))}
//         </div>

//         <div style={{ marginTop: "20px" }}>
//           Content for {tabs.find((tab) => tab.id === activeTab)?.title}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modals;
import React from "react";

function CloseButton({ onClose }) {
  return (
    <button
      onClick={onClose}
      style={{
        marginTop: "20px",
        padding: "8px 16px",
        cursor: "pointer",
      }}
    >
      Close Modal (Button from another file)
    </button>
  );
}

export default CloseButton;
