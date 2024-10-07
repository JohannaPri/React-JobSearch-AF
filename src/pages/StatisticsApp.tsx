import { useReducer } from "react";
import { InputSearchStatistics } from "../components/InputSearchStatistics";
import { JobsHistoryContext } from "../contexts/jobsHistoryContext";
import { DiagramPresentation } from "../components/DiagramPresentation";

import { jobHistorySearchReducer } from "../reducers/jobHistorySearchReducer";
import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";

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
        {totalJobs.length > 1 && (
          <DigiLayoutContainer>
            <DiagramPresentation></DiagramPresentation>
          </DigiLayoutContainer>
        )}
      </JobsHistoryContext.Provider>
    </div>
  );
};
