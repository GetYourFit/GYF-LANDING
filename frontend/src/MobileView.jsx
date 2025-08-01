import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const MobileView = ({
  item,
  setCurrentPage,
  setIsMenuOpen,
  currentPage,
}) => {
  const [isOpen, setIsOpen] = useState(false); // ✅ local toggle state

  const handleClick = (sub) => {
    console.log("Clicked subitem:", sub);
    setCurrentPage(sub.id);       // ✅ navigate
    setIsMenuOpen(false);         // ✅ close mobile menu
    setIsOpen(false);             // ✅ close dropdown
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);   // ✅ toggle open/collapse
  };

  return (
    <div key={item.id} className="w-full">
      {console.log("Rendering dropdown:", item.dropdown)}

      {/* Header with toggle */}
      <div
        className="flex justify-between items-center w-full px-4 py-3 rounded-lg transition-all duration-300 text-left font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50"
      >
        <span>{item.label}</span>
        <ChevronDown
          className={`w-4 h-4 ml-2 cursor-pointer transition-transform duration-200 ${
            isOpen ? "rotate-180 text-blue-600" : "text-slate-500"
          }`}
          onClick={toggleDropdown}
        />
      </div>

      {/* Dropdown content */}
      {isOpen && (
        <div className="pl-4 pr-2 max-h-60 overflow-y-auto space-y-1 mb-2">
          {item.dropdown.map((sub) => (
            <button
              key={sub.id}
              onClick={() => handleClick(sub)}
              className={`w-full text-left px-4 py-2 text-sm rounded-lg font-medium transition-colors duration-200 ${
                currentPage === sub.id
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {sub.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileView;
