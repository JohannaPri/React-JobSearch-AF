// import { useContext } from "react";
import { useContext } from "react";
import { JobsContext } from "../contexts/JobsContext";
import { Link } from "react-router-dom";


export const Jobs = () => {
  const { jobs } = useContext(JobsContext);

  return (
    <>
      <div>
        {jobs.hits.map((job) => (
          <div key={job.id}>

            <Link to={`/searchjob/${job.id}`}>{job.headline}</Link>
          </div>
        ))}
      </div>
    </>
  );
};
