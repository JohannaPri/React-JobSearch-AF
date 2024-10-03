import { IUserFilter } from "../models/IUserFilter";


export interface IActionJobFilter {
    type: ActionUserFilterType,
    payload: IUserFilter,
}

export enum ActionUserFilterType {
    CHANGE_PAGE
}
export const UserFilterReducer = (filter: IUserFilter, action: IActionJobFilter): IUserFilter => {
    
    switch (action.type) {
        case ActionUserFilterType.CHANGE_PAGE: {
            return action.payload
        }
        default: return filter
    }

  
}