import LoginPage from "@/modules/auth/LoginPage";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoutes(isAuthenticated: boolean) {
  return {
    path: "/auth",
    element: isAuthenticated ? <Navigate to="/" replace /> : <PublicLayout />,
    children: [{ path: "login", element: <LoginPage /> }],
  };
}

const PublicLayout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};
