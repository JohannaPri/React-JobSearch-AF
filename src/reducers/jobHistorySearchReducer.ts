import { IJobSearchResults } from "../models/IJobSearchResult";

export interface IActionJobHistorySearch {
  type: ActionJobSearchType;
  payload: IJobSearchResults;
}

export enum ActionJobSearchType {
  SEARCH,
}

export const jobHistorySearchReducer = (
  jobs: IJobSearchResults,
  action: IActionJobHistorySearch
): IJobSearchResults => {
  switch (action.type) {
    case ActionJobSearchType.SEARCH: {
      return action.payload;
    }
    default:
      return jobs;
  }
};
