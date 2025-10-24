// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   ReferenceLine,
// } from "recharts";

// // --- 1. Chart Data ---
// const data = [
//   { time: "10AM", value: 7.5, rain: 20 },
//   { time: "11AM", value: 8.0, rain: 15 },
//   { time: "12PM", value: 5.0, rain: 30 },
//   { time: "01PM", value: 6.5, rain: 25 },
//   { time: "02PM", value: 9.0, rain: 10 },
//   { time: "03PM", value: 7.0, rain: 22 },
// ];

// // --- 2. Y-Axis Levels ---
// const yAxisLevels = [
//   { value: 9, label: "Rainy" },
//   { value: 6, label: "Sunny" },
//   { value: 3, label: "Heavy" },
// ];

// // --- 3. Custom Components ---

// // ✅ Custom Y-Axis Label Renderer
// const CustomYAxisLabel = ({ viewBox }) => {
//   if (!viewBox) return null; // Prevent crash
//   const { x, y, height } = viewBox;
//   const baseX = x - 50; // Position labels left of Y-axis

//   return (
//     <g>
//       {yAxisLevels.map((level, i) => (
//         <text
//           key={i}
//           x={baseX}
//           y={y + height - (level.value / 10) * height}
//           fill="#9CA3AF" // Tailwind's gray-400
//           fontSize="12"
//           fontWeight="600"
//           textAnchor="start"
//         >
//           {level.label}
//         </text>
//       ))}
//     </g>
//   );
// };

// // ✅ Custom Bar Marker (Vertical Dashed Line)
// const CustomBarMarker = (props) => {
//   const { x, y } = props;
//   const chartHeight = 200; // Should match container height

//   return (
//     <line
//       x1={x}
//       y1={y}
//       x2={x}
//       y2={chartHeight}
//       stroke="#4B5563" // Tailwind's gray-600
//       strokeWidth={2}
//       strokeDasharray="4 4"
//     />
//   );
// };

// // --- 4. Main Component ---
// const WeatherChart = () => {
//   return (
//     <div className="p-6 bg-gray-900 text-white rounded-xl shadow-2xl w-full max-w-xl mx-auto font-sans">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold">Rainfall Prediction</h2>
//         <div className="text-xs text-gray-400">Next 6 Hours</div>
//       </div>

//       {/* Chart */}
//       <div className="h-[200px] w-full">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             data={data}
//             margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
//           >
//             {/* Grid */}
//             <CartesianGrid
//               stroke="#1F2937"
//               strokeDasharray="3 3"
//               vertical={false}
//             />

//             {/* X-Axis */}
//             <XAxis
//               dataKey="time"
//               axisLine={false}
//               tickLine={false}
//               stroke="#9CA3AF"
//               padding={{ left: 20, right: 20 }}
//               tick={{ fontSize: 12, fontWeight: "bold" }}
//               interval="preserveStartEnd"
//             />

//             {/* Y-Axis with Custom Labels */}
//             <YAxis
//               domain={[0, 10]}
//               hide
//               axisLine={false}
//               tickLine={false}
//               label={<CustomYAxisLabel />} // ✅ correct placement
//             />

//             {/* Reference Lines */}
//             {yAxisLevels.map((level) => (
//               <ReferenceLine
//                 key={level.label}
//                 y={level.value}
//                 stroke="#1F2937"
//                 strokeDasharray="3 3"
//               />
//             ))}

//             {/* Tooltip */}
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "#374151",
//                 borderColor: "#4B5563",
//                 borderRadius: "4px",
//               }}
//               labelStyle={{ color: "#F3F4F6" }}
//               formatter={(value) => [`${value}mm`, "Rainfall"]}
//             />

//             {/* Main Line */}
//             <Line
//               type="monotone"
//               dataKey="value"
//               stroke="#3B82F6" // Tailwind's blue-500
//               strokeWidth={3}
//               dot={false}
//               isAnimationActive={false}
//             />

//             {/* Custom Vertical Markers */}
//             <Line
//               type="monotone"
//               dataKey="value"
//               stroke="transparent"
//               dot={<CustomBarMarker />}
//               activeDot={false}
//               isAnimationActive={false}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Footer Section */}
//       <div className="mt-10 mb-4 border-t border-gray-800 pt-4">
//         <div className="flex justify-between items-center">
//           <div className="text-gray-200 font-semibold">Other Cities</div>
//           <button className="text-blue-400 text-sm hover:text-blue-300">
//             See All &rarr;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherChart;
import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        {darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`relative w-20 h-10 rounded-full transition-all duration-500 flex items-center ${
          darkMode ? "bg-gray-700 justify-end" : "bg-yellow-400 justify-start"
        }`}
      >
        <div
          className={`w-8 h-8 bg-white rounded-full shadow-md mx-1 flex items-center justify-center transition-transform duration-500`}
        >
          {darkMode ? "🌙" : "☀️"}
        </div>
      </button>
    </div>
  );
}
