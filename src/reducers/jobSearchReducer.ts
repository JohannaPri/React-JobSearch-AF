import { IJobSearchResults } from "../models/IJobSearchResult";

interface IActionJobSearch {
    type: ActionJobSearchType;
    payload: IJobSearchResults[]
}

export enum ActionJobSearchType {
    SEARCH
}

export const jobSearchReducer = (jobs: IJobSearchResults[], action: IActionJobSearch): IJobSearchResults[] => {

    switch (action.type) {
        case ActionJobSearchType.SEARCH: {
            return action.payload
        }
        default: 
            return jobs
    }
}