import PrivateLayout from "./modules/privateLayout/PrivateLayout";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  const isAuthenticated = true;

  const router = createBrowserRouter([
    PublicRoutes(),
    {
      path: "/",
      element: isAuthenticated ? (
        <PrivateLayout />
      ) : (
        <Navigate to="/auth/login" replace />
      ),
      children: PrivateRoutes(),
    },
    { path: "*", element: <NotFound /> },
    { path: "/loading", element: <div>Loading...</div> },
  ]);

  return <RouterProvider router={router} />;
}
export default App;

function NotFound() {
  return <div>404 - Not Found</div>;
}
