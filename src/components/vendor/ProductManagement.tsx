
import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Eye, Package, AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProductManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddProduct, setShowAddProduct] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Premium Whiskey',
      type: 'Whiskey',
      price: 5000,
      stock: 25,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Craft Beer Pack',
      type: 'Beer',
      price: 1200,
      stock: 5,
      status: 'Low Stock',
      image: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Red Wine Collection',
      type: 'Wine',
      price: 3500,
      stock: 0,
      status: 'Out of Stock',
      image: 'https://images.unsplash.com/photo-1506377872008-6645d6fine33?w=100&h=100&fit=crop'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-700';
      case 'Out of Stock': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              Product Management
            </h1>
            <p className="text-gray-600">Manage your product catalog and inventory</p>
          </div>
          <Button
            onClick={() => setShowAddProduct(true)}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
          >
            <Plus size={20} className="mr-2" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>
        </div>
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
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                  {product.status}
                </span>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Price:</span>
                <span className="font-semibold">Ksh {product.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Stock:</span>
                <span className={`font-semibold ${product.stock <= 5 ? 'text-red-600' : 'text-green-600'}`}>
                  {product.stock} units
                  {product.stock <= 5 && product.stock > 0 && (
                    <AlertTriangle size={16} className="inline ml-1 text-yellow-500" />
                  )}
                </span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="flex-1">
                <Eye size={16} className="mr-1" />
                View
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                <Edit size={16} className="mr-1" />
                Edit
              </Button>
              <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                <Trash2 size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Product Modal */}
      {showAddProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Add New Product</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-colors">
                  <option>Beer</option>
                  <option>Wine</option>
                  <option>Whiskey</option>
                  <option>Spirits</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (Ksh)</label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="0"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 transition-colors"
                  rows={3}
                  placeholder="Product description"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button
                variant="outline"
                onClick={() => setShowAddProduct(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setShowAddProduct(false)}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                Add Product
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
