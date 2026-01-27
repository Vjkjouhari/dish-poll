import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PollingSystemTabs } from "@/schemas/pollingSystem";
import { CookingPot } from "lucide-react";

export default function PollingSystem() {
  return (
    <div className="max-w-full mx-auto p-8 bg-amber-300">
      <CookingPot className="mx-auto mb-4 h-16 w-16 text-amber-900" />

      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-orange-600 mb-4 italic">
          "Good food is the foundation of genuine happiness."
        </h1>
        <p className="text-xl text-gray-700">
          Your voice matters! Vote for the Dish of the Day or order your
          favorites to your doorstep.
        </p>
      </section>

      <div className="flex flex-col items-center">
        <Tabs defaultValue="vote" className="w-full">
          <TabsList className="grid md:w-125 w-75 grid-cols-2 mx-auto mb-8 bg-orange-100 p-0 rounded-md">
            {PollingSystemTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-bl bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b data-[state=active]:border-b-amber-900"
              >
                <tab.icon className="mr-2 size-5" />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {PollingSystemTabs.map(({ value, component: Component }) => (
            <TabsContent key={value} value={value} className="mt-4">
              <Component />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
