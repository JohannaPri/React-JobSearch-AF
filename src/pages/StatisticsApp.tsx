import { useReducer } from "react";
import { InputSearchStatistics } from "../components/InputSearchStatistics";
import { JobsHistoryContext } from "../contexts/jobsHistoryContext";
import { DiagramPresentation } from "../components/DiagramPresentation";
import { DiagramWrapper } from "../components/styled/Wrappers";
import { jobHistorySearchReducer } from "../reducers/jobHistorySearchReducer";

export const StatisticsApp = () => {
  localStorage.clear();
  const [totalJobs, dispatch] = useReducer(jobHistorySearchReducer, [
    {
      key: 0,
      total: { value: 0 },
      positions: 0,
    },
  ]);

  return (
    <div className="jobs-app-container">
      <JobsHistoryContext.Provider value={{ totalJobs, dispatch }}>
        <InputSearchStatistics />
        {
          <DiagramWrapper>
            <DiagramPresentation></DiagramPresentation>
          </DiagramWrapper>
        }
      </JobsHistoryContext.Provider>
    </div>
  );
};
