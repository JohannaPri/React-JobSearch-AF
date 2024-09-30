import { useReducer } from "react";
import { JobsContext } from "../contexts/JobsContext";
import { jobSearchReducer } from "../reducers/jobSearchReducer";
import { InputSearch } from "../components/InputSearch";
import { Jobs } from "../components/Jobs";
import { IJobSearchResults } from "../models/IJobSearchResult";

export const JobsApp = () => {
  const storedSearch = localStorage.getItem("jobs");

  let searchedJobs: IJobSearchResults;

  if (storedSearch) {
    searchedJobs = JSON.parse(storedSearch);
  } else searchedJobs = { total: { value: 0 }, hits: [], positions: 0 };

  const [jobs, dispatch] = useReducer(jobSearchReducer, searchedJobs);

  localStorage.setItem("jobs", JSON.stringify(jobs));
  console.log(jobs);

  return (
    <>
      <JobsContext.Provider value={{ jobs, dispatch }}>
        <InputSearch />
        {storedSearch !== null && <Jobs></Jobs>}
      </JobsContext.Provider>
    </>
  );
};
