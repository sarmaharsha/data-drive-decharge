
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

interface DataItem {
  id: string;
  name: string;
  description: string;
  valuePerHour: number;
  isSharing: boolean;
}

const initialData: DataItem[] = [
  {
    id: '1',
    name: 'Basic Telematics',
    description: 'Speed, RPM, and location data',
    valuePerHour: 1.5,
    isSharing: true,
  },
  {
    id: '2',
    name: 'Engine Diagnostics',
    description: 'Detailed engine performance metrics',
    valuePerHour: 2.8,
    isSharing: false,
  },
  {
    id: '3',
    name: 'Fuel Efficiency',
    description: 'Fuel consumption patterns and analysis',
    valuePerHour: 2.0,
    isSharing: false,
  },
  {
    id: '4',
    name: 'Drive Patterns',
    description: 'Acceleration, braking, and turning data',
    valuePerHour: 3.2,
    isSharing: true,
  },
];

const MarketplaceList = () => {
  const [dataItems, setDataItems] = useState<DataItem[]>(initialData);

  const toggleSharing = (id: string) => {
    setDataItems(
      dataItems.map((item) =>
        item.id === id ? { ...item, isSharing: !item.isSharing } : item
      )
    );
  };

  const totalEarnings = dataItems
    .filter((item) => item.isSharing)
    .reduce((total, item) => total + item.valuePerHour, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Data Marketplace</h2>
        <div className="text-sm">
          <span className="text-muted-foreground mr-2">Potential earnings:</span>
          <span className="font-bold text-decharge-green">
            ${totalEarnings.toFixed(2)}/hr
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {dataItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CardTitle className="text-sm font-medium">{item.name}</CardTitle>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info size={14} className="text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p className="w-[200px] text-xs">{item.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Badge
                  variant={item.isSharing ? "default" : "outline"}
                  className={item.isSharing ? "bg-decharge-blue" : ""}
                >
                  {item.isSharing ? "Sharing" : "Not Sharing"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <div className="mt-2 text-sm">
                <span className="text-muted-foreground">Value: </span>
                <span className="font-medium text-decharge-green">
                  ${item.valuePerHour.toFixed(2)}/hour
                </span>
              </div>
            </CardContent>
            <Separator />
            <CardFooter className="flex justify-between pt-3">
              <div className="flex items-center">
                <Switch
                  checked={item.isSharing}
                  onCheckedChange={() => toggleSharing(item.id)}
                  className="mr-2"
                />
                <span className="text-sm">
                  {item.isSharing ? "Sharing Enabled" : "Enable Sharing"}
                </span>
              </div>
              <Button variant="ghost" size="sm">Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceList;
