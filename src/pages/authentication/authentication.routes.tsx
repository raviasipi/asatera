import { RouteObject } from "react-router-dom";
import Authentication from "./Authentication";

type CustomRouteObject = RouteObject & {
  auth: string;
};

const authenticationRoutes: CustomRouteObject[] = [
  {
    path: "/login",
    element: <Authentication />,
    auth: "fef",
  },
];

export default authenticationRoutes