
import { useReducer } from "react";
import "./App.css";
import { jobSearchReducer } from "./reducers/jobSearchReducer";





function App() {
  
  const [jobs, dispatch] = useReducer(jobSearchReducer, [])

  return (
    <>
      
    
    </>
  );
}

export default App;
