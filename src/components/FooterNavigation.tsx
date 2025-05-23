
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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-30">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.view;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.view)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-600 hover:text-orange-600 hover:bg-gray-50'
              }`}
            >
              <Icon size={24} />
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FooterNavigation;
