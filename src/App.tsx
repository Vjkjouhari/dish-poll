import PrivateLayout from "./modules/privateLayout/PrivateLayout";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import { NotFound } from "./modules/NotFound";

function App() {
  const isAuthenticated = !!localStorage.getItem("auth_token");
  const router = createBrowserRouter([
    PublicRoutes(isAuthenticated),
    {
      path: "/",
      element: isAuthenticated ? (
        <PrivateLayout
          onLogout={() => {
            localStorage.removeItem("auth_token");
            localStorage.removeItem("user_name");
            window.location.reload();
          }}
        />
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
