import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '../UI/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold text-gray-900">BusBook</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link to="/buses" className="text-gray-700 hover:text-blue-500 transition-colors">
              Buses
            </Link>
            <Link to="/booking" className="text-gray-700 hover:text-blue-500 transition-colors">
              My Bookings
            </Link>
            <Link to="/login">
              <Button size="sm">Login</Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-blue-500 transition-colors">
                Home
              </Link>
              <Link to="/buses" className="text-gray-700 hover:text-blue-500 transition-colors">
                Buses
              </Link>
              <Link to="/booking" className="text-gray-700 hover:text-blue-500 transition-colors">
                My Bookings
              </Link>
              <Link to="/login">
                <Button size="sm" className="w-fit">Login</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;