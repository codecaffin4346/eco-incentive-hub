
import { Leaf, Mail, Phone, MapPin, Twitter, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-eco-gray-light">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-eco-green" />
              <span className="ml-2 text-xl font-semibold text-eco-green-dark">Ecovista</span>
            </div>
            <p className="text-eco-gray-dark mb-4">
              Transforming waste management through community action and incentives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-eco-gray hover:text-eco-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-eco-gray hover:text-eco-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-eco-gray hover:text-eco-green transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-eco-green-dark mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-eco-gray-dark hover:text-eco-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/report-waste" className="text-eco-gray-dark hover:text-eco-green transition-colors">
                  Report Waste
                </Link>
              </li>
              <li>
                <Link to="/collect-waste" className="text-eco-gray-dark hover:text-eco-green transition-colors">
                  Collect Waste
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-eco-gray-dark hover:text-eco-green transition-colors">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="text-eco-gray-dark hover:text-eco-green transition-colors">
                  Rewards
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-eco-green-dark mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-eco-gray-dark hover:text-eco-green transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-eco-gray-dark hover:text-eco-green transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-eco-gray-dark hover:text-eco-green transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-eco-gray-dark hover:text-eco-green transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-eco-gray-dark hover:text-eco-green transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-eco-green-dark mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-eco-green mr-2 mt-1 flex-shrink-0" />
                <span className="text-eco-gray-dark">
                  123 Green Street, Eco City, EC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-eco-green mr-2 flex-shrink-0" />
                <span className="text-eco-gray-dark">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-eco-green mr-2 flex-shrink-0" />
                <span className="text-eco-gray-dark">contact@ecovista.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-eco-green/20">
          <p className="text-center text-eco-gray-dark">
            &copy; {currentYear} Ecovista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
