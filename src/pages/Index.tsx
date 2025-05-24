
import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import RegistrationFlow from '../components/RegistrationFlow';
import LoginForm from '../components/LoginForm';
import ProfileSection from '../components/ProfileSection';
import WelcomeScreen from '../components/WelcomeScreen';
import HomePage from '../components/HomePage';
import ProductDetail from '../components/ProductDetail';
import ShoppingCart from '../components/ShoppingCart';
import Checkout from '../components/Checkout';
import FooterNavigation from '../components/FooterNavigation';
import AdminPanel from '../components/admin/AdminPanel';

type View = 
  | 'welcome' 
  | 'login' 
  | 'register' 
  | 'profile' 
  | 'home' 
  | 'product' 
  | 'cart' 
  | 'checkout'
  | 'orderConfirmation'
  | 'admin';

const Index = () => {
  const [currentView, setCurrentView] = useState<View>('welcome');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | undefined>(undefined);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleLogin = (userType = 'user') => {
    setIsLoggedIn(true);
    setIsAdmin(userType === 'admin');
    setCurrentView(userType === 'admin' ? 'admin' : 'home');
  };

  const handleRegister = () => {
    setIsLoggedIn(true);
    setCurrentView('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setCurrentView('welcome');
    setIsMenuOpen(false);
  };

  const handleProductSelect = (productId: number) => {
    setSelectedProductId(productId);
    setCurrentView('product');
  };

  const handleOrderComplete = () => {
    setCurrentView('orderConfirmation');
  };

  const handleFooterNavigation = (view: View) => {
    if (isLoggedIn) {
      setCurrentView(view);
      setIsMenuOpen(false);
    }
  };

  // Don't render header/footer for admin panel
  if (currentView === 'admin' && isAdmin) {
    return <AdminPanel onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100/50 relative z-20 transition-all duration-300">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <h1 
              className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent cursor-pointer hover:from-orange-700 hover:to-red-700 transition-all duration-300"
              onClick={() => isLoggedIn ? setCurrentView('home') : setCurrentView('welcome')}
            >
              AlcohNex
            </h1>
          </div>
          
          {isLoggedIn && !isAdmin && (
            <div className="flex items-center gap-4">
              {currentView === 'home' && (
                <button
                  onClick={() => setCurrentView('cart')}
                  className="relative p-3 rounded-xl hover:bg-gray-100/70 transition-all duration-200 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-orange-600 transition-colors">
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                  </svg>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs flex items-center justify-center font-medium shadow-lg animate-bounce">
                    3
                  </span>
                </button>
              )}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 rounded-xl hover:bg-gray-100/70 transition-all duration-200 group"
              >
                {isMenuOpen ? 
                  <X size={24} className="group-hover:text-red-500 transition-colors" /> : 
                  <Menu size={24} className="group-hover:text-orange-600 transition-colors" />
                }
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Hamburger Menu */}
      {isLoggedIn && !isAdmin && (
        <div className={`fixed inset-0 z-30 transition-all duration-300 ${isMenuOpen ? 'visible' : 'invisible'}`}>
          <div 
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsMenuOpen(false)}
          />
          <div className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-lg shadow-2xl transform transition-all duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="p-6 border-b border-gray-200/50">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100/70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <nav className="p-6 space-y-2">
              {[
                { label: 'Home', view: 'home', icon: '🏠' },
                { label: 'My Cart', view: 'cart', icon: '🛒' },
                { label: 'Profile Settings', view: 'profile', icon: '👤' },
              ].map((item) => (
                <button
                  key={item.view}
                  onClick={() => {
                    setCurrentView(item.view as View);
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 text-gray-700 font-medium transition-all duration-200 flex items-center gap-3 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleLogout}
                className="w-full text-left p-4 rounded-xl hover:bg-red-50 text-red-600 font-medium transition-all duration-200 flex items-center gap-3 group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">🚪</span>
                Logout
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 pb-20">
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
        
        {currentView === 'home' && isLoggedIn && (
          <HomePage onProductSelect={handleProductSelect} />
        )}
        
        {currentView === 'product' && isLoggedIn && (
          <ProductDetail 
            productId={selectedProductId}
            onBack={() => setCurrentView('home')} 
          />
        )}
        
        {currentView === 'cart' && isLoggedIn && (
          <ShoppingCart 
            onBack={() => setCurrentView('home')}
            onCheckout={() => setCurrentView('checkout')}
          />
        )}
        
        {currentView === 'checkout' && isLoggedIn && (
          <Checkout
            onBack={() => setCurrentView('cart')}
            onComplete={handleOrderComplete}
          />
        )}
        
        {currentView === 'orderConfirmation' && isLoggedIn && (
          <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-md w-full text-center border border-white/20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center shadow-lg animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Order Confirmed!</h2>
              <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been placed successfully.</p>
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <p className="text-gray-700 font-semibold mb-1">Order #12345</p>
                <p className="text-gray-500">You will receive an email confirmation shortly.</p>
              </div>
              <button
                onClick={() => setCurrentView('home')}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer Navigation - only show when logged in and not admin */}
      {isLoggedIn && !isAdmin && (
        <FooterNavigation 
          currentView={currentView}
          onNavigate={handleFooterNavigation}
        />
      )}
      
      {/* Chat Box */}
      {isLoggedIn && !isAdmin && isChatOpen && (
        <div className="fixed bottom-24 right-6 bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl w-80 z-20 border border-white/20 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Chat Support</h3>
            <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-gray-200 transition-colors">
              <X size={18} />
            </button>
          </div>
          <div className="h-80 p-4 overflow-y-auto bg-gray-50/50">
            <div className="mb-4">
              <div className="bg-orange-100 rounded-lg p-3 inline-block max-w-[80%]">
                <p className="text-sm">Hello! How can we help you today?</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">Support • 12:00 PM</p>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200/50">
            <div className="flex">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 rounded-r-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200">
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      {isLoggedIn && !isAdmin && !isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 z-20"
        >
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default Index;
