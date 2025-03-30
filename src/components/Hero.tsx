
import { ArrowRight, Trash2, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-eco-green-light/50 to-white py-12 sm:py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519834819476-306c0f546164?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-eco-green-dark mb-4">
              Turn Waste Into Rewards with <span className="text-eco-green">Ecovista</span>
            </h1>
            <p className="text-lg md:text-xl text-eco-gray-dark mb-8">
              Join our community-driven approach to waste management. Report waste, collect it, and earn rewards while making our planet cleaner.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/report-waste">
                <Button className="bg-eco-green hover:bg-eco-green-dark text-white px-6 py-5 flex items-center gap-2">
                  <Trash2 size={18} />
                  Report Waste
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/collect-waste">
                <Button variant="outline" className="border-eco-green text-eco-green-dark hover:bg-eco-green-light px-6 py-5 flex items-center gap-2">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block animate-fade-in">
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-eco-green-dark mb-4">Platform Highlights</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-eco-green-light p-3 rounded-full">
                      <Trash2 className="h-6 w-6 text-eco-green-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-eco-gray-dark">AI-Powered Reporting</h4>
                      <p className="text-eco-gray">Smart waste identification and categorization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-eco-green-light p-3 rounded-full">
                      <Award className="h-6 w-6 text-eco-green-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-eco-gray-dark">Incentive System</h4>
                      <p className="text-eco-gray">Earn points and rewards for every action</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-eco-green-light p-3 rounded-full">
                      <Users className="h-6 w-6 text-eco-green-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-eco-gray-dark">Community Engagement</h4>
                      <p className="text-eco-gray">Connect with eco-conscious individuals</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-eco-blue rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 h-24 w-24 bg-eco-green-light rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
