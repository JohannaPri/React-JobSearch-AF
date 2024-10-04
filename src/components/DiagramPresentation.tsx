import { DigiBarChart } from "@digi/arbetsformedlingen-react";

import { ChartLineData } from "@digi/arbetsformedlingen/dist/types/interfaces";
import { useContext } from "react";
import { JobsHistoryContext } from "../contexts/jobsHistoryContext";
import { BarChartVariation } from "@digi/arbetsformedlingen";

export const DiagramPresentation = () => {
  const { totalJobs } = useContext(JobsHistoryContext);

  console.log(totalJobs);
  const chartData: ChartLineData = {
    data: {
      xValues: [],
      series: [{ yValues: [], title: "Antal Jobb", colorToken: "black" }],
      xValueNames: [],
    },
    x: "År",
    y: "Antal Jobb",
    title: "Diagram",
    subTitle: "diagram",
    infoText: "diagram över historiska jobb",
    meta: {
      numberOfReferenceLines: 50,
      percentage: false,
      hideXAxis: false,
      valueLabels: false,
      labelProperties: {
        significantDigits: 2,
        shortHand: false,
      },
    },
  };

  return (
    <>
      <div
        className="bar-container"
        style={{ width: "500px", height: "400px" }}
      >
        <DigiBarChart
          afHeadingLevel="h2"
          afChartData={chartData}
          afVariation={BarChartVariation.Vertical}
        ></DigiBarChart>
      </div>
    </>
  );
};
