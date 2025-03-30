
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Trophy, MapPin, Filter, ArrowUp, ArrowDown, Medal, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const Leaderboard = () => {
  const individualLeaders = [
    {
      id: 1,
      rank: 1,
      name: 'Sarah Johnson',
      location: 'West End, Eco City',
      points: 3250,
      wasteCollected: 145,
      reportsSubmitted: 67,
      avatar: 'SJ',
      change: 'up'
    },
    {
      id: 2,
      rank: 2,
      name: 'David Chen',
      location: 'Downtown, Eco City',
      points: 2980,
      wasteCollected: 132,
      reportsSubmitted: 59,
      avatar: 'DC',
      change: 'same'
    },
    {
      id: 3,
      rank: 3,
      name: 'Miguel Sanchez',
      location: 'East Side, Eco City',
      points: 2870,
      wasteCollected: 128,
      reportsSubmitted: 54,
      avatar: 'MS',
      change: 'up'
    },
    {
      id: 4,
      rank: 4,
      name: 'Amara Khan',
      location: 'North Park, Eco City',
      points: 2645,
      wasteCollected: 118,
      reportsSubmitted: 50,
      avatar: 'AK',
      change: 'down'
    },
    {
      id: 5,
      rank: 5,
      name: 'Thomas Wilson',
      location: 'Riverside, Eco City',
      points: 2520,
      wasteCollected: 112,
      reportsSubmitted: 48,
      avatar: 'TW',
      change: 'up'
    },
  ];

  const groupLeaders = [
    {
      id: 1,
      rank: 1,
      name: 'Green Warriors',
      location: 'Citywide',
      points: 9850,
      wasteCollected: 435,
      reportsSubmitted: 212,
      members: 28,
      avatar: 'GW',
      change: 'up'
    },
    {
      id: 2,
      rank: 2,
      name: 'EcoCare Community',
      location: 'North District',
      points: 8670,
      wasteCollected: 385,
      reportsSubmitted: 189,
      members: 23,
      avatar: 'EC',
      change: 'same'
    },
    {
      id: 3,
      rank: 3,
      name: 'Planet Protectors',
      location: 'South District',
      points: 7990,
      wasteCollected: 355,
      reportsSubmitted: 175,
      members: 21,
      avatar: 'PP',
      change: 'up'
    },
    {
      id: 4,
      rank: 4,
      name: 'Earth Guardians',
      location: 'East District',
      points: 7520,
      wasteCollected: 335,
      reportsSubmitted: 166,
      members: 19,
      avatar: 'EG',
      change: 'down'
    },
    {
      id: 5,
      rank: 5,
      name: 'Clean City Initiative',
      location: 'West District',
      points: 6950,
      wasteCollected: 310,
      reportsSubmitted: 153,
      members: 17,
      avatar: 'CC',
      change: 'same'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-eco-green-light/50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-eco-green-dark mb-4">Leaderboard</h1>
              <p className="text-eco-gray-dark mb-8">
                See who's making the biggest impact in our community. Will you be next on the list?
              </p>
            </div>
          </div>
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between mb-8">
                <h2 className="text-2xl font-bold text-eco-green-dark mb-4 md:mb-0 flex items-center">
                  <Trophy className="h-6 w-6 text-eco-green mr-2" /> 
                  Top Performers
                </h2>
                <div className="flex space-x-4">
                  <div className="relative">
                    <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-eco-gray" />
                    <Input 
                      placeholder="Search users or groups" 
                      className="pl-10 focus-visible:ring-eco-green" 
                    />
                  </div>
                  <Button variant="outline" className="border-eco-green text-eco-green">
                    <MapPin className="h-4 w-4 mr-2" /> Area
                  </Button>
                  <Button variant="outline" className="border-eco-green text-eco-green">
                    <Filter className="h-4 w-4 mr-2" /> Filter
                  </Button>
                </div>
              </div>
              
              <Tabs defaultValue="individuals" className="mb-8">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="individuals" className="data-[state=active]:bg-eco-green data-[state=active]:text-white">
                    Individuals
                  </TabsTrigger>
                  <TabsTrigger value="groups" className="data-[state=active]:bg-eco-green data-[state=active]:text-white">
                    Groups
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="individuals">
                  <div className="rounded-xl overflow-hidden border border-eco-green-light shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-eco-green-light">
                          <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-eco-green-dark">Rank</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-eco-green-dark">User</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-eco-green-dark">Location</th>
                            <th className="px-6 py-4 text-right text-sm font-semibold text-eco-green-dark">Points</th>
                            <th className="px-6 py-4 text-right text-sm font-semibold text-eco-green-dark">Waste Collected</th>
                            <th className="px-6 py-4 text-right text-sm font-semibold text-eco-green-dark">Reports</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-eco-green-light/50">
                          {individualLeaders.map((leader) => (
                            <tr key={leader.id} className="hover:bg-eco-green-light/30 transition-colors duration-150">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="text-eco-gray-dark font-semibold">#{leader.rank}</span>
                                  {leader.change === 'up' && <ArrowUp className="ml-2 h-4 w-4 text-eco-green" />}
                                  {leader.change === 'down' && <ArrowDown className="ml-2 h-4 w-4 text-red-500" />}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  {leader.rank <= 3 ? (
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-eco-green flex items-center justify-center text-white font-bold">
                                      <Medal className="h-5 w-5" />
                                    </div>
                                  ) : (
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-eco-gray-light flex items-center justify-center text-eco-gray-dark font-bold">
                                      {leader.avatar}
                                    </div>
                                  )}
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-eco-gray-dark">{leader.name}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center text-sm text-eco-gray">
                                  <MapPin className="h-4 w-4 mr-1 text-eco-gray" />
                                  {leader.location}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="text-sm font-semibold text-eco-green">{leader.points.toLocaleString()}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="text-sm text-eco-gray-dark">{leader.wasteCollected} kg</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="text-sm text-eco-gray-dark">{leader.reportsSubmitted}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="groups">
                  <div className="rounded-xl overflow-hidden border border-eco-green-light shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-eco-green-light">
                          <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-eco-green-dark">Rank</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-eco-green-dark">Group</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-eco-green-dark">Location</th>
                            <th className="px-6 py-4 text-right text-sm font-semibold text-eco-green-dark">Points</th>
                            <th className="px-6 py-4 text-right text-sm font-semibold text-eco-green-dark">Waste Collected</th>
                            <th className="px-6 py-4 text-right text-sm font-semibold text-eco-green-dark">Members</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-eco-green-light/50">
                          {groupLeaders.map((group) => (
                            <tr key={group.id} className="hover:bg-eco-green-light/30 transition-colors duration-150">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="text-eco-gray-dark font-semibold">#{group.rank}</span>
                                  {group.change === 'up' && <ArrowUp className="ml-2 h-4 w-4 text-eco-green" />}
                                  {group.change === 'down' && <ArrowDown className="ml-2 h-4 w-4 text-red-500" />}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  {group.rank <= 3 ? (
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-eco-blue flex items-center justify-center text-white font-bold">
                                      <Medal className="h-5 w-5" />
                                    </div>
                                  ) : (
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-eco-gray-light flex items-center justify-center text-eco-gray-dark font-bold">
                                      {group.avatar}
                                    </div>
                                  )}
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-eco-gray-dark">{group.name}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center text-sm text-eco-gray">
                                  <MapPin className="h-4 w-4 mr-1 text-eco-gray" />
                                  {group.location}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="text-sm font-semibold text-eco-green">{group.points.toLocaleString()}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="text-sm text-eco-gray-dark">{group.wasteCollected} kg</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="flex items-center justify-end text-sm text-eco-gray-dark">
                                  <User className="h-4 w-4 mr-1 text-eco-gray" />
                                  {group.members}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8">
                <Button variant="outline" className="border-eco-green text-eco-green">
                  View Complete Leaderboard
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-eco-gray-light/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-eco-green-dark mb-8 text-center">Your Progress</h2>
              
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="flex-shrink-0 h-16 w-16 rounded-full bg-eco-gray-light flex items-center justify-center text-eco-gray-dark text-xl font-bold">
                      YP
                    </div>
                    <div className="ml-4">
                      <div className="text-lg font-medium text-eco-gray-dark">Your Profile</div>
                      <div className="text-sm text-eco-gray">Joined 3 months ago</div>
                    </div>
                  </div>
                  
                  <div className="text-center md:text-right">
                    <div className="text-3xl font-bold text-eco-green">1,250</div>
                    <div className="text-sm text-eco-gray">Total Points</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-eco-green-light/30 p-4 rounded-lg text-center">
                    <div className="text-eco-green-dark font-bold text-xl">55 kg</div>
                    <div className="text-eco-gray-dark text-sm">Waste Collected</div>
                  </div>
                  <div className="bg-eco-green-light/30 p-4 rounded-lg text-center">
                    <div className="text-eco-green-dark font-bold text-xl">23</div>
                    <div className="text-eco-gray-dark text-sm">Reports Submitted</div>
                  </div>
                  <div className="bg-eco-green-light/30 p-4 rounded-lg text-center">
                    <div className="text-eco-green-dark font-bold text-xl">8</div>
                    <div className="text-eco-gray-dark text-sm">Collection Events</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-eco-gray-dark">Current Rank: #42</span>
                      <span className="text-sm font-medium text-eco-green">Next rank: #41 (1,300 pts)</span>
                    </div>
                    <Progress 
                      value={96} 
                      className="h-2 bg-eco-gray-light" 
                      indicatorClassName="bg-eco-green" 
                    />
                    <div className="mt-1 text-xs text-eco-gray text-right">50 points to go</div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-eco-gray-dark">Level Progress: Silver Member</span>
                      <span className="text-sm font-medium text-eco-blue">Gold Member (2,500 pts)</span>
                    </div>
                    <Progress 
                      value={50} 
                      className="h-2 bg-eco-gray-light" 
                      indicatorClassName="bg-eco-blue" 
                    />
                    <div className="mt-1 text-xs text-eco-gray text-right">1,250 / 2,500 points</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button className="bg-eco-green hover:bg-eco-green-dark">
                  Find Activities to Earn More Points
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

export default Leaderboard;
