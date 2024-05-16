import authenticationRoutes from "../pages/authentication/authentication.routes";
import AuthGuard from "../services/guards/AuthGuard";
import ReAuthGuard from "../services/guards/ReAuthGuard";
import { RouteObject, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import AuthLayout from "../layout/AuthLayout";
import homeRoutes from "../pages/home/home.routes";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "*",
    element: <h1>No page found</h1>,
  },
  {
    element:(
        <ReAuthGuard>
            <AuthLayout />
        </ReAuthGuard>
    ),
    children:[
        ...authenticationRoutes
    ]
  },
  {
    element:(
        <AuthGuard>
            <Layout />
        </AuthGuard>
    ),
    children : [
        ...homeRoutes,
    ]
  }
];

export default routes;