import Results from "@/modules/Results";
import Votting from "@/modules/Votting";
import { Star, Vote } from "lucide-react";

export type TabItems = {
  value: string;
  label: string;
  component: React.ComponentType;
  icon: React.ComponentType<any>;
};

export const PollingSystemTabs: TabItems[] = [
  {
    value: "vote",
    label: "Vote",
    component: Votting,
    icon: Vote,
  },
  {
    value: "results",
    label: "Results",
    component: Results,
    icon: Star,
  },
];

export interface Dish {
  id: number;
  dishName: string;
  description: string;
  image: string;
}

export const RANK_POINTS: Record<number, number> = { 1: 30, 2: 20, 3: 10 };

export interface DishCardProps {
  dish: {
    id: number;
    dishName: string;
    description: string;
    image: string;
  };
  currentRank: number | null;
  onVote: (dishId: number, rank: number) => void;
}

export interface DishRated {
  id: number;
  dishName: string;
  image: string;
  points: number;
  isUserSelection: boolean;
}

export interface ResultCardProps {
  dish: {
    id: number;
    dishName: string;
    image: string;
    points: number;
    isUserSelection: boolean;
  };
  index: number;
}
