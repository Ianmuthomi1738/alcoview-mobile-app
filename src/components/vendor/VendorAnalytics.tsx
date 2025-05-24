
import React from 'react';
import { TrendingUp, DollarSign, Package, Users, Calendar, BarChart3 } from 'lucide-react';

const VendorAnalytics = () => {
  const monthlyStats = [
    { month: 'Jan', sales: 45000, orders: 125 },
    { month: 'Feb', sales: 52000, orders: 142 },
    { month: 'Mar', sales: 48000, orders: 138 },
    { month: 'Apr', sales: 61000, orders: 165 },
    { month: 'May', sales: 58000, orders: 159 },
    { month: 'Jun', sales: 67000, orders: 182 }
  ];

  const topProducts = [
    { name: 'Premium Whiskey', sales: 45, revenue: 225000 },
    { name: 'Craft Beer Pack', sales: 78, revenue: 93600 },
    { name: 'Wine Collection', sales: 32, revenue: 112000 },
    { name: 'Vodka Premium', sales: 28, revenue: 84000 },
    { name: 'Rum Selection', sales: 19, revenue: 57000 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
          Analytics Dashboard
        </h1>
        <p className="text-gray-600">Track your business performance and insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Total Revenue',
            value: 'Ksh 567,000',
            change: '+18%',
            icon: DollarSign,
            color: 'from-green-500 to-green-600'
          },
          {
            title: 'Total Orders',
            value: '1,234',
            change: '+12%',
            icon: Package,
            color: 'from-blue-500 to-blue-600'
          },
          {
            title: 'Active Products',
            value: '127',
            change: '+5',
            icon: BarChart3,
            color: 'from-purple-500 to-purple-600'
          },
          {
            title: 'Customer Reach',
            value: '892',
            change: '+24%',
            icon: Users,
            color: 'from-orange-500 to-orange-600'
          }
        ].map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Icon size={24} className="text-white" />
                </div>
                <span className="text-green-600 text-sm font-medium">{metric.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-gray-600 text-sm">{metric.title}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Sales Chart */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-green-600" size={24} />
            <h3 className="text-xl font-bold text-gray-900">Monthly Performance</h3>
          </div>
          
          <div className="space-y-4">
            {monthlyStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{stat.month}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Ksh {stat.sales.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">{stat.orders} orders</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                      style={{ width: `${(stat.sales / 70000) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <Package className="text-green-600" size={24} />
            <h3 className="text-xl font-bold text-gray-900">Top Performing Products</h3>
          </div>
          
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">#{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.sales} units sold</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">Ksh {product.revenue.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="text-green-600" size={24} />
          <h3 className="text-xl font-bold text-gray-900">Performance Insights</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
            <h4 className="font-semibold text-green-800 mb-2">Best Selling Day</h4>
            <p className="text-green-700">Fridays generate 23% more sales</p>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Peak Hours</h4>
            <p className="text-blue-700">6-8 PM accounts for 35% of orders</p>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
            <h4 className="font-semibold text-purple-800 mb-2">Customer Preference</h4>
            <p className="text-purple-700">Premium products drive 45% of revenue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorAnalytics;
