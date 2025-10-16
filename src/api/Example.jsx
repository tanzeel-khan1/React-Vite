import React from "react";
import Usage from "../api/Usage";

const App = () => {
  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
  ];
  const data = [
    { name: "Babar", email: "babar@example.com", role: "Admin" },
    { name: "Ali", email: "ali@example.com", role: "User" },
    { name: "Sara", email: "sara@example.com", role: "Editor" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Users Table</h1>
      <Usage columns={columns} data={data} />
    </div>
  );
};

export default App;
