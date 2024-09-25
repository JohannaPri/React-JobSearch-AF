import { useState, FormEvent } from "react";
import "./App.css";
import { getJobs } from "./services/jobSearchService";

function App() {
  const [inputsearchText, setInputSearchText] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const userInput = {
      searchText: inputsearchText,
      trainee: false,
      remote: false,
      experience: false,
    };
    const jobs = await getJobs(userInput);
    console.log(jobs);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setInputSearchText(e.target.value)}
        />
        <button>Sök</button>
      </form>
    </>
  );
}

export default App;
