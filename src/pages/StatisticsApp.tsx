//import { DiagramPresentation } from "../components/DiagramPresentation";
import { useReducer } from "react";
import { HistoricalJobs } from "../components/HistoricalJobs";
import { InputSearchStatistics } from "../components/InpuSearchStatistics";
import { JobsHistoryContext } from "../contexts/jobsHistoryContext";
import { jobSearchReducer } from "../reducers/jobSearchReducer";
//import { InputSearchStatistics } from "../components/InpuSearchStatistics";

export const StatisticsApp = () => {
  // lägg contextet här runt Presentations taggarna. och använd reducern som value

  // hämta data med IJobHistoricalAd niterface com model

  /*<InputSearchStatistics />
      <DiagramPresentation />*/

  const [jobs, dispatch] = useReducer(jobSearchReducer, {
    total: { value: 0 },
    hits: [],
    positions: 0,
  });

  return (
    <>
      <JobsHistoryContext.Provider value={{ jobs, dispatch }}>
        <InputSearchStatistics />
        <HistoricalJobs />
      </JobsHistoryContext.Provider>
    </>
  );
};
