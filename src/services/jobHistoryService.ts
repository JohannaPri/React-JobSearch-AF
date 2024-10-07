// import { get } from "./serviceBase";
// import { IHistoricalSearchFilter } from "../models/IHistoricalSearchFilter";
// import { IHistoricalSearchResult } from "../models/IHistoricalSearchResults";

// const BASE_URL = "https://historical.api.jobtechdev.se/search?";

// export const getHistoricalJobs = async (
//   userInput: IHistoricalSearchFilter
// ): Promise<IHistoricalSearchResult[]> => {
 
//   const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
//   const yearFrom = userInput.dateFrom.getFullYear();
//   const yearTo = userInput.dateTo.getFullYear();



//   const filteredYears = years.filter(
//     (year) => year >= yearFrom && year <= yearTo
//   );

//   const promises = filteredYears.map(async (year) => {
//     const queryParams: string[] = [];

//     // Add search text to query params if present
//     if (userInput.searchText) {
//       queryParams.push(`q=${encodeURIComponent(userInput.searchText)}`);
//     }
//     // Add dateFrom to query params
//     if (userInput.dateFrom) {
//       queryParams.push(
//         `historical-from=${encodeURIComponent(year)}T00%3A00%3A01`
//       );
//     }
//     // Add dateTo to query params, without incrementing year incorrectly
//     if (userInput.dateTo) {
//       queryParams.push(
//         `historical-to=${encodeURIComponent(year)}T23%3A59%3A59`
//       );
//     }

//     // Add limit
//     queryParams.push("limit=10");

//     // Construct the final URL
//     const finalUrl = `${BASE_URL}${queryParams.join("&")}`;
  
//     // Return the promise from getData, which resolves with the data
//     return getData(finalUrl);
//   });
//   const finalData = await Promise.all(promises);
//   console.log(finalData); 

// const getData = async (finalUrl:string): Promise<IHistoricalSearchResult[]> => {
//   try {
//     const response = await get<IHistoricalSearchResult[]>(`${finalUrl}`);
//     return response // Spread the array if it's an array
    
//   } catch (error) {
//     console.log(error);
//   }
// }
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

 
  for (const year of filteredYears) {
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
        `historical-to=${encodeURIComponent(year + 1)}T00%3A00%3A01`
      ); // year + 1 instead of modifying the year variable directly
    }

    queryParams.push("limit=10");

    const finalUrl = `${BASE_URL}${queryParams.join("&")}`;
  
    // Await the data fetching for each year
    await getData(year, finalUrl, finalData);
  }

  return finalData;
};

const getData = async (year: number, finalUrl: string, finalData: IHistoricalSearchResult[]) => {
  try {
    const response = await get<IHistoricalSearchResult>(`${finalUrl}`);
    finalData.push({ key: year, total: response.total, positions: response.positions });
  } catch (error) {
    console.log(error);
  }
}
