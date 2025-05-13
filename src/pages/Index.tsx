
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VehicleMetrics from '@/components/VehicleMetrics';
import DataMap from '@/components/DataMap';
import MarketplaceList from '@/components/MarketplaceList';
import TokenRewards from '@/components/TokenRewards';
import NavBar from '@/components/NavBar';
import { Car, Info, ShoppingCart, Wallet } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-decharge-dark pb-20 md:pb-0 md:pt-16">
      <NavBar />
      
      <div className="container max-w-4xl py-6">
        <header className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-1">DeCharge Data Marketplace</h1>
              <p className="text-muted-foreground">
                Share vehicle data, earn rewards, and participate in the DePIN mobility network
              </p>
            </div>
            <Button variant="outline" size="sm" className="w-fit flex items-center gap-2">
              <Info size={16} />
              <span>Help</span>
            </Button>
          </div>
        </header>

        <Tabs
          defaultValue="dashboard"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Car size={16} />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="marketplace" className="flex items-center gap-2">
              <ShoppingCart size={16} />
              <span>Marketplace</span>
            </TabsTrigger>
            <TabsTrigger value="rewards" className="flex items-center gap-2">
              <Wallet size={16} />
              <span>Rewards</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="mt-0">
            <div className="space-y-6">
              <section>
                <h2 className="text-lg font-bold mb-4">Vehicle Metrics</h2>
                <VehicleMetrics />
              </section>
              
              <section>
                <DataMap />
              </section>
              
              <section>
                <TokenRewards 
                  totalEarned={125.5}
                  availableBalance={75.25}
                  nextMilestone={150}
                  progressToNextMilestone={83}
                />
              </section>
            </div>
          </TabsContent>
          
          <TabsContent value="marketplace" className="mt-0">
            <MarketplaceList />
          </TabsContent>
          
          <TabsContent value="rewards" className="mt-0">
            <div className="space-y-6">
              <TokenRewards 
                totalEarned={125.5}
                availableBalance={75.25}
                nextMilestone={150}
                progressToNextMilestone={83}
              />
              
              <section>
                <h2 className="text-lg font-bold mb-4">Rewards Tiers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-decharge-dark border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Bronze</h3>
                    <p className="text-xs text-muted-foreground mb-2">0-100 DCG</p>
                    <ul className="text-xs space-y-1">
                      <li>• Basic rewards</li>
                      <li>• Standard data rates</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-decharge-dark border border-gray-200 dark:border-gray-800 rounded-lg p-4 ring-2 ring-decharge-blue">
                    <h3 className="font-medium mb-2">Silver</h3>
                    <p className="text-xs text-muted-foreground mb-2">100-300 DCG</p>
                    <ul className="text-xs space-y-1">
                      <li>• 1.5x rewards multiplier</li>
                      <li>• Premium data rates</li>
                      <li>• Weekly bonuses</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-decharge-dark border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Gold</h3>
                    <p className="text-xs text-muted-foreground mb-2">300+ DCG</p>
                    <ul className="text-xs space-y-1">
                      <li>• 2x rewards multiplier</li>
                      <li>• Elite data rates</li>
                      <li>• Daily bonuses</li>
                      <li>• Early feature access</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
