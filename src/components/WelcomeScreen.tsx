
import React from 'react';

interface WelcomeScreenProps {
  onLogin: () => void;
  onRegister: () => void;
}

const WelcomeScreen = ({ onLogin, onRegister }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Logo */}
        <div className="space-y-4">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
            <span className="text-white font-bold text-2xl">A</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AlcohNex</h1>
            <p className="text-gray-600 text-lg">Personal accountability and control</p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4 py-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">Track Progress</h3>
            <p className="text-gray-600 text-sm">Monitor your journey with detailed insights and analytics</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">Stay Accountable</h3>
            <p className="text-gray-600 text-sm">Build healthy habits with personalized support</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={onRegister}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Get Started
          </button>
          <button
            onClick={onLogin}
            className="w-full bg-white text-gray-700 font-semibold py-4 rounded-2xl border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200"
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
