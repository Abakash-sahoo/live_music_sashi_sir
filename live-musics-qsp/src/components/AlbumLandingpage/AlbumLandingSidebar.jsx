import React, { useState } from "react";
import { FaFire, FaHeart, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const AlbumLandingSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isRotated, setIsRotated] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    setIsRotated(!isRotated);
  };

  const menuItems = [
    { name: "Popular Albums", icon: <FaFire />, target: "#popular-albums" },
    { name: "Only for You", icon: <FaHeart />, target: "#only-for-you" },
  ];

  return (
    <aside
      className={`flex flex-col min-h-screen bg-gray-900 p-4 text-white transition-all duration-300 ${isExpanded ? "w-60" : "w-16"
        }`}
    >
      <button
        onClick={toggleSidebar}
        className="flex items-center justify-center mb-4 p-2 text-lg bg-gray-800 rounded-md hover:bg-indigo-700 transition transform"
        style={{ transform: isRotated ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
      >
        {isExpanded ? <IoClose size={24} /> : <FaBars size={20} />}
      </button>

      <nav>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="group flex items-center gap-3 p-2 rounded-lg hover:bg-rose-600 cursor-pointer transition duration-200"
            >
              <a href={item.target} className="flex items-center gap-3">
                <span className="text-lg" title={item.name}>
                  {item.icon}
                </span>
                {isExpanded && <span className="text-md">{item.name}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AlbumLandingSidebar;
