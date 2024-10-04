import { useReducer } from "react";
import { JobsContext } from "../contexts/JobsContext";
import { jobSearchReducer } from "../reducers/jobSearchReducer";
import { InputSearch } from "../components/InputSearch";
import { Jobs } from "../components/Jobs";
import { IJobSearchResults } from "../models/IJobSearchResult";
import { UserFilterReducer } from "../reducers/UserFilterJobReducer";
import { UserFilterJobSearchContext } from "../contexts/UserFilterJobSearchContext";
import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";

export const JobsApp = () => {
  const storedSearch = localStorage.getItem("jobs");

  let searchedJobs: IJobSearchResults;

  if (storedSearch) {
    searchedJobs = JSON.parse(storedSearch);
  } else searchedJobs = { total: { value: 0 }, hits: [], positions: 0 };

  const [jobs, dispatch] = useReducer(jobSearchReducer, searchedJobs);
  const [userFilter, filterDispatch] = useReducer(UserFilterReducer, {
    searchText: "",
    experience: false,
    trainee: false,
    remote: false,
    region: [],
    offset: 0,
  });

  localStorage.setItem("jobs", JSON.stringify(jobs));
  console.log(jobs);

  return (
    <DigiLayoutContainer>
      <JobsContext.Provider value={{ jobs, dispatch }}>
        <UserFilterJobSearchContext.Provider
          value={{ userFilter, filterDispatch }}
        >
          <InputSearch />
          {storedSearch !== null && <Jobs></Jobs>}
        </UserFilterJobSearchContext.Provider>
      </JobsContext.Provider>
    </DigiLayoutContainer>
  );
};
