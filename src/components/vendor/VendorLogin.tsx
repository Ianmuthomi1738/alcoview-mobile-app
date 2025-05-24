
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ArrowLeft, User, Key } from 'lucide-react';

interface VendorLoginProps {
  onLogin: () => void;
  onBack: () => void;
}

const VendorLogin = ({ onLogin, onBack }: VendorLoginProps) => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const demoCredentials = {
    email: 'vendor@alcohnex.com',
    password: 'vendor123'
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.identifier.trim()) {
      newErrors.identifier = 'Email or vendor ID is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Check if vendor credentials (demo purpose)
      const isVendor = formData.identifier === demoCredentials.email && formData.password === demoCredentials.password;
      if (isVendor) {
        onLogin();
      } else {
        setErrors({ general: 'Invalid vendor credentials' });
      }
    }, 1500);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const fillDemoCredentials = () => {
    setFormData({
      identifier: demoCredentials.email,
      password: demoCredentials.password
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 p-4 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-green-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-4xl relative z-10 grid lg:grid-cols-2 gap-8">
        {/* Login Form */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
          <button
            onClick={onBack}
            className="mb-4 p-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 text-gray-600"
          >
            <ArrowLeft size={20} />
            Back
          </button>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 via-green-600 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:scale-105 transition-transform duration-200">
              <Building2 className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">Vendor Portal</h2>
            <p className="text-gray-600">Access your business dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {errors.general && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm">{errors.general}</p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="identifier" className="text-gray-700 font-medium">Email or Vendor ID</Label>
              <Input
                id="identifier"
                type="text"
                placeholder="Enter your email or vendor ID"
                value={formData.identifier}
                onChange={(e) => updateFormData('identifier', e.target.value)}
                className={`h-12 border-2 rounded-xl transition-all duration-200 focus:scale-[1.02] ${
                  errors.identifier 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-gray-200 focus:border-green-500'
                }`}
                disabled={isLoading}
              />
              {errors.identifier && <p className="text-red-500 text-sm">{errors.identifier}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => updateFormData('password', e.target.value)}
                className={`h-12 border-2 rounded-xl transition-all duration-200 focus:scale-[1.02] ${
                  errors.password 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-gray-200 focus:border-green-500'
                }`}
                disabled={isLoading}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            <div className="text-right">
              <button
                type="button"
                className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-green-500 via-green-600 to-emerald-500 hover:from-green-600 hover:via-green-700 hover:to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                'Access Vendor Panel'
              )}
            </Button>
          </form>

          <div className="text-center mt-6 text-sm text-gray-500">
            <p>Need help? Contact support</p>
          </div>
        </div>

        {/* Demo Credentials Panel */}
        <div className="space-y-4">
          <Card className="bg-white/90 backdrop-blur-lg border border-white/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-800 flex items-center gap-2">
                <Building2 size={24} />
                Demo Vendor Access
              </CardTitle>
              <CardDescription>Click below to auto-fill vendor credentials</CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                onClick={fillDemoCredentials}
                className="p-4 border rounded-xl hover:bg-green-50 cursor-pointer transition-colors border-green-200 hover:border-green-300 bg-gradient-to-r from-green-50 to-emerald-50"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-green-800">Vendor Account</span>
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Demo Access</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <User size={16} />
                    <span className="font-medium">Email:</span> 
                    <span className="font-mono bg-white px-2 py-1 rounded">{demoCredentials.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <Key size={16} />
                    <span className="font-medium">Password:</span> 
                    <span className="font-mono bg-white px-2 py-1 rounded">{demoCredentials.password}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border border-green-200">
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-green-600 mb-2">🏪</div>
                <h3 className="font-semibold text-green-800 mb-1">Vendor Features</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Manage Products & Inventory</li>
                  <li>• View & Fulfill Orders</li>
                  <li>• Track Deliveries</li>
                  <li>• Access Sales Analytics</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VendorLogin;
