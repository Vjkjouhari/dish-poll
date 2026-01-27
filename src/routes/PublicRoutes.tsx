import LoginPage from "@/modules/auth/LoginPage";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoutes() {
  const isauthenticated = true;

  return {
    path: "/auth",
    element: isauthenticated ? <Navigate to="/" replace /> : <PublicLayout />,
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
