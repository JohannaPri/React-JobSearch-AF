import { createContext, Dispatch } from "react";
import { IJobSearchResults } from "../models/IJobSearchResult";
import { IActionJobSearch } from "../reducers/jobSearchReducer";

type JobContextType = {
  jobs: IJobSearchResults[];
  dispatch: Dispatch<IActionJobSearch>;
};

export const JobsContext = createContext<JobContextType>({
  jobs: [],
  dispatch: () => {
    return;
  },
});
