import { 
  CalendarCheck, 
  Award, 
  Coins, 
  Medal, 
  BarChart3, 
  MessageSquare, 
  ShieldAlert, 
  Settings2,
  TrendingUp, 
  Scale, 
  Rocket, 
  Flag, 
  BookOpen, 
  Eye, 
  Copy, 
  ChevronDown, 
  Lightbulb, 
  Hand, 
  RefreshCw, 
  Files, 
  Columns, 
  AlertTriangle, 
  Users, 
  Puzzle,
  Layers,
  ArrowUpNarrowWide,
  PauseCircle
} from 'lucide-react';

interface PracticeIconProps {
  number: number;
}

const iconMap: Record<number, React.ComponentType<{ className?: string }>> = {
  1: CalendarCheck,
  2: Award,
  3: Coins,
  4: Medal,
  5: BarChart3,
  6: MessageSquare,
  7: ShieldAlert,
  8: Users,
  9: Settings2,
  10: Eye,
  11: TrendingUp,
  12: Scale,
  13: Rocket,
  14: Flag,
  15: BookOpen,
  16: Lightbulb,
  17: Puzzle,
  18: Layers,
  19: PauseCircle,
  20: ArrowUpNarrowWide,
  21: RefreshCw,
  22: Files,
  23: Columns,
  24: Files,
  25: Users,
};

export const PracticeIcon = ({ number }: PracticeIconProps) => {
  const Icon = iconMap[number] || CalendarCheck;
  
  return (
    <div className="group transition-transform duration-300 hover:scale-110">
      <Icon className="w-8 h-8 text-primary transition-all duration-300 group-hover:rotate-12 group-hover:text-accent" />
    </div>
  );
};
