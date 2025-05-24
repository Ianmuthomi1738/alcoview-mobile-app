
import React from 'react';
import { Package, DollarSign, ShoppingBag, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const VendorDashboard = () => {
  const stats = [
    {
      title: 'Total Products',
      value: '127',
      change: '+5 this week',
      changeType: 'positive',
      icon: Package,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Total Sales',
      value: 'Ksh 85,450',
      change: '+12% this month',
      changeType: 'positive',
      icon: DollarSign,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Pending Orders',
      value: '23',
      change: '8 urgent',
      changeType: 'neutral',
      icon: ShoppingBag,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Growth Rate',
      value: '+18%',
      change: 'vs last month',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600'
    },
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'John Doe', amount: 'Ksh 2,500', status: 'pending', time: '10 mins ago' },
    { id: '#ORD-002', customer: 'Jane Smith', amount: 'Ksh 4,200', status: 'processing', time: '25 mins ago' },
    { id: '#ORD-003', customer: 'Mike Johnson', amount: 'Ksh 1,800', status: 'delivered', time: '1 hour ago' },
    { id: '#ORD-004', customer: 'Sarah Wilson', amount: 'Ksh 3,600', status: 'pending', time: '2 hours ago' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'processing': return 'bg-blue-100 text-blue-700';
      case 'delivered': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
          Vendor Dashboard
        </h1>
        <p className="text-gray-600">Overview of your business performance and recent activity</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm mb-1">{stat.title}</p>
                <p className="text-xs text-gray-500">{stat.change}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Orders and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingBag className="text-green-600" size={24} />
            <h3 className="text-xl font-bold text-gray-900">Recent Orders</h3>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-medium text-gray-900">{order.id}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{order.customer}</p>
                  <p className="text-xs text-gray-400">{order.time}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{order.amount}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-center text-green-600 hover:text-green-700 font-medium text-sm py-2 rounded-lg hover:bg-green-50 transition-colors">
            View all orders
          </button>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="space-y-4">
            {[
              { title: 'Add New Product', desc: 'Expand your catalog', color: 'from-blue-500 to-blue-600', icon: Package },
              { title: 'Process Orders', desc: 'Review pending orders', color: 'from-orange-500 to-orange-600', icon: Clock },
              { title: 'Update Inventory', desc: 'Manage stock levels', color: 'from-purple-500 to-purple-600', icon: CheckCircle },
            ].map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  className={`w-full p-4 bg-gradient-to-r ${action.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left flex items-center gap-4`}
                >
                  <Icon size={24} />
                  <div>
                    <h4 className="font-semibold">{action.title}</h4>
                    <p className="text-sm opacity-90">{action.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
