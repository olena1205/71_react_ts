import type { RoutePage } from "./types";
import Home from "pages/Home/Home";
import About from "pages/About/About";
import Users from "pages/Users/Users";
import User from "pages/Users/components/User/User";
import Lesson14 from "lessons/Lesson14/Lesson14";
// import Clients from "pages/Clients/Clients";
// import Amazon from "pages/Clients/components/Amazon/Amazon";
// import Facebook from "pages/Clients/components/Facebook/Facebook";
// import Google from "pages/Clients/components/Google/Google";

export const routesData: RoutePage[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/users", element: <Users /> },
  { path: "/users/user", element: <User /> },
  //   { path: "/clients", element: <Clients /> },
  //   { path: "/clients/amazon", element: <Amazon /> },
  //   { path: "/clients/facebook", element: <Facebook /> },
  //   { path: "/clients/google", element: <Google /> },
  { path: "/lesson14", element: <Lesson14 /> },
  { path: "*", element: "Page not found" },
];
