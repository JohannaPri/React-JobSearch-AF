import { DigiBarChart } from "@digi/arbetsformedlingen-react";

import { ChartLineData } from "@digi/arbetsformedlingen/dist/types/interfaces";
import { useContext } from "react";
import { JobsHistoryContext } from "../contexts/jobsHistoryContext";
import { BarChartVariation } from "@digi/arbetsformedlingen";

export const DiagramPresentation = () => {
  const { totalJobs } = useContext(JobsHistoryContext);

  totalJobs.sort((a, b) => a.key - b.key);

  console.log("sorted jobs", totalJobs);

  const numberYears = totalJobs.map((k) => k.key);
  const stringYears = totalJobs.map((k) => k.key.toString());
  const totalHistory = totalJobs.map((k) => k.total.value);

  console.log("numberYears", numberYears);

  const chartData: ChartLineData = {
    data: {
      xValues: numberYears,
      series: [
        { yValues: totalHistory, title: "Antal Jobb", colorToken: "black" },
      ],
      xValueNames: stringYears,
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
