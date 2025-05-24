
import React from 'react';
import { Users, ShoppingCart, TrendingUp, DollarSign, Activity, Package } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '12,345',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Total Sales',
      value: 'Ksh 234,567',
      change: '+8%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Orders',
      value: '1,234',
      change: '+15%',
      changeType: 'positive',
      icon: ShoppingCart,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Products',
      value: '567',
      change: '+3%',
      changeType: 'positive',
      icon: Package,
      color: 'from-orange-500 to-orange-600'
    },
  ];

  const recentActivity = [
    { id: 1, action: 'New user registered', user: 'John Doe', time: '2 minutes ago' },
    { id: 2, action: 'Order completed', user: 'Jane Smith', time: '5 minutes ago' },
    { id: 3, action: 'Product added', user: 'Admin', time: '10 minutes ago' },
    { id: 4, action: 'User updated profile', user: 'Mike Johnson', time: '15 minutes ago' },
    { id: 5, action: 'New review posted', user: 'Sarah Wilson', time: '20 minutes ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your platform.</p>
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
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  stat.changeType === 'positive' 
                    ? 'text-green-700 bg-green-100' 
                    : 'text-red-700 bg-red-100'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-blue-600" size={24} />
            <h3 className="text-xl font-bold text-gray-900">Sales Trend</h3>
          </div>
          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} className="text-white" />
              </div>
              <p className="text-gray-600">Sales chart visualization</p>
              <p className="text-sm text-gray-500">Interactive charts coming soon</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="text-green-600" size={24} />
            <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">by {activity.user}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-center text-blue-600 hover:text-blue-700 font-medium text-sm py-2 rounded-lg hover:bg-blue-50 transition-colors">
            View all activity
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Add New User', desc: 'Create a new user account', color: 'from-blue-500 to-blue-600' },
            { title: 'Add Product', desc: 'Add new product to catalog', color: 'from-green-500 to-green-600' },
            { title: 'Send Notification', desc: 'Send announcement to users', color: 'from-purple-500 to-purple-600' },
          ].map((action, index) => (
            <button
              key={index}
              className={`p-6 bg-gradient-to-r ${action.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left`}
            >
              <h4 className="font-semibold mb-2">{action.title}</h4>
              <p className="text-sm opacity-90">{action.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
