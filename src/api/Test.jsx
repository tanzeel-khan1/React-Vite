import { Card } from "@/components/ui/card";
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

function BountyDetails({
  title = "Bounty Details",
  buttonText = "↗ Today",
  weekText = "This Week",
  weekChange = "↑ 0%",
  mainValue = "0",
  chartData = [],
  bottomStats = [],
  bgColor = "bg-red-700", 
}) {
  
  return (
    <Card className={`${bgColor} border border-blue-400 p-4 sm:p-6`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
        <h2 className="text-white text-lg sm:text-xl font-semibold">{title}</h2>
        <button className="bg-transparent border border-blue-400 text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1E293B] transition-colors w-fit">
          {buttonText}
        </button>
      </div>

      {/* Week indicator */}
      <div className="mb-6 sm:mb-8">
        <span className="text-gray-400 text-sm">{weekText} </span>
        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
          {weekChange}
        </span>
      </div>

      {/* Radial Chart */}
      <div className="relative mb-6">
        <ResponsiveContainer width="100%" height={250} className="sm:h-[280px]">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="95%"
            barSize={12}
            data={chartData}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar dataKey="value" />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-2xl sm:text-4xl font-bold">
            {mainValue}
          </span>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 card-gray border border-[#1E293B] rounded-lg p-3">
        {bottomStats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-white text-lg sm:text-xl font-bold mb-1">
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm flex items-center justify-center">
              <div className={`w-2 h-2 ${stat.color} rounded-full mr-2`}></div>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default BountyDetails;
