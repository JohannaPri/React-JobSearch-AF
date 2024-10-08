import { createContext, Dispatch } from "react";
import { IActionJobHistorySearch } from "../reducers/jobHistorySearchReducer";
import { IHistoricalSearchResult } from "../models/IHistoricalSearchResults";

type JobContextType = {
  totalJobs: IHistoricalSearchResult[];
  dispatch: Dispatch<IActionJobHistorySearch>;
};

export const JobsHistoryContext = createContext<JobContextType>({
  totalJobs: [{key: 0, total: { value: 0 }, positions: 0 }],
  dispatch: () => {
    return;
  },
});
