import { CookingPot, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function NotFound() {
  return (
    <div className="min-h-screen bg-amber-300 flex items-center justify-center px-4">
      <Card className="w-full max-w-md text-center shadow-2xl border-none bg-amber-200">
        <CardHeader className="pt-10">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <CookingPot className="h-24 w-24 text-amber-600 animate-bounce" />
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                404
              </span>
            </div>
          </div>
          <CardTitle className="text-3xl font-extrabold text-gray-800">
            Oops! Plate is Empty
          </CardTitle>
          <CardDescription className="text-base font-medium text-gray-500 mt-2">
            The page you're looking for is never existed.
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-10">
          <p className="text-sm text-gray-400 mb-8 italic">
            "Even the best chefs lose a recipe sometimes."
          </p>

          <Link to="/">
            <Button
              size="lg"
              className="w-full bg-amber-950 hover:bg-amber-900 text-white py-6 text-lg font-bold transition-all"
            >
              <Home className="mr-2 h-6 w-6" />
              Move to Dashboard
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
