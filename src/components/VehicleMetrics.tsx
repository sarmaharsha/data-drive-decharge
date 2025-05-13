
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

// Sample OBD data format
interface OBDData {
  speed: number;
  rpm: number;
  fuelLevel: number;
  engineTemp: number;
  timestamp: string;
}

// Sample data based on the DeCharge dataset structure
const sampleData: OBDData[] = [
  {
    speed: 45,
    rpm: 1500,
    fuelLevel: 75,
    engineTemp: 90,
    timestamp: new Date().toISOString(),
  },
  {
    speed: 65,
    rpm: 2200,
    fuelLevel: 74,
    engineTemp: 92,
    timestamp: new Date().toISOString(),
  },
  {
    speed: 55,
    rpm: 1800,
    fuelLevel: 73,
    engineTemp: 91,
    timestamp: new Date().toISOString(),
  },
];

const VehicleMetrics = () => {
  const [currentData, setCurrentData] = useState<OBDData>(sampleData[0]);
  const [dataIndex, setDataIndex] = useState(0);

  useEffect(() => {
    // Simulate real-time data updates
    const timer = setInterval(() => {
      const newIndex = (dataIndex + 1) % sampleData.length;
      setDataIndex(newIndex);
      setCurrentData(sampleData[newIndex]);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [dataIndex]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <MetricCard 
        title="Speed" 
        value={currentData.speed} 
        unit="mph" 
        maxValue={120}
        color="bg-decharge-blue"
      />
      <MetricCard 
        title="RPM" 
        value={currentData.rpm} 
        unit="rpm" 
        maxValue={7000}
        color="bg-decharge-green"
      />
      <MetricCard 
        title="Fuel Level" 
        value={currentData.fuelLevel} 
        unit="%" 
        maxValue={100}
        color="bg-amber-500"
      />
      <MetricCard 
        title="Engine Temp" 
        value={currentData.engineTemp} 
        unit="°C" 
        maxValue={120}
        color="bg-red-500"
      />
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: number;
  unit: string;
  maxValue: number;
  color: string;
}

const MetricCard = ({ title, value, unit, maxValue, color }: MetricCardProps) => {
  const progressValue = (value / maxValue) * 100;
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-2">
          {value} <span className="text-sm font-normal text-muted-foreground">{unit}</span>
        </div>
        <div className="h-2 relative w-full overflow-hidden rounded-full bg-secondary">
          <div 
            className={cn("h-full transition-all ease-in-out duration-500", color)} 
            style={{ width: `${progressValue}%` }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleMetrics;
