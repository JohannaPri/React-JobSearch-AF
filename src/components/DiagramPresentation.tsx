import {
  DigiBarChart,
  DigiLayoutContainer,
} from "@digi/arbetsformedlingen-react";

import { ChartLineData } from "@digi/arbetsformedlingen/dist/types/interfaces";
import { useContext } from "react";
import { JobsHistoryContext } from "../contexts/jobsHistoryContext";
import { BarChartVariation } from "@digi/arbetsformedlingen";

export const DiagramPresentation = () => {
  const { jobs } = useContext(JobsHistoryContext);

  const chartData: ChartLineData = {
    data: {
      xValues: [2019, 2020, 2021],
      series: [
        { yValues: [50, 10, 20], title: "Antal Jobb", colorToken: "black" },
      ],
      xValueNames: ["2019", "2020", "2021"],
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
  console.log(chartData);
  return (
    <>
      <DigiLayoutContainer>
        <div style={{ width: "400px", height: "400px" }}>
          <DigiBarChart
            afHeadingLevel="h2"
            afChartData={chartData}
            afVariation={BarChartVariation.Vertical}
          ></DigiBarChart>
        </div>
      </DigiLayoutContainer>
    </>
  );
};
