import { useContext } from "react";
import { JobsContext } from "../contexts/JobsContext";
import { JobsPresentation } from "./JobsPresentation";
import {
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";

export const Jobs = () => {
  const { jobs } = useContext(JobsContext);

  return (
    <>
      <DigiLayoutContainer>
        <DigiTypography>
          <div className="total-presentation">
            <p>Totalt antal anonser : {jobs.total.value}</p>
            <p>Totalt antal jobb: {jobs.positions}</p>
          </div>
        </DigiTypography>
      </DigiLayoutContainer>
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
