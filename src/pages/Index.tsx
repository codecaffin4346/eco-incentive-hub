
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import { MapPin, Camera, Recycle, Award, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Feature Cards Section */}
        <section className="py-16 bg-eco-gray-light/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-eco-green-dark mb-4">How Ecovista Works</h2>
              <p className="text-eco-gray-dark max-w-2xl mx-auto">
                Our platform makes it easy to get involved in waste management and earn rewards for your environmental contributions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                title="Report Waste"
                description="Use our AI-powered app to report waste in your community by taking photos and providing location data."
                icon={Camera}
                linkText="Start Reporting"
                linkTo="/report-waste"
                imageUrl="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FzdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              />
              <FeatureCard
                title="Collect Waste"
                description="Join collection events or solo missions to clean up reported waste and make a visible difference."
                icon={Recycle}
                linkText="Join Collection"
                linkTo="/collect-waste"
                imageUrl="https://images.unsplash.com/photo-1562077772-3bd90403f7f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              />
              <FeatureCard
                title="Track Progress"
                description="See your impact on the leaderboard and track how you compare to other eco-warriors in your area."
                icon={Users}
                linkText="View Leaderboard"
                linkTo="/leaderboard"
                imageUrl="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              />
              <FeatureCard
                title="Earn Rewards"
                description="Turn your environmental efforts into rewards from our partners and local businesses."
                icon={Award}
                linkText="See Rewards"
                linkTo="/rewards"
                imageUrl="https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmV3YXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              />
            </div>
          </div>
        </section>
        
        {/* Impact Statistics */}
        <section className="py-16 bg-gradient-to-r from-eco-green-light to-eco-blue bg-opacity-30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-eco-green-dark mb-4">Our Impact</h2>
              <p className="text-eco-gray-dark max-w-2xl mx-auto">
                Together, we're making a measurable difference in waste management and environmental health.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-eco-green mb-2">5,280</div>
                <div className="text-eco-gray-dark font-medium">Waste Reports</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-eco-green mb-2">3,940</div>
                <div className="text-eco-gray-dark font-medium">Waste Collections</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-eco-green mb-2">12,500</div>
                <div className="text-eco-gray-dark font-medium">kg Waste Removed</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-eco-green mb-2">890</div>
                <div className="text-eco-gray-dark font-medium">Active Users</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-eco-green-dark mb-4">Community Voices</h2>
              <p className="text-eco-gray-dark max-w-2xl mx-auto">
                Hear from people who are making a difference using Ecovista.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-eco-gray-light p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-eco-green rounded-full flex items-center justify-center text-white font-bold">JS</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-eco-green-dark">Jamie Smith</h4>
                    <p className="text-eco-gray">Eco Warrior</p>
                  </div>
                </div>
                <p className="text-eco-gray-dark">
                  "I've always wanted to help clean up my neighborhood, but didn't know where to start. Ecovista made it easy and rewarding!"
                </p>
              </div>
              <div className="bg-eco-gray-light p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-eco-green rounded-full flex items-center justify-center text-white font-bold">RL</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-eco-green-dark">Rebecca Lee</h4>
                    <p className="text-eco-gray">Community Leader</p>
                  </div>
                </div>
                <p className="text-eco-gray-dark">
                  "Our community group has organized several collection events through Ecovista. The platform makes coordination and tracking progress so simple."
                </p>
              </div>
              <div className="bg-eco-gray-light p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-eco-green rounded-full flex items-center justify-center text-white font-bold">MP</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-eco-green-dark">Michael Patel</h4>
                    <p className="text-eco-gray">Business Owner</p>
                  </div>
                </div>
                <p className="text-eco-gray-dark">
                  "As a local business owner, partnering with Ecovista to provide rewards has been great for our community image and brought in eco-conscious customers."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
