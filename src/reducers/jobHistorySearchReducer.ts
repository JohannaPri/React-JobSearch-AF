import { IJobSearchResults } from "../models/IJobSearchResult";

export interface IActionJobSearch {
  type: ActionJobSearchType;
  payload: IJobSearchResults;
}

export enum ActionJobSearchType {
  SEARCH,
}

export const jobHistorySearchReducer = (
  jobs: IJobSearchResults,
  action: IActionJobSearch
): IJobSearchResults => {
  switch (action.type) {
    case ActionJobSearchType.SEARCH: {
      return action.payload;
    }
    default:
      return jobs;
  }
};
