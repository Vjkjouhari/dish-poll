import { Outlet } from "react-router-dom";
import { CookingPot, LogOut, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivateLayout({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b p-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 shadow-sm">
        <div className="flex items-center justify-center gap-2">
          <CookingPot className="h-6 w-6 text-amber-600" />
          <h1 className="text-lg md:text-xl font-bold text-orange-600">
            RateMyPlate
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center">
          <span className="text-sm md:text-md font-semibold text-gray-500 whitespace-nowrap">
            <UserCircle className="mr-2 h-5 w-5 inline" />
            {localStorage.getItem("user_name")}
          </span>
          <Button variant="ghost" size="sm" onClick={onLogout}>
            Logout <LogOut className="mr-1 h-4 w-4" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
