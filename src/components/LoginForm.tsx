
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface LoginFormProps {
  onLogin: (userType?: string) => void;
  onSwitchToRegister: () => void;
  onBack: () => void;
}

const LoginForm = ({ onLogin, onSwitchToRegister, onBack }: LoginFormProps) => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const testCredentials = [
    {
      role: 'Admin',
      email: 'admin@alcohnex.com',
      password: 'admin123',
      description: 'Full system access'
    },
    {
      role: 'Vendor',
      email: 'vendor@alcohnex.com',
      password: 'vendor123',
      description: 'Vendor panel access'
    },
    {
      role: 'Customer',
      email: 'user@alcohnex.com',
      password: 'user123',
      description: 'Customer experience'
    }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.identifier.trim()) {
      newErrors.identifier = 'Email or username is required';
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
      // Check credentials and determine user type
      const isAdmin = formData.identifier === 'admin@alcohnex.com' && formData.password === 'admin123';
      const isVendor = formData.identifier === 'vendor@alcohnex.com' && formData.password === 'vendor123';
      
      if (isAdmin) {
        onLogin('admin');
      } else if (isVendor) {
        onLogin('vendor');
      } else {
        onLogin('user');
      }
    }, 1500);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const fillCredentials = (email: string, password: string) => {
    setFormData({ identifier: email, password });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-4xl relative z-10 grid lg:grid-cols-2 gap-8">
        {/* Login Form */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to continue your journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="identifier" className="text-gray-700 font-medium">Email or Username</Label>
              <Input
                id="identifier"
                type="text"
                placeholder="Enter your email or username"
                value={formData.identifier}
                onChange={(e) => updateFormData('identifier', e.target.value)}
                className={`h-12 border-2 rounded-xl transition-all duration-200 focus:scale-[1.02] ${
                  errors.identifier 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-gray-200 focus:border-orange-500'
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
                    : 'border-gray-200 focus:border-orange-500'
                }`}
                disabled={isLoading}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            <div className="text-right">
              <button
                type="button"
                className="text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            <div className="space-y-4">
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:via-orange-700 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  'Sign In'
                )}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={onBack}
                className="w-full h-12 border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 font-semibold rounded-xl transition-all duration-300"
                disabled={isLoading}
              >
                Back
              </Button>
            </div>
          </form>

          <div className="text-center mt-6">
            <button
              onClick={onSwitchToRegister}
              className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
              disabled={isLoading}
            >
              Don't have an account? Sign up
            </button>
          </div>
        </div>

        {/* Test Credentials Panel */}
        <div className="space-y-4">
          <Card className="bg-white/90 backdrop-blur-lg border border-white/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">Demo Credentials</CardTitle>
              <CardDescription>Click any credential below to auto-fill the login form</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {testCredentials.map((cred, index) => (
                <div 
                  key={index}
                  onClick={() => fillCredentials(cred.email, cred.password)}
                  className="p-4 border rounded-xl hover:bg-orange-50 cursor-pointer transition-colors border-gray-200 hover:border-orange-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">{cred.role}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{cred.description}</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div><span className="font-medium">Email:</span> {cred.email}</div>
                    <div><span className="font-medium">Password:</span> {cred.password}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200">
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-orange-600 mb-2">🎯</div>
                <h3 className="font-semibold text-orange-800 mb-1">Quick Testing</h3>
                <p className="text-sm text-orange-700">Use the demo accounts above to explore different user experiences and admin features.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
