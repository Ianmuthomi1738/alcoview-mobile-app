
import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Truck,
  BarChart3,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

type VendorView = 'dashboard' | 'products' | 'orders' | 'delivery' | 'analytics';

interface VendorSidebarProps {
  currentView: VendorView;
  onViewChange: (view: VendorView) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const VendorSidebar = ({ currentView, onViewChange, collapsed, onToggleCollapse }: VendorSidebarProps) => {
  const menuItems = [
    {
      id: 'dashboard' as VendorView,
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      id: 'products' as VendorView,
      label: 'Products',
      icon: Package,
    },
    {
      id: 'orders' as VendorView,
      label: 'Orders',
      icon: ShoppingBag,
    },
    {
      id: 'delivery' as VendorView,
      label: 'Delivery',
      icon: Truck,
    },
    {
      id: 'analytics' as VendorView,
      label: 'Analytics',
      icon: BarChart3,
    },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-white/95 backdrop-blur-lg shadow-2xl border-r border-gray-200/50 transition-all duration-300 z-30 ${collapsed ? 'w-20' : 'w-64'}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200/50">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Vendor Panel
                </h1>
                <p className="text-xs text-gray-500">AlcohNex Partner</p>
              </div>
            </div>
          )}
          <button
            onClick={onToggleCollapse}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              title={collapsed ? item.label : undefined}
            >
              <Icon size={20} className={`${isActive ? 'text-white' : 'text-gray-600'} group-hover:scale-110 transition-transform`} />
              {!collapsed && (
                <span className={`font-medium ${isActive ? 'text-white' : 'text-gray-700'}`}>
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default VendorSidebar;
