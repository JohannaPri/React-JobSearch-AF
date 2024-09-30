import { DiagramPresentation } from "../components/DiagramPresentation";
import { HistoricalJobsPresentation } from "../components/HistoricalJobsPresentation";
import { InputSearchStatistics } from "../components/InpuSearchStatistics";

export const StatisticsApp = () => {

  // lägg contextet här runt Presentations taggarna. och använd reducern som value
  return <>
      <InputSearchStatistics />
      <DiagramPresentation />
      <HistoricalJobsPresentation />
  </>;
};
