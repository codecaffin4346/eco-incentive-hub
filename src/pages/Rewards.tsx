
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Filter, Gift, ShoppingBag, Tag, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

const Rewards = () => {
  const handleRedeemReward = (rewardName: string, pointsCost: number) => {
    toast.success(`You've redeemed ${rewardName} for ${pointsCost} points!`);
  };

  const availableRewards = [
    {
      id: 'rwd-001',
      name: '10% Off at Eco Grocery',
      category: 'Discount',
      pointsCost: 250,
      description: 'Get 10% off your next purchase at Eco Grocery. Valid for 30 days.',
      partner: 'Eco Grocery',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      popular: true
    },
    {
      id: 'rwd-002',
      name: 'Free Coffee at Green Cafe',
      category: 'Free Item',
      pointsCost: 150,
      description: 'Enjoy a free coffee of your choice at Green Cafe. Valid for 14 days.',
      partner: 'Green Cafe',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      popular: true
    },
    {
      id: 'rwd-003',
      name: 'Sustainable Water Bottle',
      category: 'Merchandise',
      pointsCost: 500,
      description: 'A reusable water bottle made from recycled materials. Includes the Ecovista logo.',
      partner: 'Ecovista',
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      popular: false
    },
    {
      id: 'rwd-004',
      name: '15% Off Eco-Friendly Products',
      category: 'Discount',
      pointsCost: 300,
      description: 'Get 15% off eco-friendly products at Green Living Store. Valid for 30 days.',
      partner: 'Green Living Store',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      popular: false
    },
    {
      id: 'rwd-005',
      name: 'Plant a Tree in Your Name',
      category: 'Experience',
      pointsCost: 1000,
      description: 'We will plant a tree in your name and send you a certificate.',
      partner: 'Forest Foundation',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1813&q=80',
      popular: true
    },
    {
      id: 'rwd-006',
      name: 'Eco-Friendly Tote Bag',
      category: 'Merchandise',
      pointsCost: 350,
      description: 'A durable tote bag made from organic cotton. Perfect for shopping.',
      partner: 'Ecovista',
      image: 'https://images.unsplash.com/photo-1581263518406-9cd15307e7d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      popular: false
    },
  ];

  const redeemHistory = [
    {
      id: 'rdm-001',
      name: '10% Off at Eco Grocery',
      date: 'July 25, 2023',
      pointsCost: 250,
      status: 'Used',
      code: 'ECO10-XYZ123'
    },
    {
      id: 'rdm-002',
      name: 'Free Coffee at Green Cafe',
      date: 'July 10, 2023',
      pointsCost: 150,
      status: 'Expired',
      code: 'COFFEE-ABC456'
    },
    {
      id: 'rdm-003',
      name: 'Plant a Tree in Your Name',
      date: 'June 15, 2023',
      pointsCost: 1000,
      status: 'Completed',
      code: 'TREE-DEF789'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-eco-green-light/50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-eco-green-dark mb-4">Rewards</h1>
              <p className="text-eco-gray-dark mb-8">
                Turn your eco-friendly actions into rewards. Redeem your points for discounts, products, and experiences.
              </p>
            </div>
          </div>
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-eco-green-light p-3 rounded-full">
                    <Award className="h-6 w-6 text-eco-green-dark" />
                  </div>
                  <div className="ml-3">
                    <div className="text-eco-gray-dark">Your Points</div>
                    <div className="text-3xl font-bold text-eco-green-dark">1,250</div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="relative">
                    <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-eco-gray" />
                    <Input 
                      placeholder="Search rewards" 
                      className="pl-10 focus-visible:ring-eco-green" 
                    />
                  </div>
                  <Button variant="outline" className="border-eco-green text-eco-green">
                    <Filter className="h-4 w-4 mr-2" /> Filter
                  </Button>
                </div>
              </div>
              
              <Tabs defaultValue="available" className="mb-8">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="available" className="data-[state=active]:bg-eco-green data-[state=active]:text-white">
                    Available Rewards
                  </TabsTrigger>
                  <TabsTrigger value="redeemed" className="data-[state=active]:bg-eco-green data-[state=active]:text-white">
                    Your Redeemed Rewards
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="available" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {availableRewards.map((reward) => (
                      <div key={reward.id} className="eco-card overflow-hidden">
                        <div className="h-48 relative">
                          <img 
                            src={reward.image} 
                            alt={reward.name} 
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          {reward.popular && (
                            <div className="absolute top-3 left-3">
                              <Badge className="bg-eco-green border-none">Popular</Badge>
                            </div>
                          )}
                          <div className="absolute top-3 right-3">
                            <Badge className="bg-eco-blue border-none">{reward.category}</Badge>
                          </div>
                          <div className="absolute bottom-3 left-3 text-white">
                            <div className="font-medium">{reward.partner}</div>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="text-xl font-semibold text-eco-green-dark mb-2">{reward.name}</h3>
                          <p className="text-eco-gray-dark text-sm mb-4">{reward.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-eco-green font-semibold">
                              <Tag className="h-4 w-4 mr-1" />
                              {reward.pointsCost} points
                            </div>
                            <Button 
                              className="bg-eco-green hover:bg-eco-green-dark"
                              onClick={() => handleRedeemReward(reward.name, reward.pointsCost)}
                              disabled={reward.pointsCost > 1250}
                            >
                              Redeem
                            </Button>
                          </div>
                          {reward.pointsCost > 1250 && (
                            <div className="mt-3">
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-eco-gray-dark">You need {reward.pointsCost - 1250} more points</span>
                                <span>{1250} / {reward.pointsCost}</span>
                              </div>
                              <Progress 
                                value={(1250 / reward.pointsCost) * 100} 
                                className="h-1.5 bg-eco-gray-light" 
                                indicatorClassName="bg-eco-green" 
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="redeemed" className="mt-6">
                  <div className="space-y-4">
                    {redeemHistory.map((item) => (
                      <div key={item.id} className="eco-card p-5">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-eco-green-dark">{item.name}</h3>
                            <div className="text-eco-gray text-sm">Redeemed on {item.date}</div>
                            <div className="text-eco-gray-dark text-sm mt-1">Code: {item.code}</div>
                          </div>
                          <div className="flex flex-col items-start md:items-end mt-3 md:mt-0">
                            <div className="flex items-center text-eco-green font-medium mb-2">
                              <Tag className="h-4 w-4 mr-1" />
                              {item.pointsCost} points
                            </div>
                            <Badge 
                              className={`${
                                item.status === 'Used' 
                                  ? 'bg-eco-green border-none' 
                                  : item.status === 'Expired' 
                                    ? 'bg-eco-gray border-none' 
                                    : 'bg-eco-blue border-none'
                              }`}
                            >
                              {item.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-eco-gray-light/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-eco-green-dark mb-8 text-center">Reward Levels</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-eco-gray">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center bg-eco-gray-light rounded-full w-16 h-16 mb-4">
                      <Gift className="h-8 w-8 text-eco-gray" />
                    </div>
                    <h3 className="text-xl font-bold text-eco-gray-dark">Bronze</h3>
                    <p className="text-eco-gray">0 - 1,000 points</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-eco-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-eco-gray-dark text-sm">Access to basic rewards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-eco-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-eco-gray-dark text-sm">Participation in community events</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-eco-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-eco-gray-dark text-sm">Monthly newsletter</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-eco-green relative transform md:scale-110 z-10">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-eco-green text-white text-xs px-3 py-1 rounded-full">
                    Your Current Level
                  </div>
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center bg-eco-green-light rounded-full w-16 h-16 mb-4">
                      <Gift className="h-8 w-8 text-eco-green" />
                    </div>
                    <h3 className="text-xl font-bold text-eco-green-dark">Silver</h3>
                    <p className="text-eco-gray">1,000 - 2,500 points</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-eco-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-eco-gray-dark text-sm">All Bronze benefits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-eco-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-eco-gray-dark text-sm">Access to exclusive rewards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-eco-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-eco-gray-dark text-sm">10% bonus points on collections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-eco-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-eco-gray-dark text-sm">Quarterly rewards</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-eco-blue">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center bg-eco-blue/20 rounded-full w-16 h-16 mb-4">
                      <Gift className="h-8 w-8 text-eco-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-eco-blue">Gold</h3>
                    <p className="text-eco-gray">2,500+ points</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-eco-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-eco-gray-dark text-sm">All Silver benefits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-eco-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-eco-gray-dark text-sm">25% bonus points on collections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-eco-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-eco-gray-dark text-sm">Premium partner rewards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-eco-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-eco-gray-dark text-sm">Exclusive events invitations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-eco-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-eco-gray-dark text-sm">Recognition in monthly spotlight</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold text-eco-green-dark mb-4">How to Earn More Points</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-eco-green font-bold">50 points</div>
                    <div className="text-eco-gray-dark">Per verified waste report</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-eco-green font-bold">100 points</div>
                    <div className="text-eco-gray-dark">Per waste collection</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-eco-green font-bold">200 points</div>
                    <div className="text-eco-gray-dark">Per community event</div>
                  </div>
                </div>
                <Button className="bg-eco-green hover:bg-eco-green-dark">
                  Find Ways to Earn <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rewards;
