import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Utensils } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-orange-600">
            <Utensils className="h-8 w-8" />
            <span>QuickBite</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-orange-600' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`font-medium transition-colors ${
                location.pathname === '/menu' 
                  ? 'text-orange-600' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Menu
            </Link>
          </nav>

          <button
            onClick={onCartClick}
            className="relative bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors flex items-center space-x-2"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden md:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;