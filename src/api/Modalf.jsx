import React, { useState } from "react";

function Modal({ onCloseModal }) {
  const [tabs] = useState([
    { id: 1, title: "Tab 1" },
    { id: 2, title: "Tab 2" },
    { id: 3, title: "Tab 3" },
  ]);
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (id) => {
    if (id === 3) {
      onCloseModal();
    } else {
      setActiveTab(id);
    }
  };
  return (
    <div
      style={{
        border: "1px solid #ccc",
        background: "white",
        padding: "20px",
        width: "300px",
      }}
    >
      <div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            style={{
              marginRight: "8px",
              padding: "8px 12px",
              backgroundColor: tab.id === activeTab ? "#ddd" : "#fff",
              cursor: "pointer",
            }}
          >
            {tab.title}{" "}
          </button>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        Content for {tabs.find((tab) => tab.id === activeTab)?.title}
      </div>
    </div>
  );
}

export default Modal;
