
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

type View = 
  | 'welcome' 
  | 'login' 
  | 'register' 
  | 'profile' 
  | 'home' 
  | 'product' 
  | 'cart' 
  | 'checkout'
  | 'orderConfirmation';

const Index = () => {
  const [currentView, setCurrentView] = useState<View>('welcome');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | undefined>(undefined);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentView('home');
  };

  const handleRegister = () => {
    setIsLoggedIn(true);
    setCurrentView('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
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

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 relative z-20">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <h1 
              className="text-xl font-bold text-gray-900 cursor-pointer"
              onClick={() => isLoggedIn ? setCurrentView('home') : setCurrentView('welcome')}
            >
              AlcohNex
            </h1>
          </div>
          
          {isLoggedIn && (
            <div className="flex items-center gap-4">
              {currentView === 'home' && (
                <button
                  onClick={() => setCurrentView('cart')}
                  className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                  </svg>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center">
                    3
                  </span>
                </button>
              )}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
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
          <div className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
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
                  setCurrentView('home');
                  setIsMenuOpen(false);
                }}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentView('cart');
                  setIsMenuOpen(false);
                }}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium"
              >
                My Cart
              </button>
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
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-sm p-8 max-w-md w-full text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
              <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been placed successfully.</p>
              <p className="text-gray-700 font-medium mb-1">Order #12345</p>
              <p className="text-gray-500 mb-6">You will receive an email confirmation shortly.</p>
              <button
                onClick={() => setCurrentView('home')}
                className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer Navigation - only show when logged in */}
      {isLoggedIn && (
        <FooterNavigation 
          currentView={currentView}
          onNavigate={handleFooterNavigation}
        />
      )}
      
      {/* Chat Box */}
      {isLoggedIn && isChatOpen && (
        <div className="fixed bottom-24 right-6 bg-white shadow-xl rounded-xl w-80 z-20 border border-gray-200 overflow-hidden">
          <div className="bg-orange-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Chat Support</h3>
            <button onClick={() => setIsChatOpen(false)} className="text-white">
              <X size={18} />
            </button>
          </div>
          <div className="h-80 p-4 overflow-y-auto bg-gray-50">
            <div className="mb-4">
              <div className="bg-orange-100 rounded-lg p-3 inline-block max-w-[80%]">
                <p className="text-sm">Hello! How can we help you today?</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">Support • 12:00 PM</p>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:border-orange-500"
              />
              <button className="bg-orange-600 text-white px-4 rounded-r-lg hover:bg-orange-700">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
