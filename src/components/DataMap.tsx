
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

// Sample GPS data
const sampleGPSData = {
  latitude: 37.7749,
  longitude: -122.4194,
  lastUpdated: new Date().toLocaleTimeString(),
};

const DataMap = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Vehicle Location</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[250px] w-full bg-decharge-lightGray rounded-md overflow-hidden">
          {/* Placeholder for a real map - in a real application, you'd integrate a mapping library like Leaflet or Google Maps */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={32} className="text-decharge-blue mx-auto animate-pulse" />
              <div className="mt-2 text-sm text-muted-foreground">
                Map visualization would go here
              </div>
              <div className="mt-4">
                <div className="text-sm font-medium">Current Location:</div>
                <div className="text-sm text-muted-foreground">
                  {sampleGPSData.latitude.toFixed(4)}, {sampleGPSData.longitude.toFixed(4)}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Last updated: {sampleGPSData.lastUpdated}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataMap;
