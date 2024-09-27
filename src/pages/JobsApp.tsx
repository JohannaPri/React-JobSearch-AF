import { useReducer } from "react";
import { JobsContext } from "../contexts/JobsContext";
import { jobSearchReducer } from "../reducers/jobSearchReducer";
import { InputSearch } from "../components/InputSearch";


export const JobsApp = () => {
  const [jobs, dispatch] = useReducer(jobSearchReducer, []);
  console.log(jobs)

  return <>
      <JobsContext.Provider value={{ jobs, dispatch }}>
        <InputSearch />
        
      </JobsContext.Provider>
      </>;
};
