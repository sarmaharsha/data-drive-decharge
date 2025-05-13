
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';

interface TokenRewardsProps {
  totalEarned: number;
  availableBalance: number;
  nextMilestone: number;
  progressToNextMilestone: number;
}

const TokenRewards: React.FC<TokenRewardsProps> = ({
  totalEarned = 125.5,
  availableBalance = 75.25,
  nextMilestone = 150,
  progressToNextMilestone = 83,
}) => {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Rewards Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Earned</p>
              <h3 className="text-2xl font-bold">{totalEarned} DCG</h3>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Available Balance</p>
              <h3 className="text-2xl font-bold text-decharge-green">{availableBalance} DCG</h3>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Next Milestone</p>
              <p className="text-sm text-muted-foreground">{progressToNextMilestone}%</p>
            </div>
            <Progress value={progressToNextMilestone} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Earn <span className="font-medium">{nextMilestone - totalEarned} DCG</span> more to reach the next reward tier
            </p>
          </div>

          <div className="flex gap-2 mt-4">
            <Button className="flex-1 bg-decharge-blue hover:bg-decharge-darkBlue">
              <Wallet className="mr-2 h-4 w-4" />
              Claim Rewards
            </Button>
            <Button variant="outline" className="flex-1">
              View History
            </Button>
          </div>
          
          <div className="bg-muted p-3 rounded-md">
            <h4 className="text-sm font-medium mb-1">Recent Activity</h4>
            <div className="space-y-1">
              <div className="text-xs flex items-center justify-between">
                <span>Data sharing reward</span>
                <span className="text-decharge-green">+2.5 DCG</span>
              </div>
              <div className="text-xs flex items-center justify-between">
                <span>Drive completion bonus</span>
                <span className="text-decharge-green">+1.0 DCG</span>
              </div>
              <div className="text-xs flex items-center justify-between">
                <span>Weekly contribution</span>
                <span className="text-decharge-green">+5.0 DCG</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenRewards;
