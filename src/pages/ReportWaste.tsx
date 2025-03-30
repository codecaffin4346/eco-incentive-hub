
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, MapPin, Upload, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { toast } from 'sonner';

const ReportWaste = () => {
  const [uploading, setUploading] = useState(false);
  const [wasteType, setWasteType] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    
    // Simulate upload
    setTimeout(() => {
      setUploading(false);
      toast.success("Waste reported successfully! You earned 50 points.");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-eco-green-light/50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-eco-green-dark mb-4">Report Waste</h1>
              <p className="text-eco-gray-dark mb-8">
                Found waste that needs to be cleaned up? Report it here and earn points towards rewards while helping your community.
              </p>
            </div>
          </div>
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold text-eco-green-dark mb-6">Upload Waste Photo</h2>
                    <div className="border-2 border-dashed border-eco-green-light rounded-lg p-8 text-center hover:bg-eco-gray-light transition-colors cursor-pointer">
                      <div className="flex flex-col items-center justify-center">
                        <Camera className="h-12 w-12 text-eco-green mb-4" />
                        <p className="text-eco-gray-dark mb-2">Drag & drop a photo here or click to browse</p>
                        <p className="text-eco-gray text-sm mb-4">JPG, PNG or HEIC, max 10MB</p>
                        <input type="file" className="hidden" id="waste-photo" accept="image/*" />
                        <label htmlFor="waste-photo">
                          <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-green-light">
                            <Upload className="h-4 w-4 mr-2" /> Select Photo
                          </Button>
                        </label>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="flex items-start mb-4">
                        <CheckCircle2 className="h-5 w-5 text-eco-green mr-3 flex-shrink-0 mt-1" />
                        <p className="text-eco-gray-dark text-sm">AI will analyze your photo to identify the type of waste</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-eco-green mr-3 flex-shrink-0 mt-1" />
                        <p className="text-eco-gray-dark text-sm">The clearer the photo, the better our system can categorize the waste</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-eco-green-dark mb-6">Waste Details</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="location" className="text-eco-gray-dark">Location</Label>
                          <div className="flex mt-1">
                            <Input 
                              id="location" 
                              placeholder="Enter location or use current location" 
                              className="rounded-r-none focus-visible:ring-eco-green" 
                            />
                            <Button type="button" className="rounded-l-none bg-eco-blue hover:bg-eco-blue/80">
                              <MapPin className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="waste-type" className="text-eco-gray-dark">Waste Type</Label>
                          <Select value={wasteType} onValueChange={setWasteType}>
                            <SelectTrigger id="waste-type" className="focus-visible:ring-eco-green">
                              <SelectValue placeholder="Select waste type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="plastic">Plastic</SelectItem>
                              <SelectItem value="paper">Paper</SelectItem>
                              <SelectItem value="glass">Glass</SelectItem>
                              <SelectItem value="metal">Metal</SelectItem>
                              <SelectItem value="electronic">Electronic Waste</SelectItem>
                              <SelectItem value="organic">Organic Waste</SelectItem>
                              <SelectItem value="hazardous">Hazardous Waste</SelectItem>
                              <SelectItem value="mixed">Mixed Waste</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="description" className="text-eco-gray-dark">Description</Label>
                          <Textarea 
                            id="description" 
                            placeholder="Provide any additional details about the waste and its location" 
                            className="resize-none h-24 focus-visible:ring-eco-green" 
                          />
                        </div>
                        
                        <div className="bg-eco-green-light/40 p-4 rounded-lg flex items-start">
                          <AlertCircle className="h-5 w-5 text-eco-green-dark mr-3 flex-shrink-0 mt-1" />
                          <p className="text-sm text-eco-gray-dark">
                            Do not attempt to handle hazardous materials yourself. Report them here and specialists will be notified.
                          </p>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-eco-green hover:bg-eco-green-dark"
                          disabled={uploading}
                        >
                          {uploading ? 'Submitting Report...' : 'Submit Waste Report'}
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-eco-gray-light/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-eco-green-dark mb-4">Why Report Waste?</h2>
              <p className="text-eco-gray-dark mb-8">
                Your reports make a real difference in keeping our environment clean.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-eco-green text-2xl font-bold mb-2">50 Points</div>
                <div className="text-eco-gray-dark font-medium">Earned per verified waste report</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-eco-green text-2xl font-bold mb-2">24-48 Hours</div>
                <div className="text-eco-gray-dark font-medium">Average time until waste collection</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-eco-green text-2xl font-bold mb-2">86%</div>
                <div className="text-eco-gray-dark font-medium">Of reported waste gets properly recycled</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ReportWaste;
