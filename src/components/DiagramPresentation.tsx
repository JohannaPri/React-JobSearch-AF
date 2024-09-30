import {
  DigiBarChart,
  DigiLayoutContainer,
} from "@digi/arbetsformedlingen-react";
import { ChartLineData } from "@digi/arbetsformedlingen/dist/types/interfaces";

export const DiagramPresentation = () => {
  // använd contextet
  const mockData = {
    total: {
      value: 492750,
    },
    positions: 1004895,
    query_time_in_millis: 67,
    result_time_in_millis: 81,
    stats: [],
    freetext_concepts: {},
    hits: [],
  };

  const chartData: ChartLineData = {
    data: {
      xValues: [2020, 2021],
      series: [{ yValues: [mockData.total.value, 20], title: "Antal Jobb" }],
    },
    x: "År",
    y: "Antal Jobb",
    title: "Diagram",
  };
  return (
    <>
      <DigiLayoutContainer>
        <DigiBarChart afChartData={chartData}></DigiBarChart>
      </DigiLayoutContainer>
    </>
  );
};
