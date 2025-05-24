
import React, { useState } from 'react';
import VendorSidebar from './VendorSidebar';
import VendorTopbar from './VendorTopbar';
import VendorDashboard from './VendorDashboard';
import ProductManagement from './ProductManagement';
import OrderManagement from './OrderManagement';
import DeliveryTracking from './DeliveryTracking';
import VendorAnalytics from './VendorAnalytics';

type VendorView = 'dashboard' | 'products' | 'orders' | 'delivery' | 'analytics';

interface VendorPanelProps {
  onLogout: () => void;
}

const VendorPanel = ({ onLogout }: VendorPanelProps) => {
  const [currentView, setCurrentView] = useState<VendorView>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <VendorDashboard />;
      case 'products':
        return <ProductManagement />;
      case 'orders':
        return <OrderManagement />;
      case 'delivery':
        return <DeliveryTracking />;
      case 'analytics':
        return <VendorAnalytics />;
      default:
        return <VendorDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex">
      <VendorSidebar 
        currentView={currentView}
        onViewChange={setCurrentView}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <VendorTopbar 
          onLogout={onLogout}
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default VendorPanel;
