
import React, { useState } from 'react';
import { Package, Clock, CheckCircle, XCircle, MapPin, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Order {
  id: string;
  date: string;
  status: 'pending' | 'processing' | 'delivered' | 'cancelled';
  items: Array<{
    name: string;
    quantity: number;
    price: number;
    image: string;
  }>;
  total: number;
  deliveryAddress: string;
  estimatedDelivery?: string;
}

interface OrderHistoryProps {
  onBack: () => void;
}

const OrderHistory = ({ onBack }: OrderHistoryProps) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const orders: Order[] = [
    {
      id: 'ORD-001',
      date: '2024-01-20',
      status: 'delivered',
      items: [
        { name: 'Tusker Lager', quantity: 6, price: 250, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=100&h=100&fit=crop' },
        { name: 'Jack Daniels', quantity: 1, price: 3500, image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=100&h=100&fit=crop' }
      ],
      total: 5000,
      deliveryAddress: 'Nairobi CBD, Kenya'
    },
    {
      id: 'ORD-002',
      date: '2024-01-18',
      status: 'processing',
      items: [
        { name: 'Wine Collection', quantity: 2, price: 1100, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=100&h=100&fit=crop' }
      ],
      total: 2400,
      deliveryAddress: 'Westlands, Nairobi',
      estimatedDelivery: '45 mins'
    },
    {
      id: 'ORD-003',
      date: '2024-01-15',
      status: 'cancelled',
      items: [
        { name: 'Premium Whiskey', quantity: 1, price: 5000, image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=100&h=100&fit=crop' }
      ],
      total: 5200,
      deliveryAddress: 'Karen, Nairobi'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="text-yellow-600" size={16} />;
      case 'processing': return <Package className="text-blue-600" size={16} />;
      case 'delivered': return <CheckCircle className="text-green-600" size={16} />;
      case 'cancelled': return <XCircle className="text-red-600" size={16} />;
      default: return <Clock className="text-gray-600" size={16} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'processing': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'delivered': return 'bg-green-100 text-green-700 border-green-200';
      case 'cancelled': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const filteredOrders = selectedFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-lg shadow-sm px-4 py-6 border-b border-gray-200/50">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 flex items-center gap-2">
            <Package size={28} className="text-blue-500" />
            Order History
          </h1>
          <p className="text-gray-600">Track your orders and reorder your favorites</p>
        </div>
      </div>
      
      <div className="container mx-auto max-w-4xl px-4 py-6 space-y-6">
        {/* Filters */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex gap-2 flex-wrap">
            {['all', 'pending', 'processing', 'delivered', 'cancelled'].map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className={`capitalize ${
                  selectedFilter === filter 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                    : ''
                }`}
              >
                {filter === 'all' ? 'All Orders' : filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center border border-white/20">
            <Package size={64} className="text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-medium mb-2">No orders found</h2>
            <p className="text-gray-500 mb-6">
              {selectedFilter === 'all' 
                ? "You haven't placed any orders yet." 
                : `No ${selectedFilter} orders found.`}
            </p>
            <Button 
              onClick={onBack}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Start Shopping
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div key={order.id} className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 overflow-hidden">
                {/* Order Header */}
                <div className="p-6 border-b border-gray-200/50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
                        <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">Ordered on {new Date(order.date).toLocaleDateString()}</p>
                      {order.estimatedDelivery && order.status === 'processing' && (
                        <p className="text-sm text-blue-600 font-medium">ETA: {order.estimatedDelivery}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">Ksh {order.total}</p>
                      <p className="text-sm text-gray-600">{order.items.length} items</p>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover shadow-md"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-600">Qty: {item.quantity} × Ksh {item.price}</p>
                        </div>
                        <p className="font-semibold text-gray-900">Ksh {item.quantity * item.price}</p>
                      </div>
                    ))}
                  </div>

                  {/* Delivery Address */}
                  <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg mb-4">
                    <MapPin size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Delivery Address</p>
                      <p className="font-medium">{order.deliveryAddress}</p>
                    </div>
                  </div>

                  {/* Order Actions */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    {order.status === 'delivered' && (
                      <>
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600">
                          Reorder
                        </Button>
                        <Button variant="outline" size="sm">
                          <Star size={16} className="mr-1" />
                          Rate
                        </Button>
                      </>
                    )}
                    {order.status === 'processing' && (
                      <Button variant="outline" size="sm" className="text-blue-600">
                        Track Order
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
