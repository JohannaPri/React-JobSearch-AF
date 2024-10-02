import { createContext, Dispatch } from "react";
import { IJobSearchResults } from "../models/IJobSearchResult";
import { IActionJobHistorySearch } from "../reducers/jobHistorySearchReducer";

type JobContextType = {
  jobs: IJobSearchResults;
  dispatch: Dispatch<IActionJobHistorySearch>;
};

export const JobsHistoryContext = createContext<JobContextType>({
  jobs: {total: {value: 0}, hits: [], positions: 0},
  dispatch: () => {
    return;
  },
});
