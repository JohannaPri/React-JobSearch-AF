import { get } from "./serviceBase";
import { IHistoricalSearchFilter } from "../models/IHistoricalSearchFilter";
import { IHistoricalSearchResult } from "../models/IHistoricalSearchResults";

const BASE_URL = "https://historical.api.jobtechdev.se/search?";

export const getHistoricalJobs = async (
  userInput: IHistoricalSearchFilter
): Promise<IHistoricalSearchResult[]> => {
 
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
  const yearFrom = userInput.dateFrom.getFullYear();
  const yearTo = userInput.dateTo.getFullYear();

  const finalData: IHistoricalSearchResult[] = [];


  const filteredYears = years.filter(
    (year) => year >= yearFrom && year <= yearTo
  );


  filteredYears.map((year) => {
    const queryParams: string[] = [];

    if (userInput.searchText) {
      queryParams.push(`q=${encodeURIComponent(userInput.searchText)}`);
    }
    if (userInput.dateFrom) {
      queryParams.push(
        `historical-from=${encodeURIComponent(year)}T00%3A00%3A01`
      );
    }
    if (userInput.dateTo) {
      queryParams.push(
        `historical-to=${encodeURIComponent(++year)}T00%3A00%3A01`
      );
    }

    queryParams.push("limit=10");

    const finalUrl = `${BASE_URL}${queryParams.join("&")}`;
  
    getData(year, finalUrl, finalData)
  });


  return finalData;
};

const getData = async (year:number,finalUrl:string, finalData: IHistoricalSearchResult[]) => {
  try {
    const response = await get<IHistoricalSearchResult>(`${finalUrl}`);
    finalData.push({key: year-1,  total: response.total, positions: response.positions })
  } catch (error) {
    console.log(error);
  }
}