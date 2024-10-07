import { DigiBarChart } from "@digi/arbetsformedlingen-react";

import { ChartLineData } from "@digi/arbetsformedlingen/dist/types/interfaces";
import { useContext } from "react";
import { JobsHistoryContext } from "../contexts/jobsHistoryContext";
import { BarChartVariation } from "@digi/arbetsformedlingen";

export const DiagramPresentation = () => {
  const { totalJobs } = useContext(JobsHistoryContext);
  console.log("sorted jobs", totalJobs);

  if (!totalJobs || totalJobs.length === 0) {
    return <div>No data available</div>;
  }

  totalJobs.sort((a, b) => a.key - b.key);

  const chartData: ChartLineData = {
    data: {
      xValues: totalJobs.map((k) => k.key),
      series: [
        {
          yValues: totalJobs.map((k) => k.total.value),
          title: "Antal Jobb",
          colorToken: "black",
        },
      ],
      xValueNames: totalJobs.map((k) => k.key.toString()),
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
