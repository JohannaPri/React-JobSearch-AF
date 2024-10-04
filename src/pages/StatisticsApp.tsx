//import { DiagramPresentation } from "../components/DiagramPresentation";
import { useReducer } from "react";
//import { HistoricalJobs } from "../components/HistoricalJobs";
import { InputSearchStatistics } from "../components/InputSearchStatistics";
import { JobsHistoryContext } from "../contexts/jobsHistoryContext";

//import { DiagramPresentation } from "../components/DiagramPresentation";
// import { DiagramWrapper } from "../components/styled/Wrappers";
import { jobHistorySearchReducer } from "../reducers/jobHistorySearchReducer";

export const StatisticsApp = () => {
  localStorage.clear();
  const [jobs, dispatch] = useReducer(jobHistorySearchReducer, {
    total: { value: 0 },
    positions: 0,
  });

  return (
    <div className="jobs-app-container">
      <JobsHistoryContext.Provider value={{ jobs, dispatch }}>
        <InputSearchStatistics />
        {/* <DiagramWrapper>
          
          {jobs.total.value > 0 && <DiagramPresentation></DiagramPresentation>}
        </DiagramWrapper> */}
      </JobsHistoryContext.Provider>
    </div>
  );
};
