
import React from 'react';
import { Bell, Menu, User, LogOut } from 'lucide-react';

interface VendorTopbarProps {
  onLogout: () => void;
  onToggleSidebar: () => void;
}

const VendorTopbar = ({ onLogout, onToggleSidebar }: VendorTopbarProps) => {
  return (
    <div className="bg-white/95 backdrop-blur-lg border-b border-gray-200/50 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
          >
            <Menu size={20} />
          </button>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Good morning, Vendor!</h2>
            <p className="text-sm text-gray-600">Let's manage your business today</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          
          {/* Profile Dropdown */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorTopbar;
