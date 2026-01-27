const Vote = () => <div>Vote Page</div>;
const Results = () => <div>Results Page</div>;

export default function PrivateRoutes() {
  return [
    { index: true, element: <Dashboard /> },
    { path: "vote", element: <Vote /> },
    { path: "results", element: <Results /> },
  ];
}

export const Dashboard = () => {
  return <div>Private Dashboard</div>;
};
