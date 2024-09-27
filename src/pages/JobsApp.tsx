import { useReducer } from "react";
import { JobsContext } from "../contexts/JobsContext";
import { jobSearchReducer } from "../reducers/jobSearchReducer";
import { InputSearch } from "../components/InputSearch";
import { Jobs } from "../components/Jobs";



export const JobsApp = () => {
  const [jobs, dispatch] = useReducer(jobSearchReducer, {total: {value: 0}, hits: [], positions: 0});
  console.log(jobs)

  return <>
      <JobsContext.Provider value={{ jobs, dispatch }}>
        <InputSearch />
        <Jobs></Jobs>
      </JobsContext.Provider>
      </>;
};
