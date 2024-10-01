import { get } from "./serviceBase"
import { IJobSearchResults } from "../models/IJobSearchResult"
import { IUserFilter } from "../models/IUserFilter"

const BASE_URL = "https://historical.api.jobtechdev.se/search?"

export const getHistoricalJobs = async(userInput: IUserFilter): Promise<IJobSearchResults> => {
    const queryParams: string[] = [];

    if (userInput.searchText) {
        queryParams.push(`q=${encodeURIComponent(userInput.searchText)}`);
    }
    if (userInput.experience) {
        queryParams.push("experience=true");
    }
    if (userInput.trainee) {
        queryParams.push("trainee=true");
    }
    if (userInput.remote) {
        queryParams.push("remote=true");
    }
    queryParams.push("limit=5");

    if (userInput.region && userInput.region.length > 0) {
        const historicalJobResults = await Promise.all(userInput.region.map((r) => {
            const regionQueryParam = `region=${encodeURIComponent(r)}`;
             return get<IJobSearchResults>(`${BASE_URL}${regionQueryParam}&${queryParams.join("&")}`)
        }));

        const combinedResult = historicalJobResults.reduce((accumulated, currentResult) => {
            accumulated.hits = [...accumulated.hits, ...currentResult.hits];

            accumulated.total.value += currentResult.total.value;

            accumulated.positions += currentResult.positions;
            
            return accumulated;
        }, { hits: [], total: { value: 0 }, positions: 0 } as IJobSearchResults);
        return combinedResult
    } 
    const finalUrl = `${BASE_URL}${queryParams.join("&")}`

    try {
        const response = await get<IJobSearchResults>(finalUrl);
        return response
    } catch (error) {
       console.log(error)
        throw new Error("Failed to fetch historical jobs.");
    }

    
};