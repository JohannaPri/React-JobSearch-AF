import { createContext, Dispatch } from "react";
import { IUserFilter } from "../models/IUserFilter";
import { IActionJobFilter } from "../reducers/UserFilterJobReducer";


interface IUserFilterContext {
    userFilter: IUserFilter;
    filterDispatch: Dispatch<IActionJobFilter>;
}

export const UserFilterJobSearchContext = createContext<IUserFilterContext>({
    userFilter: { searchText: '',
    experience: false,
    trainee: false,
    remote: false,
    offset: 0,
    region: ['']},
    filterDispatch: () => {return;}
})