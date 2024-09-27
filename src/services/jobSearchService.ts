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
    if (userInput.region.length > 0){
        queryParams.push(`region=${userInput.region}`)
    }

    queryParams.push("limit=5");

    const finalUrl = `${BASE_URL}${queryParams.join("&")}`;

    try {
        const response = await get<IJobSearchResults>(finalUrl);
        return response.data;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw new Error("Failed to fetch jobs.");
    }
};



export const getTaxonomyRegions = async () => {
    try {
        const response = await get<TaxonomyRegions[]>('https://taxonomy.api.jobtechdev.se/v1/taxonomy/specific/concepts/region?limit=20');
        return response.data
    } catch (error) {
        console.log(error)
    }
}