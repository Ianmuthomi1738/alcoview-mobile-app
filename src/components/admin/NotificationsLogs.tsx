
import React, { useState } from 'react';
import { Bell, Activity, AlertTriangle, Info, CheckCircle, XCircle, Search, Filter } from 'lucide-react';

const NotificationsLogs = () => {
  const [activeTab, setActiveTab] = useState('notifications');
  const [filterType, setFilterType] = useState('all');

  const notifications = [
    {
      id: 1,
      title: 'New user registration',
      message: 'John Doe has registered a new account',
      type: 'info',
      time: '2 minutes ago',
      read: false
    },
    {
      id: 2,
      title: 'High order volume',
      message: 'Order volume increased by 150% in the last hour',
      type: 'success',
      time: '15 minutes ago',
      read: false
    },
    {
      id: 3,
      title: 'System maintenance',
      message: 'Scheduled maintenance will begin in 30 minutes',
      type: 'warning',
      time: '1 hour ago',
      read: true
    },
    {
      id: 4,
      title: 'Payment failed',
      message: 'Payment processing error for order #12345',
      type: 'error',
      time: '2 hours ago',
      read: true
    },
  ];

  const systemLogs = [
    {
      id: 1,
      action: 'User Login',
      user: 'admin@alcohnex.com',
      timestamp: '2024-01-20 14:30:25',
      status: 'Success',
      ip: '192.168.1.1'
    },
    {
      id: 2,
      action: 'Product Update',
      user: 'admin@alcohnex.com',
      timestamp: '2024-01-20 14:25:10',
      status: 'Success',
      ip: '192.168.1.1'
    },
    {
      id: 3,
      action: 'Failed Login Attempt',
      user: 'unknown@example.com',
      timestamp: '2024-01-20 14:20:05',
      status: 'Failed',
      ip: '192.168.1.100'
    },
    {
      id: 4,
      action: 'User Registration',
      user: 'john@example.com',
      timestamp: '2024-01-20 14:15:30',
      status: 'Success',
      ip: '192.168.1.50'
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'warning':
        return <AlertTriangle className="text-orange-500" size={20} />;
      case 'error':
        return <XCircle className="text-red-500" size={20} />;
      default:
        return <Info className="text-blue-500" size={20} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Success':
        return 'bg-green-100 text-green-700';
      case 'Failed':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const renderNotifications = () => (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Types</option>
            <option value="info">Info</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Mark All Read
          </button>
        </div>
        <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2">
          <Bell size={16} />
          Send Notification
        </button>
      </div>

      <div className="space-y-3">
        {notifications
          .filter(notification => filterType === 'all' || notification.type === filterType)
          .map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${
              notification.read 
                ? 'bg-white border-gray-200' 
                : 'bg-blue-50 border-blue-200'
            }`}
          >
            <div className="flex items-start gap-4">
              {getNotificationIcon(notification.type)}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{notification.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLogs = () => (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search logs..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter size={16} />
          Filter
        </button>
      </div>

      <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">User</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Timestamp</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">IP Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {systemLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{log.action}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{log.user}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{log.timestamp}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(log.status)}`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
          Notifications & Logs
        </h1>
        <p className="text-gray-600">Monitor system notifications and activity logs</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Unread Notifications', value: '12', icon: Bell, color: 'from-blue-500 to-blue-600' },
          { title: 'System Events', value: '1,234', icon: Activity, color: 'from-green-500 to-green-600' },
          { title: 'Error Logs', value: '3', icon: AlertTriangle, color: 'from-red-500 to-red-600' },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 overflow-hidden">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('notifications')}
            className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 font-medium transition-all duration-200 ${
              activeTab === 'notifications'
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Bell size={20} />
            Notifications
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 font-medium transition-all duration-200 ${
              activeTab === 'logs'
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Activity size={20} />
            System Logs
          </button>
        </div>
        
        <div className="p-6">
          {activeTab === 'notifications' ? renderNotifications() : renderLogs()}
        </div>
      </div>
    </div>
  );
};

export default NotificationsLogs;
