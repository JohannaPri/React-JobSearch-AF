import { HistoricalJobs } from "../components/HistoricalJobs";

import { DiagramPresentation } from "../components/DiagramPresentation";
//import { InputSearchStatistics } from "../components/InpuSearchStatistics";

export const StatisticsApp = () => {
  // lägg contextet här runt Presentations taggarna. och använd reducern som value
  // hämta data med IJobHistoricalAd niterface com model
  /*<InputSearchStatistics />
   */

  return (
    <>
      <DiagramPresentation />
      <HistoricalJobs />
    </>
  );
};
