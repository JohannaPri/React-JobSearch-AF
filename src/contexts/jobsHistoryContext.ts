import { createContext, Dispatch } from "react";
import { IActionJobHistorySearch } from "../reducers/jobHistorySearchReducer";
import { IHistoricalSearchResult } from "../models/IHistoricalSearchResults";

type JobContextType = {
  jobs: IHistoricalSearchResult;
  dispatch: Dispatch<IActionJobHistorySearch>;
};

export const JobsHistoryContext = createContext<JobContextType>({
  jobs: {total: {value: 0}, positions: 0},
  dispatch: () => {
    return;
  },
});
