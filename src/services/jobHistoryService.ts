import { get } from "./serviceBase"
import { IJobSearchResults } from "../models/IJobSearchResult"
import { IHistoryUserFilter } from "../models/IHistoryUserFilter"

const BASE_URL = "https://historical.api.jobtechdev.se/search?"

export const getHistoricalJobs = async(userInput: IHistoryUserFilter): Promise<IJobSearchResults> => {
    const queryParams: string[] = [];

    if (userInput.searchText) {
        queryParams.push(`q=${encodeURIComponent(userInput.searchText)}`);
    }

    if (userInput.dateFrom) {
        queryParams.push(`historical-from=${encodeURIComponent(userInput.dateFrom)}T00%3A00%3A00`);
    }
    if (userInput.dateTo) {
        queryParams.push(`historical-to=${encodeURIComponent(userInput.dateTo)}T00%3A00%3A00`);
    }

    queryParams.push("limit=5");

    const finalUrl = `${BASE_URL}${queryParams.join("&")}`

    try {
        const response = await get<IJobSearchResults>(finalUrl);
        return response
    } catch (error) {
       console.log(error)
        throw new Error("Failed to fetch historical jobs.");
    }

    
};