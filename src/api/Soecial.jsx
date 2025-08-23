import React from 'react';

// Reusable Table Component
const ReusableTable = ({ 
  data = [], 
  columns = [], 
  className = "",
  headerClassName = "",
  rowClassName = "",
  cellClassName = ""
}) => {
  if (!data.length || !columns.length) {
    return <div className="text-gray-500 text-center p-4">No data available</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full border-collapse border border-gray-300 ${className}`}>
        <thead>
          <tr className={`bg-gray-100 ${headerClassName}`}>
            {columns.map((column, index) => (
              <th 
                key={index}
                className={`border border-gray-300 px-4 py-2 text-left font-semibold ${cellClassName}`}
              >
                {column.header || column.key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              className={`hover:bg-gray-50 ${rowClassName}`}
            >
              {columns.map((column, colIndex) => (
                <td 
                  key={colIndex}
                  className={`border border-gray-300 px-4 py-2 ${cellClassName}`}
                >
                  {column.render 
                    ? column.render(row[column.key], row, rowIndex)
                    : row[column.key] || '-'
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Example usage demo
const App = () => {
  // Sample data
  const studentsData = [
    { id: 1, name: "Ahmed Ali", age: 20, grade: "A", city: "Karachi" },
    { id: 2, name: "Fatima Khan", age: 19, grade: "B+", city: "Lahore" },
    { id: 3, name: "Hassan Shah", age: 21, grade: "A-", city: "Islamabad" },
    { id: 4, name: "Ayesha Malik", age: 18, grade: "A+", city: "Karachi" }
  ];

  const employeesData = [
    { id: 1, name: "Muhammad Usman", department: "IT", salary: 50000, experience: "3 years" },
    { id: 2, name: "Sara Ahmed", department: "HR", salary: 45000, experience: "2 years" },
    { id: 3, name: "Ali Raza", department: "Finance", salary: 55000, experience: "5 years" }
  ];

  // Column configurations
  const studentColumns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Student Name' },
    { key: 'age', header: 'Age' },
    { 
      key: 'grade', 
      header: 'Grade',
      render: (value) => (
        <span className={`font-bold ${
          value === 'A+' ? 'text-green-600' : 
          value === 'A' || value === 'A-' ? 'text-blue-600' : 
          'text-orange-600'
        }`}>
          {value}
        </span>
      )
    },
    { key: 'city', header: 'City' }
  ];

  const employeeColumns = [
    { key: 'id', header: 'EMP ID' },
    { key: 'name', header: 'Employee Name' },
    { key: 'department', header: 'Department' },
    { 
      key: 'salary', 
      header: 'Salary',
      render: (value) => `Rs. ${value.toLocaleString()}`
    },
    { key: 'experience', header: 'Experience' }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Reusable Table Component Demo
      </h1>
      
      <p className="text-gray-600 mb-6 text-center">
        Yeh component sirf table render karta hai, chahe aapke code mein headings ya paragraphs bhi hon
      </p>

      {/* First table with headings and paragraphs around it */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Students Information</h2>
        <p className="text-gray-600 mb-4">
          Yeh students ki details hai. Notice karein ky yahan heading aur paragraph hai, 
          lekin table component sirf table hi render kar raha hai.
        </p>
        
        <ReusableTable 
          data={studentsData} 
          columns={studentColumns}
          className="mb-4"
          headerClassName="bg-green-100"
        />
        
        <p className="text-gray-600 mt-4">
          Table ke baad yeh paragraph hai jo show kar raha hai ky component flexible hai.
        </p>
      </div>

      {/* Second table with different styling */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">Employee Records</h2>
        <p className="text-gray-600 mb-4">
          Doosra example different data aur styling ke saath.
        </p>
        
        <ReusableTable 
          data={employeesData} 
          columns={employeeColumns}
          headerClassName="bg-purple-100"
          rowClassName="odd:bg-gray-50"
        />
        
        <p className="text-gray-600 mt-4">
          Dekh sakte hain ky same component different data ke saath perfectly kaam kar raha hai.
        </p>
      </div>

      {/* Usage instructions */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3 text-blue-800">How to Use:</h3>
        <div className="space-y-2 text-sm">
          <p><strong>1. Data:</strong> Array of objects pass karein</p>
          <p><strong>2. Columns:</strong> Column configuration array pass karein</p>
          <p><strong>3. Optional Props:</strong> Custom classes aur styling ke liye</p>
          <p><strong>4. Render Function:</strong> Custom formatting ke liye columns mein render function use karein</p>
        </div>
      </div>
    </div>
  );
};

export default App;