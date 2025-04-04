import React from "react";
import {
  FaInbox,
  FaRegEnvelope,
  FaTrash,
  FaStar,
  FaEdit,
} from "react-icons/fa";

export default function RightSideMenu({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 0, label: "Inbox", icon: FaInbox },
    { id: 1, label: "Sent Item", icon: FaRegEnvelope },
    { id: 2, label: "Draft", icon: FaEdit },
    { id: 3, label: "Starred", icon: FaStar },
    { id: 4, label: "Deleted", icon: FaTrash },
  ];

  return (
    <div>
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`h-[40px] cursor-pointer flex items-center gap-3 px-3 ${
            activeTab === item.id
              ? "bg-blue-500 text-white font-bold"
              : "hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab(item.id)}
        >
          <item.icon size={20} />
          {item.label}
        </div>
      ))}
    </div>
  );
}
