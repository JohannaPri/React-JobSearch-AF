export interface IActionStatisticSearch {
    type: ActionStatisticSearchType;
    payload: boolean
}

export enum ActionStatisticSearchType {
    TOGGLE
  }

export const showStatisticReducer = (display: boolean, action: IActionStatisticSearch): boolean => {

    switch (action.type) {
        case ActionStatisticSearchType.TOGGLE: {
            return action.payload
        }
        default: {
            return display
        }
    }
    

}