
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, MapPin, Upload, AlertCircle, CheckCircle2, Loader2, XCircle, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState, useRef } from 'react';
import { toast } from 'sonner';
import { detectWasteFromImage } from '@/utils/wasteDetection';
import { Progress } from '@/components/ui/progress';

const ReportWaste = () => {
  const [uploading, setUploading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [wasteType, setWasteType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [confidenceLevel, setConfidenceLevel] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match('image.*')) {
      toast.error("Please upload an image file (JPG, PNG, etc.)");
      return;
    }
    
    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("File is too large. Maximum size is 10MB.");
      return;
    }

    setPhotoPreview(URL.createObjectURL(file));
    
    // Simulate upload progress
    setUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          // Once "uploaded", start AI analysis
          analyzeWaste(file);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const analyzeWaste = async (file: File) => {
    setAnalyzing(true);
    setConfidenceLevel(0);
    
    try {
      // Simulate confidence level animation
      const confidenceInterval = setInterval(() => {
        setConfidenceLevel(prev => Math.min(prev + 5, 95));
      }, 100);
      
      // Get AI detection result
      const result = await detectWasteFromImage(file);
      
      clearInterval(confidenceInterval);
      setConfidenceLevel(result.confidence);
      
      // Set the detected waste type and description
      setWasteType(result.wasteType);
      setDescription(result.description);
      
      toast.success(`Waste detected: ${result.wasteType} (${result.confidence}% confidence)`);
    } catch (error) {
      toast.error("Failed to analyze waste. Please try again.");
    } finally {
      setAnalyzing(false);
    }
  };

  const handleLocationDetection = () => {
    if (navigator.geolocation) {
      toast.info("Detecting your location...");
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In a real app, you might want to use a reverse geocoding service
          // to convert coordinates to a human-readable address
          const { latitude, longitude } = position.coords;
          setLocation(`Latitude: ${latitude.toFixed(6)}, Longitude: ${longitude.toFixed(6)}`);
          toast.success("Location detected successfully!");
        },
        (error) => {
          console.error("Error getting location:", error);
          toast.error("Failed to detect location. Please enter it manually.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser. Please enter location manually.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!photoPreview) {
      toast.error("Please upload a photo of the waste");
      return;
    }
    
    if (!location) {
      toast.error("Please provide the location");
      return;
    }
    
    if (!wasteType) {
      toast.error("Please select or confirm the waste type");
      return;
    }
    
    // Simulate form submission
    setUploading(true);
    
    setTimeout(() => {
      setUploading(false);
      toast.success("Waste reported successfully! You earned 50 points.");
      
      // Reset form after successful submission
      setPhotoPreview(null);
      setWasteType('');
      setDescription('');
      setLocation('');
      setUploadProgress(0);
      setConfidenceLevel(0);
      
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }, 2000);
  };

  const removeImage = () => {
    setPhotoPreview(null);
    setWasteType('');
    setDescription('');
    setUploadProgress(0);
    setConfidenceLevel(0);
    
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-[#F2FCE2] to-white py-12">
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
                    
                    {!photoPreview ? (
                      <div 
                        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${dragActive 
                          ? 'border-eco-green bg-eco-green-light/20' 
                          : 'border-eco-green-light hover:bg-eco-gray-light'
                        }`}
                        onDragEnter={handleDrag}
                        onDragOver={handleDrag}
                        onDragLeave={handleDrag}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <div className="flex flex-col items-center justify-center">
                          <Camera className="h-12 w-12 text-eco-green mb-4" />
                          <p className="text-eco-gray-dark mb-2">Drag & drop a photo here or click to browse</p>
                          <p className="text-eco-gray text-sm mb-4">JPG, PNG or HEIC, max 10MB</p>
                          <input 
                            type="file" 
                            ref={fileInputRef}
                            className="hidden" 
                            id="waste-photo" 
                            accept="image/*" 
                            onChange={handleFileInput}
                          />
                          <label htmlFor="waste-photo">
                            <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-green-light">
                              <Upload className="h-4 w-4 mr-2" /> Select Photo
                            </Button>
                          </label>
                        </div>
                      </div>
                    ) : (
                      <div className="border rounded-lg overflow-hidden">
                        <div className="relative">
                          <img 
                            src={photoPreview} 
                            alt="Waste preview" 
                            className="w-full h-48 object-cover" 
                          />
                          <Button 
                            variant="destructive" 
                            size="icon" 
                            className="absolute top-2 right-2" 
                            onClick={removeImage}
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        {uploading && (
                          <div className="p-4 bg-white">
                            <p className="font-medium text-eco-gray-dark mb-2">Uploading image...</p>
                            <Progress 
                              value={uploadProgress} 
                              className="h-2 mb-2" 
                              indicatorClassName="bg-eco-green" 
                            />
                            <p className="text-xs text-eco-gray">{uploadProgress}% complete</p>
                          </div>
                        )}
                        
                        {analyzing && (
                          <div className="p-4 bg-white">
                            <div className="flex items-center space-x-2 mb-2">
                              <Loader2 className="h-4 w-4 animate-spin text-eco-green" />
                              <p className="font-medium text-eco-gray-dark">Analyzing waste type...</p>
                            </div>
                            <Progress 
                              value={confidenceLevel} 
                              className="h-2 mb-2" 
                              indicatorClassName="bg-eco-blue" 
                            />
                            <p className="text-xs text-eco-gray">AI confidence: {confidenceLevel}%</p>
                          </div>
                        )}
                        
                        {!analyzing && !uploading && wasteType && (
                          <div className="p-4 bg-eco-green-light/20 border-t">
                            <div className="flex items-start space-x-2">
                              <CheckCircle2 className="h-5 w-5 text-eco-green flex-shrink-0 mt-1" />
                              <div>
                                <p className="font-medium text-eco-gray-dark">
                                  Detected Waste Type: <span className="text-eco-green">{wasteType}</span>
                                </p>
                                <p className="text-sm text-eco-gray-dark mt-1">{description}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    
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
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                            />
                            <Button 
                              type="button" 
                              className="rounded-l-none bg-eco-blue hover:bg-eco-blue/80"
                              onClick={handleLocationDetection}
                            >
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
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
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
                          disabled={uploading || analyzing}
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
