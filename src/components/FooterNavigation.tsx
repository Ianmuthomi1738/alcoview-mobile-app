
import React from 'react';
import { Home, ShoppingCart, User, MessageCircle, Search } from 'lucide-react';

interface FooterNavigationProps {
  currentView: string;
  onNavigate: (view: any) => void;
}

const FooterNavigation = ({ currentView, onNavigate }: FooterNavigationProps) => {
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      view: 'home'
    },
    {
      id: 'search',
      label: 'Search',
      icon: Search,
      view: 'home'
    },
    {
      id: 'cart',
      label: 'Cart',
      icon: ShoppingCart,
      view: 'cart'
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      view: 'profile'
    },
    {
      id: 'help',
      label: 'Help',
      icon: MessageCircle,
      view: 'help'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200/50 px-4 py-2 z-30 shadow-2xl">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.view;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.view)}
              className={`flex flex-col items-center py-3 px-4 rounded-xl transition-all duration-300 transform ${
                isActive 
                  ? 'text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg scale-110' 
                  : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50 hover:scale-105'
              }`}
            >
              <Icon size={22} className={`${isActive ? 'animate-bounce' : ''}`} />
              <span className={`text-xs mt-1 font-medium ${isActive ? 'text-white' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FooterNavigation;
