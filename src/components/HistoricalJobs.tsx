import { useContext } from "react";
import { JobsHistoryContext } from "../contexts/jobsHistoryContext";
import { HistoricalJobsPresentation } from "./HistoricalJobsPresentation";
import { TotalPositionsSearchResult } from "./TotalPositionsSearchResult";

export const HistoricalJobs = () => {
  const { jobs } = useContext(JobsHistoryContext);

  return (
    <>
      {jobs.total.value === 0 && <p>inga annonser</p>}
      {jobs.total.value > 0 && (
        <TotalPositionsSearchResult job={jobs}></TotalPositionsSearchResult>
      )}
      <div>
        {jobs.hits.map((job) => (
          <div key={job.id}>
            <HistoricalJobsPresentation job={job} />
          </div>
        ))}
      </div>
    </>
  );
};
