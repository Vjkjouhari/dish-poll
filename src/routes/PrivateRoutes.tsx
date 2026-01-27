import PollingSystem from "@/modules/PollingSystem";

export default function PrivateRoutes() {
  return [{ index: true, element: <PollingSystem /> }];
}

export const Dashboard = () => {
  return <div>Private Dashboard</div>;
};
