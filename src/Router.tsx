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
                element: <JobsApp></JobsApp>,
            },
            {
               path: "/searchjob/:id",
               element: <Job></Job>,
            },
            {
                path: "/searchstatistics",
                element: <StatistiscApp></StatisticsApp>,
            },
            {
                path: "/searchstatistic/:id",
                element: <Statistic></Statistic>
            },
        ]
    }
});