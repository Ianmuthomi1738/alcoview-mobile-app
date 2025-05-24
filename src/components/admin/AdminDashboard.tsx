
import React, { useState } from 'react';
import { Users, ShoppingCart, TrendingUp, DollarSign, Activity, Package, UserCheck, Bell, Crown, FileText } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

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
    {
      title: 'Active Vendors',
      value: '23',
      change: '+5%',
      changeType: 'positive',
      icon: UserCheck,
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Premium Subscribers',
      value: '89',
      change: '+18%',
      changeType: 'positive',
      icon: Crown,
      color: 'from-yellow-500 to-yellow-600'
    },
  ];

  const recentActivity = [
    { id: 1, action: 'New vendor registration', user: 'Vendor XYZ', time: '2 minutes ago', type: 'vendor' },
    { id: 2, action: 'Premium subscription activated', user: 'Jane Smith', time: '5 minutes ago', type: 'subscription' },
    { id: 3, action: 'Product approval required', user: 'Vendor ABC', time: '10 minutes ago', type: 'approval' },
    { id: 4, action: 'Order completed', user: 'Mike Johnson', time: '15 minutes ago', type: 'order' },
    { id: 5, action: 'New user registered', user: 'Sarah Wilson', time: '20 minutes ago', type: 'user' },
  ];

  const pendingApprovals = [
    { id: 1, type: 'Vendor', name: 'Premium Wines Co.', status: 'pending', date: '2024-01-15' },
    { id: 2, type: 'Product', name: 'Vintage Whiskey 2021', status: 'pending', date: '2024-01-14' },
    { id: 3, type: 'Vendor', name: 'Local Brewery Ltd.', status: 'pending', date: '2024-01-13' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-lg border border-white/20">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 text-sm md:text-base">Welcome back! Here's what's happening with your platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${stat.color} rounded-lg md:rounded-xl flex items-center justify-center shadow-lg`}>
                  <Icon size={20} className="text-white md:w-6 md:h-6" />
                </div>
                <span className={`text-xs md:text-sm font-medium px-2 py-1 rounded-full ${
                  stat.changeType === 'positive' 
                    ? 'text-green-700 bg-green-100' 
                    : 'text-red-700 bg-red-100'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{stat.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="xl:col-span-2 bg-white/80 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-lg border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="text-green-600" size={24} />
            <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
          </div>
          <div className="space-y-3 md:space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'vendor' ? 'bg-blue-500' :
                  activity.type === 'subscription' ? 'bg-yellow-500' :
                  activity.type === 'approval' ? 'bg-orange-500' :
                  activity.type === 'order' ? 'bg-green-500' : 'bg-purple-500'
                }`}></div>
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

        {/* Pending Approvals */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-lg border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-orange-600" size={24} />
            <h3 className="text-xl font-bold text-gray-900">Pending Approvals</h3>
          </div>
          <div className="space-y-4">
            {pendingApprovals.map((item) => (
              <div key={item.id} className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                    {item.type}
                  </span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <p className="text-sm font-medium text-gray-900 mb-3">{item.name}</p>
                <div className="flex gap-2">
                  <button className="flex-1 text-xs py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    Approve
                  </button>
                  <button className="flex-1 text-xs py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-lg border border-white/20">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Manage Users', desc: 'View and manage user accounts', color: 'from-blue-500 to-blue-600', icon: Users },
            { title: 'Add Vendor', desc: 'Approve new vendor registration', color: 'from-green-500 to-green-600', icon: UserCheck },
            { title: 'Send Notification', desc: 'Send platform-wide announcement', color: 'from-purple-500 to-purple-600', icon: Bell },
            { title: 'View Reports', desc: 'Access analytics and reports', color: 'from-orange-500 to-orange-600', icon: TrendingUp },
          ].map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                className={`p-4 md:p-6 bg-gradient-to-r ${action.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left group`}
              >
                <Icon size={24} className="mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2 text-sm md:text-base">{action.title}</h4>
                <p className="text-xs md:text-sm opacity-90">{action.desc}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
