
import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Crown, Calendar, DollarSign, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";

const SubscriptionManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const subscriptions = [
    {
      id: 1,
      user: 'John Doe',
      email: 'john@example.com',
      plan: 'Premium',
      status: 'Active',
      startDate: '2024-01-15',
      endDate: '2024-07-15',
      amount: 2500,
      features: ['Free Delivery', 'Priority Support', 'Exclusive Products']
    },
    {
      id: 2,
      user: 'Jane Smith',
      email: 'jane@example.com',
      plan: 'Gold',
      status: 'Active',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      amount: 5000,
      features: ['All Premium Features', 'Bulk Discounts', 'Personal Shopper']
    },
    {
      id: 3,
      user: 'Mike Johnson',
      email: 'mike@example.com',
      plan: 'Premium',
      status: 'Paused',
      startDate: '2023-12-01',
      endDate: '2024-06-01',
      amount: 2500,
      features: ['Free Delivery', 'Priority Support', 'Exclusive Products']
    }
  ];

  const plans = [
    {
      name: 'Premium',
      price: 2500,
      duration: '6 months',
      features: ['Free Delivery', 'Priority Support', 'Exclusive Products'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Gold',
      price: 5000,
      duration: '12 months',
      features: ['All Premium Features', 'Bulk Discounts', 'Personal Shopper'],
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700 border-green-200';
      case 'Paused': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Cancelled': return 'bg-red-100 text-red-700 border-red-200';
      case 'Expired': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleStatusUpdate = (id: number, newStatus: string) => {
    console.log(`Updating subscription ${id} to ${newStatus}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Subscription Management
        </h1>
        <p className="text-gray-600">Manage user subscriptions and premium plans</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Total Subscribers', value: '245', icon: Users, color: 'from-blue-500 to-blue-600' },
          { title: 'Active Plans', value: '198', icon: Crown, color: 'from-green-500 to-green-600' },
          { title: 'Monthly Revenue', value: 'Ksh 485,000', icon: DollarSign, color: 'from-purple-500 to-purple-600' },
          { title: 'Expiring Soon', value: '12', icon: Calendar, color: 'from-orange-500 to-orange-600' },
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

      {/* Subscription Plans */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Available Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center`}>
                  <Crown size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{plan.name}</h4>
                  <p className="text-sm text-gray-600">{plan.duration}</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">Ksh {plan.price}</p>
              <ul className="space-y-2 mb-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button size="sm" variant="outline" className="w-full">
                <Edit size={16} className="mr-2" />
                Edit Plan
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search subscribers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {['all', 'active', 'paused', 'cancelled', 'expired'].map((status) => (
              <Button
                key={status}
                variant={statusFilter === status ? "default" : "outline"}
                onClick={() => setStatusFilter(status)}
                className={`capitalize ${statusFilter === status ? 'bg-gradient-to-r from-purple-500 to-pink-600' : ''}`}
              >
                {status}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Subscriptions List */}
      <div className="space-y-4">
        {subscriptions.map((subscription) => (
          <div key={subscription.id} className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* User Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {subscription.user.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{subscription.user}</h3>
                      <p className="text-sm text-gray-600">{subscription.email}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-gray-600">Plan</p>
                      <div className="flex items-center gap-2">
                        <Crown size={16} className="text-yellow-500" />
                        <span className="font-medium">{subscription.plan}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Amount</p>
                      <p className="font-semibold">Ksh {subscription.amount}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-gray-600">Start Date</p>
                      <p className="font-medium">{new Date(subscription.startDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">End Date</p>
                      <p className="font-medium">{new Date(subscription.endDate).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-1">Features</p>
                    <div className="flex flex-wrap gap-2">
                      {subscription.features.map((feature, index) => (
                        <span key={index} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-lg text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Status and Actions */}
                <div className="flex flex-col gap-3 min-w-[200px]">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(subscription.status)} self-start`}>
                    {subscription.status}
                  </span>
                  
                  <div className="flex flex-col gap-2">
                    <Button size="sm" variant="outline" className="w-full">
                      <Edit size={16} className="mr-2" />
                      Edit
                    </Button>
                    
                    {subscription.status === 'Active' && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleStatusUpdate(subscription.id, 'Paused')}
                        className="w-full text-yellow-600 hover:text-yellow-700"
                      >
                        Pause
                      </Button>
                    )}
                    
                    {subscription.status === 'Paused' && (
                      <Button
                        size="sm"
                        onClick={() => handleStatusUpdate(subscription.id, 'Active')}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600"
                      >
                        Resume
                      </Button>
                    )}
                    
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleStatusUpdate(subscription.id, 'Cancelled')}
                      className="w-full text-red-600 hover:text-red-700"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionManagement;
