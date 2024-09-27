import { useContext } from "react";
import { JobsContext } from "../contexts/JobsContext";
import { JobsPresentation } from "./JobsPresentation";

export const Jobs = () => {
  const { jobs } = useContext(JobsContext);

  return (
    <>
      <div>
        {jobs.hits.map((job) => (
          <div key={job.id}>
            <JobsPresentation jobAd={job}></JobsPresentation>
          </div>
        ))}
      </div>
    </>
  );
};
