// import React from 'react'
// import Usage from './api/Usage'
// const App = () => {
//   return (
//     <div>
//       <Usage/>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const CampaignAnalytics = ({ 
  campaigns = [], 
  title = "Campaign Analytics",
  showLastMonth = true,
  className = ""
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("Last Month");

  // Default data if no campaigns provided
  const defaultCampaigns = [
    {
      campaign: "HubMe $300 BTC...",
      reach: 7631,
      clicks: 5674,
      submissions: 3161,
      conversionRate: 53.47,
      costPerClick: 0.085,
      amountSpent: 950.00
    },
    {
      campaign: "HubMe $300 BTC...",
      reach: 7631,
      clicks: 5674,
      submissions: 3161,
      conversionRate: 53.47,
      costPerClick: 0.085,
      amountSpent: 950.00
    },
    {
      campaign: "Taskbound Beta...",
      reach: 10263,
      clicks: 8921,
      submissions: 6028,
      conversionRate: 58.34,
      costPerClick: 0.055,
      amountSpent: 500.00
    },
    {
      campaign: "Taskbound Beta...",
      reach: 10263,
      clicks: 8921,
      submissions: 6028,
      conversionRate: 58.34,
      costPerClick: 0.055,
      amountSpent: 500.00
    },
    {
      campaign: "Taskbound Beta...",
      reach: 10263,
      clicks: 8921,
      submissions: 6028,
      conversionRate: 58.34,
      costPerClick: 0.055,
      amountSpent: 500.00
    },
    {
      campaign: "Taskbound Beta...",
      reach: 10263,
      clicks: 8921,
      submissions: 6028,
      conversionRate: 58.34,
      costPerClick: 0.055,
      amountSpent: 500.00
    }
  ];

  const data = campaigns.length > 0 ? campaigns : defaultCampaigns;
  const periods = ["Last Month", "Last Week", "Last 3 Months", "Last Year"];

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  const formatCurrency = (amount) => {
    return `$${amount.toFixed(3)}`;
  };

  const formatPercentage = (percentage) => {
    return `${percentage}%`;
  };

  return (
    <div className={`bg-gray-900 text-white rounded-lg p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        
        {showLastMonth && (
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
            >
              <span className="text-sm text-gray-300">{selectedPeriod}</span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-10">
                {periods.map((period) => (
                  <button
                    key={period}
                    onClick={() => {
                      setSelectedPeriod(period);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 first:rounded-t-md last:rounded-b-md transition-colors"
                  >
                    {period}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Campaign</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Reach</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Clicks</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Submissions</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Conversion Rate</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Cost Per Click</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Amount Spent</th>
            </tr>
          </thead>
          <tbody>
            {data.map((campaign, index) => (
              <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                <td className="py-4 px-4">
                  <span className="text-white font-medium">{campaign.campaign}</span>
                </td>
                <td className="py-4 px-4 text-gray-300">{formatNumber(campaign.reach)}</td>
                <td className="py-4 px-4 text-gray-300">{formatNumber(campaign.clicks)}</td>
                <td className="py-4 px-4 text-gray-300">{formatNumber(campaign.submissions)}</td>
                <td className="py-4 px-4 text-green-400 font-medium">{formatPercentage(campaign.conversionRate)}</td>
                <td className="py-4 px-4 text-gray-300">{formatCurrency(campaign.costPerClick)}</td>
                <td className="py-4 px-4 text-gray-300">{formatCurrency(campaign.amountSpent)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary or additional info */}
      {data.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-400">No campaign data available</p>
        </div>
      )}
    </div>
  );
};

// Example usage component
const ExampleUsage = () => {
  const sampleCampaigns = [
    {
      campaign: "Summer Sale 2024",
      reach: 15000,
      clicks: 12000,
      submissions: 8500,
      conversionRate: 70.83,
      costPerClick: 0.042,
      amountSpent: 504.00
    },
    {
      campaign: "Black Friday Special",
      reach: 25000,
      clicks: 18500,
      submissions: 12300,
      conversionRate: 66.49,
      costPerClick: 0.038,
      amountSpent: 703.00
    }
  ];

  return (
    <div className="space-y-8 p-4 bg-gray-100 min-h-screen">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Default Usage</h3>
        <CampaignAnalytics />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">With Custom Data</h3>
        <CampaignAnalytics 
          campaigns={sampleCampaigns}
          title="Q4 Marketing Analytics"
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Without Dropdown</h3>
        <CampaignAnalytics 
          campaigns={sampleCampaigns}
          title="Simple Analytics View"
          showLastMonth={false}
        />
      </div>
    </div>
  );
};

export default ExampleUsage;