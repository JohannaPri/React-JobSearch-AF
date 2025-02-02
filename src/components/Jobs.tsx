import { useContext } from "react";
import { JobsContext } from "../contexts/JobsContext";
import { JobsPresentation } from "./JobsPresentation";
import { TotalPositionsSearchResult } from "./TotalPositionsSearchResult";
import { Paginator } from "./Paginator";

export const Jobs = () => {
  const { jobs } = useContext(JobsContext);

  return (
    <>
      <div>
        {jobs.total.value > 0 && (
          <TotalPositionsSearchResult job={jobs}></TotalPositionsSearchResult>
        )}
        {jobs.hits.map((job) => (
          <div key={job.id}>
            <JobsPresentation jobAd={job}></JobsPresentation>
          </div>
        ))}
        {jobs.total.value > 0 && <Paginator></Paginator>}
      </div>
    </>
  );
};
