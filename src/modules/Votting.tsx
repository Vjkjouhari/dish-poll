import type { Dish, DishCardProps } from "@/schemas/pollingSystem";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Votting() {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);
  const [userSelections, setUserSelections] = useState<Record<number, number>>(
    {},
  );

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
      .then((res) => res.json())
      .then((data) => {
        setDishes(data);
        setLoading(false);
      });
    const saved = localStorage.getItem("userSelections");
    if (saved) setUserSelections(JSON.parse(saved));
  }, []);

  const handleVote = (dishId: number, rank: number) => {
    const newSelections = { ...userSelections };
    Object.keys(newSelections).forEach((r) => {
      if (newSelections[Number(r)] === dishId) delete newSelections[Number(r)];
    });
    if (userSelections[rank] === dishId) {
      delete newSelections[rank];
    } else {
      newSelections[rank] = dishId;
    }

    setUserSelections(newSelections);
    localStorage.setItem("userSelections", JSON.stringify(newSelections));
  };

  if (loading)
    return <div className="text-center p-10 font-bold">Loading Menu...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {dishes.map((dish) => {
        const currentRank = Object.keys(userSelections).find(
          (key) => userSelections[Number(key)] === dish.id,
        );

        return (
          <DishCard
            key={dish.id}
            dish={dish}
            currentRank={currentRank ? Number(currentRank) : null}
            onVote={handleVote}
          />
        );
      })}
    </div>
  );
}

export function DishCard({ dish, currentRank, onVote }: DishCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col bg-amber-100 h-full hover:shadow-lg transition-shadow duration-300 p-0 m-0">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={dish.image}
          alt={dish.dishName}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
        {currentRank && (
          <Badge className="absolute top-2 right-2 bg-orange-600 hover:bg-orange-700 shadow-lg">
            Rank {currentRank}
          </Badge>
        )}
      </div>

      <CardHeader className="p-4 pt-0 pb-0">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 truncate">
          {dish.dishName}
        </h3>
      </CardHeader>

      <CardContent className="p-4 pt-0 flex-1">
        <p className="text-sm text-muted-foreground line-clamp-2 italic">
          "{dish.description}"
        </p>
      </CardContent>

      <CardFooter className="p-4 border-t bg-gray-50/50 flex flex-col gap-3">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center w-full">
          Rank Your Dish
        </span>
        <div className="flex gap-2 w-full">
          {[1, 2, 3].map((rank) => {
            const isActive = currentRank === rank;
            return (
              <Button
                key={rank}
                variant={isActive ? "default" : "outline"}
                size="sm"
                className={`flex-1 font-bold ${
                  isActive
                    ? "bg-orange-600 hover:bg-orange-700 text-white"
                    : "hover:bg-orange-100 hover:text-orange-700 border-gray-200"
                }`}
                onClick={() => onVote(dish.id, rank)}
              >
                R{rank}
              </Button>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}
