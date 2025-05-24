
import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Eye, Package, Image, FileText } from 'lucide-react';

const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      name: 'Premium Whiskey',
      type: 'Whiskey',
      price: 'Ksh 5,000',
      status: 'Active',
      stock: 25,
      image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Craft Beer',
      type: 'Beer',
      price: 'Ksh 500',
      status: 'Active',
      stock: 100,
      image: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Red Wine',
      type: 'Wine',
      price: 'Ksh 3,000',
      status: 'Draft',
      stock: 15,
      image: 'https://images.unsplash.com/photo-1506377872008-6645d6fine33?w=100&h=100&fit=crop'
    },
  ];

  const banners = [
    {
      id: 1,
      title: 'Premium Subscription',
      status: 'Active',
      position: 'Homepage',
      image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300&h=150&fit=crop'
    },
    {
      id: 2,
      title: 'Summer Sale',
      status: 'Scheduled',
      position: 'Category Page',
      image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=300&h=150&fit=crop'
    },
  ];

  const tabs = [
    { id: 'products', label: 'Products', icon: Package },
    { id: 'banners', label: 'Banners', icon: Image },
    { id: 'content', label: 'Content', icon: FileText },
  ];

  const renderProducts = () => (
    <div className="space-y-6">
      {/* Products Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2 font-medium">
          <Plus size={20} />
          Add Product
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 rounded-xl object-cover shadow-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.type}</p>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  product.status === 'Active' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {product.status}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-bold text-gray-900">{product.price}</span>
              <span className="text-sm text-gray-600">Stock: {product.stock}</span>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center gap-2">
                <Eye size={16} />
                View
              </button>
              <button className="flex-1 bg-orange-50 text-orange-600 py-2 rounded-lg hover:bg-orange-100 transition-colors flex items-center justify-center gap-2">
                <Edit size={16} />
                Edit
              </button>
              <button className="bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBanners = () => (
    <div className="space-y-6">
      {/* Banners Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h3 className="text-xl font-semibold text-gray-900">Banner Management</h3>
        <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2 font-medium">
          <Plus size={20} />
          Add Banner
        </button>
      </div>

      {/* Banners List */}
      <div className="space-y-4">
        {banners.map((banner) => (
          <div key={banner.id} className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center gap-6">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-24 h-12 rounded-lg object-cover shadow-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{banner.title}</h3>
                <p className="text-sm text-gray-600">Position: {banner.position}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                banner.status === 'Active' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-orange-100 text-orange-700'
              }`}>
                {banner.status}
              </span>
              <div className="flex gap-2">
                <button className="bg-blue-50 text-blue-600 p-2 rounded-lg hover:bg-blue-100 transition-colors">
                  <Edit size={16} />
                </button>
                <button className="bg-red-50 text-red-600 p-2 rounded-lg hover:bg-red-100 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Content Management
        </h1>
        <p className="text-gray-600">Manage products, banners, and content across the platform</p>
      </div>

      {/* Tabs */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 overflow-hidden">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={20} />
                {tab.label}
              </button>
            );
          })}
        </div>
        
        <div className="p-6">
          {activeTab === 'products' && renderProducts()}
          {activeTab === 'banners' && renderBanners()}
          {activeTab === 'content' && (
            <div className="text-center py-12">
              <FileText size={48} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Content Management</h3>
              <p className="text-gray-600">Content management features coming soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentManagement;
