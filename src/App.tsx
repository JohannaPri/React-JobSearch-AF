import { useReducer } from "react";
import "./App.css";
import { jobSearchReducer } from "./reducers/jobSearchReducer";
import { JobsContext } from "./contexts/JobsContext";

function App() {
  // ska ligga i searchApp
  const [jobs, dispatch] = useReducer(jobSearchReducer, []);

  return (
    <>
      <JobsContext.Provider value={{ jobs, dispatch }}></JobsContext.Provider>
    </>
  );
}

export default App;
