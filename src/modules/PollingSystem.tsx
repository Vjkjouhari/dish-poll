import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Results from "./Results";
import Votting from "./Votting";

export default function PollingSystem() {
  return (
    <div>
      <h1>Polling System Module</h1>
      <p>This is a placeholder for the Polling System functionality.</p>
      <Tabs>
        <TabsList>
          {PollingSystemTabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {PollingSystemTabs.map(({ value, component: Component }) => (
          <TabsContent key={value} value={value}>
            <Component />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

type TabItems = {
  value: string;
  path: string;
  label: string;
  component: React.ComponentType;
};

export const PollingSystemTabs: TabItems[] = [
  {
    value: "vote",
    path: "/polling-system/vote",
    label: "Vote",
    component: Votting,
  },
  {
    value: "Results",
    path: "/polling-system/results",
    label: "Results",
    component: Results,
  },
];
