
// This simulates an AI waste detection service
// In a production app, this would call an actual AI image analysis API

type WasteType = 'plastic' | 'paper' | 'glass' | 'metal' | 'electronic' | 'organic' | 'hazardous' | 'mixed' | 'other';

interface DetectionResult {
  wasteType: WasteType;
  confidence: number;
  description: string;
}

// Simulated AI detection function
export const detectWasteFromImage = (imageFile: File): Promise<DetectionResult> => {
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      // In a real implementation, this would send the image to an AI service
      // For demo purposes, we'll randomly select a waste type
      const wasteTypes: WasteType[] = [
        'plastic', 'paper', 'glass', 'metal', 
        'electronic', 'organic', 'hazardous', 'mixed', 'other'
      ];
      
      const descriptions = {
        plastic: "Plastic waste materials such as bottles, containers, or packaging.",
        paper: "Paper waste including cardboard, newspapers, or printed materials.",
        glass: "Glass waste such as bottles, jars, or broken glass items.",
        metal: "Metal waste including cans, metal scraps, or aluminum items.",
        electronic: "Electronic waste such as old phones, computers, or electronic parts.",
        organic: "Organic waste including food scraps, leaves, or biodegradable materials.",
        hazardous: "Hazardous waste requiring special handling, such as chemicals or batteries.",
        mixed: "Mixed waste containing multiple types of materials.",
        other: "Unclassified waste that doesn't fit standard categories."
      };
      
      // Randomly select a waste type
      const randomIndex = Math.floor(Math.random() * wasteTypes.length);
      const detectedType = wasteTypes[randomIndex];
      
      resolve({
        wasteType: detectedType,
        confidence: Math.floor(Math.random() * 30 + 70), // Random confidence between 70-99%
        description: descriptions[detectedType]
      });
    }, 1500); // Simulate 1.5 second processing time
  });
};
