
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
      // Check if admin credentials (demo purpose)
      const isAdmin = formData.identifier === 'admin' && formData.password === 'admin';
      onLogin(isAdmin ? 'admin' : 'user');
    }, 1500);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to continue your journey</p>
            <p className="text-xs text-orange-600 mt-2">Demo: admin/admin for admin panel</p>
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
      </div>
    </div>
  );
};

export default LoginForm;
