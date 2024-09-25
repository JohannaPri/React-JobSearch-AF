import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter ({
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
                path: "/searchjobs"
                element: <SearchJobsApp></SearchJobsApp>,
            },
            {
               path: "/searchjob/:id",
               element: <JobDescription></JobDescription>,
            },
            {
                path: "/searchstatistics",
                element: <SearchStatisticApp></SearchStatisticApp>,
            },
            {
                path: "/searchstatistic/:id",
                element: <StatisticDescription></StatisticDescription>
            },
        ]
    }
});