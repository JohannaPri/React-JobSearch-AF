import {
  DigiBarChart,
  DigiLayoutContainer,
} from "@digi/arbetsformedlingen-react";

import { ChartLineData } from "@digi/arbetsformedlingen/dist/types/interfaces";
import { useContext } from "react";
import { JobsHistoryContext } from "../contexts/jobsHistoryContext";
import { InfoCardHeadingLevel } from "@digi/arbetsformedlingen";

export const DiagramPresentation = () => {
  const { jobs } = useContext(JobsHistoryContext);

  const chartData: ChartLineData = {
    data: {
      xValues: [2020, 2021],
      series: [{ yValues: [10, 20], title: "Antal Jobb" }],
    },
    x: "År",
    y: "Antal Jobb",
    title: "Diagram",
  };
  console.log(chartData);
  return (
    <>
      <DigiLayoutContainer>
        <DigiBarChart
          afHeadingLevel={InfoCardHeadingLevel.H2}
          afChartData={chartData}
        ></DigiBarChart>
      </DigiLayoutContainer>
    </>
  );
};
