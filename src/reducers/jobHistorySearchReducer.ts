import { IHistoricalSearchResult } from "../models/IHistoricalSearchResults";

export interface IActionJobHistorySearch {
  type: ActionJobSearchType;
  payload: IHistoricalSearchResult;
}

export enum ActionJobSearchType {
  SEARCH,
}

export const jobHistorySearchReducer = (
  jobs: IHistoricalSearchResult,
  action: IActionJobHistorySearch
): IHistoricalSearchResult => {
  switch (action.type) {
    case ActionJobSearchType.SEARCH: {
      return action.payload;
    }
    default:
      return jobs;
  }
};
