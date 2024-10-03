//import { DiagramPresentation } from "../components/DiagramPresentation";
import { useReducer } from "react";
import { HistoricalJobs } from "../components/HistoricalJobs";
import { InputSearchStatistics } from "../components/InputSearchStatistics";
import { JobsHistoryContext } from "../contexts/jobsHistoryContext";
import { jobSearchReducer } from "../reducers/jobSearchReducer";

import { DiagramPresentation } from "../components/DiagramPresentation";

export const StatisticsApp = () => {
  const [jobs, dispatch] = useReducer(jobSearchReducer, {
    total: { value: 0 },
    hits: [],
    positions: 0,
  });

  return (
    <>
      <JobsHistoryContext.Provider value={{ jobs, dispatch }}>
        <InputSearchStatistics />
        {jobs.total.value > 0 && <DiagramPresentation></DiagramPresentation>}
        <HistoricalJobs />
      </JobsHistoryContext.Provider>
    </>
  );
};
