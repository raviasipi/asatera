import { RouteObject } from "react-router-dom";
import Home from "./Home";

type CustomRouteObject = RouteObject & {
  auth: string;
};

const homeRoutes: CustomRouteObject[] = [
  {
    path: "/home",
    element: <Home />,
    auth: "fef",
  },
];

export default homeRoutes