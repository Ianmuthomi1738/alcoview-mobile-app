
import React, { useState } from 'react';
import { Search, Package, Clock, CheckCircle, XCircle, Eye, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const OrderManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      items: ['Tusker Lager x6', 'Jack Daniels x1'],
      total: 4200,
      status: 'pending',
      time: '10 mins ago',
      address: 'Nairobi CBD, Kenya',
      phone: '+254 712 345 678'
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      items: ['Wine Collection x2', 'Whiskey x1'],
      total: 8500,
      status: 'processing',
      time: '25 mins ago',
      address: 'Westlands, Nairobi',
      phone: '+254 723 456 789'
    },
    {
      id: 'ORD-003',
      customer: 'Mike Johnson',
      items: ['Craft Beer Pack x3'],
      total: 3600,
      status: 'ready',
      time: '1 hour ago',
      address: 'Karen, Nairobi',
      phone: '+254 734 567 890'
    },
    {
      id: 'ORD-004',
      customer: 'Sarah Wilson',
      items: ['Premium Spirits x1'],
      total: 5500,
      status: 'delivered',
      time: '2 hours ago',
      address: 'Kilimani, Nairobi',
      phone: '+254 745 678 901'
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="text-yellow-600" size={16} />;
      case 'processing': return <Package className="text-blue-600" size={16} />;
      case 'ready': return <CheckCircle className="text-green-600" size={16} />;
      case 'delivered': return <CheckCircle className="text-green-600" size={16} />;
      case 'cancelled': return <XCircle className="text-red-600" size={16} />;
      default: return <Clock className="text-gray-600" size={16} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'processing': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'ready': return 'bg-green-100 text-green-700 border-green-200';
      case 'delivered': return 'bg-green-100 text-green-700 border-green-200';
      case 'cancelled': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleStatusUpdate = (orderId: string, newStatus: string) => {
    console.log(`Updating order ${orderId} to ${newStatus}`);
    // Handle status update logic here
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
          Order Management
        </h1>
        <p className="text-gray-600">View and manage customer orders</p>
      </div>

      {/* Filters */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {['all', 'pending', 'processing', 'ready', 'delivered'].map((status) => (
              <Button
                key={status}
                variant={statusFilter === status ? "default" : "outline"}
                onClick={() => setStatusFilter(status)}
                className={`capitalize ${statusFilter === status ? 'bg-gradient-to-r from-green-500 to-emerald-600' : ''}`}
              >
                {status}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              {/* Order Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
                  <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    {order.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-gray-600 text-sm">Customer</p>
                    <p className="font-medium">{order.customer}</p>
                    <p className="text-sm text-gray-500">{order.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Delivery Address</p>
                    <div className="flex items-start gap-1">
                      <MapPin size={14} className="text-gray-400 mt-0.5" />
                      <p className="text-sm">{order.address}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <p className="text-gray-600 text-sm mb-1">Items</p>
                  <div className="flex flex-wrap gap-2">
                    {order.items.map((item, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Amount</p>
                    <p className="text-xl font-bold text-gray-900">Ksh {order.total}</p>
                  </div>
                  <p className="text-sm text-gray-500">{order.time}</p>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-col gap-2 min-w-[200px]">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full"
                >
                  <Eye size={16} className="mr-2" />
                  View Details
                </Button>
                
                {order.status === 'pending' && (
                  <Button
                    size="sm"
                    onClick={() => handleStatusUpdate(order.id, 'processing')}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                  >
                    Accept Order
                  </Button>
                )}
                
                {order.status === 'processing' && (
                  <Button
                    size="sm"
                    onClick={() => handleStatusUpdate(order.id, 'ready')}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  >
                    Mark Ready
                  </Button>
                )}
                
                {order.status === 'ready' && (
                  <Button
                    size="sm"
                    onClick={() => handleStatusUpdate(order.id, 'delivered')}
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                  >
                    Mark Delivered
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderManagement;
