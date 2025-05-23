
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import RegistrationFlow from '../components/RegistrationFlow';
import LoginForm from '../components/LoginForm';
import ProfileSection from '../components/ProfileSection';
import WelcomeScreen from '../components/WelcomeScreen';

const Index = () => {
  const [currentView, setCurrentView] = useState<'welcome' | 'login' | 'register' | 'profile'>('welcome');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentView('profile');
  };

  const handleRegister = () => {
    setIsLoggedIn(true);
    setCurrentView('profile');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('welcome');
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 relative z-20">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">AlcohNex</h1>
          </div>
          
          {isLoggedIn && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </header>

      {/* Hamburger Menu */}
      {isLoggedIn && (
        <div className={`fixed inset-0 z-30 transition-all duration-300 ${isMenuOpen ? 'visible' : 'invisible'}`}>
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-50' : 'opacity-0'}`}
            onClick={() => setIsMenuOpen(false)}
          />
          <div className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <nav className="p-6 space-y-4">
              <button
                onClick={() => {
                  setCurrentView('profile');
                  setIsMenuOpen(false);
                }}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium"
              >
                Profile Settings
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left p-3 rounded-lg hover:bg-red-50 text-red-600 font-medium"
              >
                Logout
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10">
        {currentView === 'welcome' && (
          <WelcomeScreen 
            onLogin={() => setCurrentView('login')}
            onRegister={() => setCurrentView('register')}
          />
        )}
        
        {currentView === 'login' && (
          <LoginForm
            onLogin={handleLogin}
            onSwitchToRegister={() => setCurrentView('register')}
            onBack={() => setCurrentView('welcome')}
          />
        )}
        
        {currentView === 'register' && (
          <RegistrationFlow
            onRegister={handleRegister}
            onSwitchToLogin={() => setCurrentView('login')}
            onBack={() => setCurrentView('welcome')}
          />
        )}
        
        {currentView === 'profile' && isLoggedIn && (
          <ProfileSection />
        )}
      </main>
    </div>
  );
};

export default Index;
