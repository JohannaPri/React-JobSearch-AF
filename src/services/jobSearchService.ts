import { get } from "./serviceBase"
import { IJobSearchResults } from "../models/IJobSearchResult"
import { IUserFilter } from "../models/IUserFilter"
import { TaxonomyRegions } from "../models/ITaxonomyRegion";

const BASE_URL = "https://jobsearch.api.jobtechdev.se/search?"

export const getJobs = async (userInput: IUserFilter): Promise<IJobSearchResults> => {
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
        const jobResults = await Promise.all(userInput.region.map((r) => {
            const regionQueryParam = `region=${encodeURIComponent(r)}`;
             return get<IJobSearchResults>(`${BASE_URL}${regionQueryParam}&${queryParams.join("&")}`)
        }));
        
        const combinedResult = jobResults.reduce((accumulated, currentResult) => {
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
        throw new Error("Failed to fetch jobs.");
    }
};


export const getTaxonomyRegions = async () => {
    try {
        const response = await get<TaxonomyRegions[]>('https://taxonomy.api.jobtechdev.se/v1/taxonomy/specific/concepts/region?limit=20');
        return response
    } catch (error) {
        console.log(error)
    }
}