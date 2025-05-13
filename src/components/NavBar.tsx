
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, ShoppingCart, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem = ({ icon, label, active, onClick }: NavItemProps) => {
  const isMobile = useIsMobile();
  
  return (
    <Button
      variant="ghost"
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
        active && "bg-decharge-blue/10 text-decharge-blue"
      )}
      onClick={onClick}
    >
      {icon}
      {!isMobile && <span>{label}</span>}
    </Button>
  );
};

const NavBar = () => {
  const [activeTab, setActiveTab] = React.useState("dashboard");
  const isMobile = useIsMobile();

  return (
    <div className="fixed bottom-0 left-0 w-full md:top-0 md:bottom-auto bg-white dark:bg-decharge-dark border-t md:border-b md:border-t-0 border-gray-200 dark:border-gray-800 z-50 px-2 py-2">
      <div className="container flex items-center justify-between md:justify-start gap-4">
        <div className="hidden md:flex items-center mr-6">
          <span className="text-xl font-bold text-decharge-blue">DeCharge</span>
        </div>
        
        <div className={cn(
          "flex items-center justify-around w-full md:w-auto md:justify-start gap-1 md:gap-2",
        )}>
          <NavItem
            icon={<Car size={20} />}
            label="Dashboard"
            active={activeTab === "dashboard"}
            onClick={() => setActiveTab("dashboard")}
          />
          <NavItem
            icon={<ShoppingCart size={20} />}
            label="Marketplace"
            active={activeTab === "marketplace"}
            onClick={() => setActiveTab("marketplace")}
          />
          <NavItem
            icon={<Wallet size={20} />}
            label="Rewards"
            active={activeTab === "rewards"}
            onClick={() => setActiveTab("rewards")}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
