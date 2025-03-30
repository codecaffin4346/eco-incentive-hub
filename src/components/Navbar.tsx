
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import SignInButton from './SignInButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Report Waste', href: '/report-waste' },
    { name: 'Collect Waste', href: '/collect-waste' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'Rewards', href: '/rewards' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-eco-green" />
              <span className="ml-2 text-xl font-semibold text-eco-green-dark">Ecovista</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-eco-green-dark bg-eco-green-light'
                      : 'text-eco-gray-dark hover:bg-eco-green-light hover:text-eco-green-dark'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <SignInButton />
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-eco-gray-dark hover:text-eco-green-dark focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? 'text-eco-green-dark bg-eco-green-light'
                    : 'text-eco-gray-dark hover:bg-eco-green-light hover:text-eco-green-dark'
                }`}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <SignInButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
