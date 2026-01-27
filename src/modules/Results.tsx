import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import type { DishRated, ResultCardProps } from "@/schemas/pollingSystem";

export default function Results() {
  const [results, setResults] = useState<DishRated[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json",
      );
      const dishes = await res.json();
      const selections: Record<number, number> = JSON.parse(
        localStorage.getItem("userSelections") || "{}",
      );
      const userSelectedIds = Object.values(selections);
      const processed = dishes.map((dish: any) => {
        let points = 0;
        if (selections[1] === dish.id) points = 30;
        else if (selections[2] === dish.id) points = 20;
        else if (selections[3] === dish.id) points = 10;

        return {
          ...dish,
          points,
          isUserSelection: userSelectedIds.includes(dish.id),
        };
      });
      const sorted = processed.sort(
        (a: DishRated, b: DishRated) => b.points - a.points,
      );
      setResults(sorted);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Poll Standings</h2>
      <div className="space-y-4">
        {results.map((dish, index) => (
          <ResultCard key={dish.id} dish={dish} index={index} />
        ))}
      </div>
    </div>
  );
}

export function ResultCard({ dish, index }: ResultCardProps) {
  return (
    <Card
      className={`relative transition-all duration-300 overflow-hidden ${
        dish.isUserSelection
          ? "border-orange-500 bg-orange-50 shadow-md scale-[1.02]"
          : "hover:border-gray-300"
      }`}
    >
      <div className="flex items-center p-4">
        <div className="flex flex-col items-center justify-center mr-4 min-w-10">
          <span className="text-sm font-bold text-gray-400 uppercase leading-none">
            Rank
          </span>
          <span className="text-2xl font-black text-gray-800 italic">
            #{index + 1}
          </span>
        </div>

        <div className="relative h-16 w-16 mr-4 shrink-0">
          <img
            src={dish.image}
            alt={dish.dishName}
            className="h-full w-full rounded-full object-cover border-2 border-white shadow-sm"
          />
        </div>

        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            {dish.dishName}
            {dish.isUserSelection && (
              <span className="inline-flex items-center rounded-full bg-orange-600 px-2 py-0.5 text-[10px] font-medium text-white">
                ⭐ SELECTED
              </span>
            )}
          </h4>
          <p className="text-sm text-muted-foreground font-medium">
            {dish.points} Points earned
          </p>
        </div>

        <div className="ml-4 text-right">
          <div className="text-2xl font-extrabold text-orange-600">
            {dish.points}
          </div>
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
            Total Score
          </div>
        </div>
      </div>
    </Card>
  );
}
