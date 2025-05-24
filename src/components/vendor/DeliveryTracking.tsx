
import React from 'react';
import { MapPin, Clock, User, Phone, CheckCircle, Truck } from 'lucide-react';

const DeliveryTracking = () => {
  const deliveries = [
    {
      id: 'DEL-001',
      orderId: 'ORD-001',
      customer: 'John Doe',
      driver: 'David Kimani',
      driverPhone: '+254 701 234 567',
      status: 'on_route',
      estimatedTime: '15 mins',
      address: 'Nairobi CBD, Kenya',
      trackingSteps: [
        { title: 'Order Confirmed', completed: true, time: '10:30 AM' },
        { title: 'Being Prepared', completed: true, time: '10:45 AM' },
        { title: 'Out for Delivery', completed: true, time: '11:15 AM' },
        { title: 'Age Verification Required', completed: false, time: 'Pending' },
        { title: 'Delivered', completed: false, time: 'Pending' }
      ]
    },
    {
      id: 'DEL-002',
      orderId: 'ORD-002',
      customer: 'Jane Smith',
      driver: 'Peter Mwangi',
      driverPhone: '+254 702 345 678',
      status: 'age_verification',
      estimatedTime: 'At location',
      address: 'Westlands, Nairobi',
      trackingSteps: [
        { title: 'Order Confirmed', completed: true, time: '09:30 AM' },
        { title: 'Being Prepared', completed: true, time: '09:45 AM' },
        { title: 'Out for Delivery', completed: true, time: '10:30 AM' },
        { title: 'Age Verification Required', completed: true, time: '11:00 AM' },
        { title: 'Delivered', completed: false, time: 'Pending' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on_route': return 'bg-blue-100 text-blue-700';
      case 'age_verification': return 'bg-yellow-100 text-yellow-700';
      case 'delivered': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'on_route': return 'On Route';
      case 'age_verification': return 'Age Verification';
      case 'delivered': return 'Delivered';
      default: return 'Unknown';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
          Delivery Tracking
        </h1>
        <p className="text-gray-600">Monitor real-time delivery status and driver information</p>
      </div>

      {/* Active Deliveries */}
      <div className="space-y-6">
        {deliveries.map((delivery) => (
          <div key={delivery.id} className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            {/* Delivery Header */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{delivery.id}</h3>
                  <span className="text-sm text-gray-500">({delivery.orderId})</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(delivery.status)}`}>
                    {getStatusText(delivery.status)}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">Customer:</span>
                    <span className="font-medium">{delivery.customer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">ETA:</span>
                    <span className="font-medium text-green-600">{delivery.estimatedTime}</span>
                  </div>
                </div>
              </div>
              
              {/* Driver Info */}
              <div className="bg-gray-50 rounded-xl p-4 min-w-[250px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Truck size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{delivery.driver}</p>
                    <p className="text-sm text-gray-600">Delivery Driver</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-gray-500" />
                  <span className="text-sm text-gray-600">{delivery.driverPhone}</span>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 mb-6 p-3 bg-gray-50 rounded-lg">
              <MapPin size={16} className="text-gray-500 mt-0.5" />
              <div>
                <p className="text-sm text-gray-600">Delivery Address</p>
                <p className="font-medium">{delivery.address}</p>
              </div>
            </div>

            {/* Tracking Steps */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Delivery Progress</h4>
              <div className="space-y-4">
                {delivery.trackingSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.completed 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step.completed ? (
                        <CheckCircle size={16} />
                      ) : (
                        <span className="text-xs font-medium">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                        {step.title}
                      </p>
                      <p className="text-sm text-gray-500">{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Age Verification Notice */}
            {delivery.status === 'age_verification' && (
              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <h5 className="font-semibold text-yellow-800">Age Verification Required</h5>
                </div>
                <p className="text-sm text-yellow-700">
                  Driver is waiting for customer to verify age (18+) before completing delivery.
                  Customer must present valid ID.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryTracking;
