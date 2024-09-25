
import { useReducer } from "react";
import "./App.css";
import { jobSearchReducer } from "./reducers/jobSearchReducer";





function App() {
  
  // ska ligga i searchApp
  const [jobs, dispatch] = useReducer(jobSearchReducer, []);

  return (
    <>
      
    
    </>
  );
}

export default App;
