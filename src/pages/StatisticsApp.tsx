//import { DiagramPresentation } from "../components/DiagramPresentation";
import { useReducer } from "react";
import { HistoricalJobs } from "../components/HistoricalJobs";
import { InputSearchStatistics } from "../components/InputSearchStatistics";
import { JobsHistoryContext } from "../contexts/jobsHistoryContext";
import { jobSearchReducer } from "../reducers/jobSearchReducer";

import { DiagramPresentation } from "../components/DiagramPresentation";
import { DiagramWrapper } from "../components/styled/Wrappers";

export const StatisticsApp = () => {
  localStorage.clear();
  const [jobs, dispatch] = useReducer(jobSearchReducer, {
    total: { value: 0 },
    hits: [],
    positions: 0,
  });

  return (
    <div className="jobs-app-container">
      <JobsHistoryContext.Provider value={{ jobs, dispatch }}>
        <DiagramWrapper>
          <InputSearchStatistics />
          {jobs.total.value > 0 && <DiagramPresentation></DiagramPresentation>}
        </DiagramWrapper>

        <HistoricalJobs />
      </JobsHistoryContext.Provider>
    </div>
  );
};
