import { get } from "./serviceBase";
import { IHistoricalSearchFilter } from "../models/IHistoricalSearchFilter";
import { IHistoricalSearchResult } from "../models/IHistoricalSearchResults";

const BASE_URL = "https://historical.api.jobtechdev.se/search?";

// array med daturm 2016-2023
//plocka ut vilka datum som är sökta på från filtret ur datumArrayn

// hämta ett resulat per datum

//lägga resultatet i en lista med keys för vilket datum det är

export const getHistoricalJobs = async (
  userInput: IHistoricalSearchFilter
): Promise<IHistoricalSearchResult> => {
  const queryParams: string[] = [];
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
  const yearFrom = userInput.dateFrom.getFullYear();
  const yearTo = userInput.dateTo.getFullYear();

  const finalData: IHistoricalSearchResult[] = [];


  const filteredYears = years.filter(
    (year) => year >= yearFrom && year <= yearTo
  );
  if (userInput.searchText) {
    queryParams.push(`q=${encodeURIComponent(userInput.searchText)}`);
  }

  filteredYears.map((year) => {
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
    console.log(finalUrl)
    getData(finalUrl, finalData)
  });

  console.log(finalData)

  return { total: { value: 0 }, positions: 0 };
};

const getData = async (finalUrl:string, finalData: IHistoricalSearchResult[]) => {

  try {
    const response = await get<IHistoricalSearchResult>(`${finalUrl}`);
    finalData.push(response)
  } catch (error) {
    console.log(error);
  }
}