import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Calendar, Filter, Users, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { toast } from 'sonner';

const CollectWaste = () => {
  const [collectingArea, setCollectingArea] = useState('');
  
  const handleJoinCollection = (id: string) => {
    toast.success("You've joined the collection event! Event details sent to your email.");
  };

  const collectionEvents = [
    {
      id: 'evt-001',
      title: 'Community Beach Cleanup',
      date: 'Sat, Aug 12, 2023 • 9:00 AM',
      location: 'Sunset Beach, West End',
      participants: 12,
      pointsReward: 250,
      image: 'https://images.unsplash.com/photo-1618477462146-050d2767eac4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'evt-002',
      title: 'Park Revitalization Project',
      date: 'Sun, Aug 13, 2023 • 10:00 AM',
      location: 'Central City Park, Downtown',
      participants: 8,
      pointsReward: 200,
      image: 'https://images.unsplash.com/photo-1572732952263-11fdc7be4014?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'evt-003',
      title: 'River Cleanup Expedition',
      date: 'Sat, Aug 19, 2023 • 8:30 AM',
      location: 'Green River Bridge, East Side',
      participants: 15,
      pointsReward: 300,
      image: 'https://images.unsplash.com/photo-1536309203979-51209e5cb567?auto=format&fit=crop&w=800&q=80'
    },
  ];

  const wasteReports = [
    {
      id: 'rpt-001',
      type: 'Plastic',
      location: '123 Green St, Eco City',
      reportedDate: '2 hours ago',
      pointsReward: 100,
      image: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'rpt-002',
      type: 'Mixed Waste',
      location: 'Forest Trail, North Park',
      reportedDate: '5 hours ago',
      pointsReward: 150,
      image: 'https://images.unsplash.com/photo-1603394570916-c580bb874c38?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'rpt-003',
      type: 'Glass',
      location: 'Riverside Path, East End',
      reportedDate: '1 day ago',
      pointsReward: 80,
      image: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-eco-green-light/50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-eco-green-dark mb-4">Collect Waste</h1>
              <p className="text-eco-gray-dark mb-8">
                Join organized collection events or find reported waste to collect independently. Every collection earns you points!
              </p>
            </div>
          </div>
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <h2 className="text-2xl font-bold text-eco-green-dark mb-4 md:mb-0">Collection Events</h2>
              <div className="flex space-x-4">
                <div className="relative">
                  <MapPin className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-eco-gray" />
                  <Input 
                    placeholder="Search by location" 
                    className="pl-10 focus-visible:ring-eco-green"
                    value={collectingArea}
                    onChange={(e) => setCollectingArea(e.target.value)}
                  />
                </div>
                <Button variant="outline" className="border-eco-green text-eco-green">
                  <Calendar className="h-4 w-4 mr-2" /> Date
                </Button>
                <Button variant="outline" className="border-eco-green text-eco-green">
                  <Filter className="h-4 w-4 mr-2" /> Filter
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {collectionEvents.map((event) => (
                <div key={event.id} className="eco-card overflow-hidden">
                  <div className="h-48 relative">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-eco-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      +{event.pointsReward} points
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-eco-green-dark mb-2">{event.title}</h3>
                    <div className="flex items-center text-eco-gray-dark mb-2">
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-eco-gray-dark mb-2">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-eco-gray-dark mb-4">
                      <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{event.participants} participants registered</span>
                    </div>
                    <Button 
                      className="w-full bg-eco-green hover:bg-eco-green-dark"
                      onClick={() => handleJoinCollection(event.id)}
                    >
                      Join Collection
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="border-eco-green text-eco-green">
                View All Events <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-eco-gray-light/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <h2 className="text-2xl font-bold text-eco-green-dark mb-4 md:mb-0">Reported Waste</h2>
              <div className="flex space-x-4">
                <div className="relative">
                  <MapPin className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-eco-gray" />
                  <Input 
                    placeholder="Search by location" 
                    className="pl-10 focus-visible:ring-eco-green" 
                  />
                </div>
                <Button variant="outline" className="border-eco-green text-eco-green">
                  <Filter className="h-4 w-4 mr-2" /> Filter
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {wasteReports.map((report) => (
                <div key={report.id} className="eco-card overflow-hidden">
                  <div className="h-48 relative">
                    <img 
                      src={report.image} 
                      alt={report.type} 
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-eco-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      {report.type}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center text-eco-gray-dark mb-2">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{report.location}</span>
                    </div>
                    <div className="flex items-center text-eco-gray-dark mb-3">
                      <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">Reported {report.reportedDate}</span>
                    </div>
                    <div className="bg-eco-green-light/40 p-3 rounded mb-4">
                      <div className="flex items-center text-eco-green-dark">
                        <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="text-sm font-medium">Earn {report.pointsReward} points for collection</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-eco-green hover:bg-eco-green-dark"
                      onClick={() => toast.success(`You've committed to collect this waste. Thank you!`)}
                    >
                      Collect This Waste
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="border-eco-green text-eco-green">
                View All Reports <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-eco-green-dark mb-4">Safety Guidelines</h2>
              <p className="text-eco-gray-dark mb-8">
                Your safety is our priority. Please follow these guidelines when collecting waste.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-eco-green-light p-3 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-eco-green-dark" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-eco-gray-dark mb-1">Wear Protective Gear</h3>
                    <p className="text-eco-gray">Always wear gloves and appropriate footwear when collecting waste.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-eco-green-light p-3 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-eco-green-dark" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-eco-gray-dark mb-1">Stay Hydrated</h3>
                    <p className="text-eco-gray">Bring water, especially during hot weather collection events.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-eco-green-light p-3 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-eco-green-dark" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-eco-gray-dark mb-1">Never Touch Hazardous Materials</h3>
                    <p className="text-eco-gray">Report hazardous waste and let specialists handle it.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-eco-green-light p-3 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-eco-green-dark" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-eco-gray-dark mb-1">Work in Groups</h3>
                    <p className="text-eco-gray">Whenever possible, collect waste with others for safety.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CollectWaste;
