
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  Bell,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

type AdminView = 'dashboard' | 'users' | 'content' | 'settings' | 'notifications';

interface AdminSidebarProps {
  currentView: AdminView;
  onViewChange: (view: AdminView) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const AdminSidebar = ({ currentView, onViewChange, collapsed, onToggleCollapse }: AdminSidebarProps) => {
  const menuItems = [
    {
      id: 'dashboard' as AdminView,
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      id: 'users' as AdminView,
      label: 'User Management',
      icon: Users,
    },
    {
      id: 'content' as AdminView,
      label: 'Content Management',
      icon: FileText,
    },
    {
      id: 'notifications' as AdminView,
      label: 'Notifications & Logs',
      icon: Bell,
    },
    {
      id: 'settings' as AdminView,
      label: 'Settings',
      icon: Settings,
    },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-white/95 backdrop-blur-lg shadow-2xl border-r border-gray-200/50 transition-all duration-300 z-30 ${collapsed ? 'w-20' : 'w-64'}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200/50">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Admin Panel
                </h1>
                <p className="text-xs text-gray-500">AlcohNex Management</p>
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
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
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

      {/* Footer */}
      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200/50">
            <p className="text-sm font-medium text-gray-700 mb-1">System Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-600">All systems operational</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSidebar;
