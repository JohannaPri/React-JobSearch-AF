import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./pages/Layout";
import { Start } from "./pages/Start";
import { JobsApp } from "./pages/JobsApp";
import { Job } from "./components/Job";
import { StatisticsApp } from "./pages/StatisticsApp";

export const repo = "/case-af-team-3-1/";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
          path: "/",
          element: <Start></Start>,
        },
        {
          path: "/searchjobs",
          element: <JobsApp></JobsApp>,
        },
        {
          path: "/searchjob/:id",
          element: <Job></Job>,
        },
        {
          path: "/searchstatistics",
          element: <StatisticsApp></StatisticsApp>,
        },
      ],
    },
  ],
  { basename: repo }
);
