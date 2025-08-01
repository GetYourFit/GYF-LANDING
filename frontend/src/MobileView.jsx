import React from "react";

import { ChevronDown, Menu, X, Dumbbell, Users, Shield, FileText,Sparkles,Smile,Shirt,HeartHandshake,Leaf,TrendingUp,Zap,Eye,Globe,Code,Camera,ShoppingBag, Mail, Phone, MapPin, Star, CheckCircle, Award, Target } from 'lucide-react';

const MobileView = ({item,setCurrentPage,setIsMenuOpen,setIsServicesOpen,isServicesOpen,currentPage}) => {
    const handleClick=(sub)=>{
        console.log(`Navigating to ${sub.id}`);
                // setCurrentPage(sub.id);
                // setIsMenuOpen(false);
                // setIsServicesOpen(false);
    }
    return (
        <div key={item.id} className="w-full">
            {console.log(item)}
      <div
        className="flex justify-between items-center w-full px-4 py-3 rounded-lg transition-all duration-300 text-left font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50"
      >
        <span
          className="cursor-default"
          onClick={() => {
            // Optional: if you want clicking label to navigate or do nothing
            // setCurrentPage(item.id);
            // setIsMenuOpen(false);
            // setIsServicesOpen(false);
          }}
        >
          {item.label}
        </span>
        <ChevronDown
          className={`w-4 h-4 ml-2 cursor-pointer transition-transform duration-200 ${
            isServicesOpen ? 'rotate-180 text-blue-600' : 'text-slate-500'
          }`}
          onClick={(e) => {
            setIsServicesOpen(true);
          }}
        />
      </div>

      {isServicesOpen && (
        <div className="pl-4 pr-2 max-h-60 overflow-y-auto space-y-1 mb-2">
          {item.dropdown.map((sub) => (
            <button
              key={sub.id}
              onClick={()=>handleClick(sub)}
              className={`w-full text-left px-4 py-2 text-sm rounded-lg font-medium transition-colors duration-200 ${
                currentPage === sub.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {sub.label}
            </button>
          ))}
        </div>
      )}
    </div>
    )
}
export default MobileView;