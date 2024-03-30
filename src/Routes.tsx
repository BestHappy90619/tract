// layouts
import MainLayout from "@/layouts";

// error pages
import Error404 from "@/pages/error/404";

// main pages
import Home from "@/pages/home";

const Routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*", // go to 404 error page when cannot find route
    element: <Error404 />,
  },
];

export default Routes;
