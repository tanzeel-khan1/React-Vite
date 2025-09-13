import { useState } from "react";
import { Search, Trophy, Gift, User, Share2, Settings } from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("Profile");

  const menuItems = [
    { name: "Explore", icon: <Search size={18} /> },
    { name: "Leaderboard", icon: <Trophy size={18} /> },
    { name: "Rewards", icon: <Gift size={18} /> },
    { name: "Profile", icon: <User size={18} /> },
    { name: "Referral", icon: <Share2 size={18} /> },
    { name: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="h-screen w-56 bg-black text-gray-300 flex flex-col py-4">
      {menuItems.map((item) => (
        <button
          key={item.name}
          onClick={() => setActive(item.name)}
          className={`flex items-center gap-3 px-5 py-3 text-sm font-medium hover:text-white transition-colors ${
            active === item.name
              ? "bg-gradient-to-r from-blue-900/30 to-transparent text-white border-r-4 border-blue-500"
              : ""
          }`}
        >
          
          {item.icon}
          <span>{item.name}</span>
        </button>
      ))}
    </div>
  );
}
