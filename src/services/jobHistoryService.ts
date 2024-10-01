import { get } from "./serviceBase"
import { IJobSearchResults } from "../models/IJobSearchResult"
import { IHistoryUserFilter } from "../models/IHistoryUserFilter"

const BASE_URL = "https://historical.api.jobtechdev.se/search?"

export const getHistoricalJobs = async(userInput: IHistoryUserFilter): Promise<IJobSearchResults> => {
    const queryParams: string[] = [];

    const formatDate = (date: Date): string => {
        return date.toISOString().split('T')[0];
    };

    if (userInput.searchText) {
        queryParams.push(`q=${encodeURIComponent(userInput.searchText)}`);
    }

    if (userInput.dateFrom) {
        const formattedDateFrom = formatDate(userInput.dateFrom);
        queryParams.push(`historical-from=${encodeURIComponent(formattedDateFrom)}T00%3A00%3A01`);
    }
    if (userInput.dateTo) {
        const formattedDateTo = formatDate(userInput.dateTo);
        queryParams.push(`historical-to=${encodeURIComponent(formattedDateTo)}T00%3A00%3A01`);
    }

    queryParams.push("limit=5");

    const finalUrl = `${BASE_URL}${queryParams.join("&")}`
    //Konsol logg för att testa URL:en
    //console.log("API URL:", finalUrl);

    try {
        const response = await get<IJobSearchResults>(finalUrl);
        return response
    } catch (error) {
       console.log(error)
        throw new Error("Failed to fetch historical jobs.");
    }

    
};