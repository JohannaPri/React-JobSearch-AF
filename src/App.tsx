import { useReducer } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { jobSearchReducer } from "./reducers/jobSearchReducer";
import { JobsContext } from "./contexts/JobsContext";

function App() {
  // ska ligga i searchApp
  const [jobs, dispatch] = useReducer(jobSearchReducer, []);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <JobsContext.Provider value={{ jobs, dispatch }}></JobsContext.Provider>
    </>
  );
}

export default App;
