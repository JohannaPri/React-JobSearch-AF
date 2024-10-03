import {
  DigiBarChart,
  DigiLayoutContainer,
} from "@digi/arbetsformedlingen-react";

import { ChartLineData } from "@digi/arbetsformedlingen/dist/types/interfaces";
import { useContext } from "react";
import { JobsHistoryContext } from "../contexts/jobsHistoryContext";
import { BarChartVariation } from "@digi/arbetsformedlingen";
import { IJobAd } from "../models/IJobAd";

export const DiagramPresentation = () => {
  const { jobs } = useContext(JobsHistoryContext);

  const groupedByYear = jobs.hits.reduce(
    (acc: { [key: string]: IJobAd[] }, current: IJobAd) => {
      const year = current.publication_date?.split("-")[0]
        ? new Date(current.publication_date).getFullYear()
        : 0;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(current);
      return acc;
    },
    {}
  );

  const stringYears = Object.keys(groupedByYear);
  const numberYears = Object.keys(groupedByYear).map((year) => +year);
  const values = numberYears.map((year) => groupedByYear[year].length);

  console.log(values);

  const chartData: ChartLineData = {
    data: {
      xValues: numberYears,
      series: [{ yValues: values, title: "Antal Jobb", colorToken: "black" }],
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
      <DigiLayoutContainer>
        <div
          className="bar-container"
          style={{ width: "700px", height: "400px" }}
        >
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
