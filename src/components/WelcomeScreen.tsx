
import React from 'react';

interface WelcomeScreenProps {
  onLogin: () => void;
  onRegister: () => void;
}

const WelcomeScreen = ({ onLogin, onRegister }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="w-full max-w-md space-y-8 text-center relative z-10">
        {/* Logo */}
        <div className="space-y-6">
          <div className="w-24 h-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl transform hover:scale-110 transition-all duration-300">
            <span className="text-white font-bold text-3xl">A</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-3">
              AlcohNex
            </h1>
            <p className="text-gray-600 text-xl">Personal accountability and control</p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4 py-8">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Track Progress</h3>
            <p className="text-gray-600 text-sm">Monitor your journey with detailed insights and analytics</p>
          </div>
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Stay Accountable</h3>
            <p className="text-gray-600 text-sm">Build healthy habits with personalized support</p>
          </div>
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛒</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Smart Shopping</h3>
            <p className="text-gray-600 text-sm">Discover and purchase premium spirits responsibly</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={onRegister}
            className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-orange-600 hover:via-orange-700 hover:to-red-600"
          >
            Get Started
          </button>
          <button
            onClick={onLogin}
            className="w-full bg-white/90 backdrop-blur-lg text-gray-700 font-semibold py-4 rounded-2xl border-2 border-white/50 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            I already have an account
          </button>
        </div>

        <p className="text-xs text-gray-500 pt-4">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
