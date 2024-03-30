// layouts
import MainLayout from "@/layouts";

// error pages
import Error404 from "@/pages/error/404";

// main pages
import Home from "@/pages/home";
import RiskInvestigationInput from "@/pages/riskInvestigationInput";
import RiskInvestigationOutput from "@/pages/riskInvestigationOutput";

const Routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/riskinvestigationinput",
        element: <RiskInvestigationInput />,
      },
      {
        path: "/riskinvestigationoutput",
        element: <RiskInvestigationOutput />,
      },
    ],
  },
  {
    path: "*", // go to 404 error page when cannot find route
    element: <Error404 />,
  },
];

export default Routes;
