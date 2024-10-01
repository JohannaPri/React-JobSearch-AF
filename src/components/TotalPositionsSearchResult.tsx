import {
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { IJobSearchResults } from "../models/IJobSearchResult";

interface ITotalPositionsProps {
  job: IJobSearchResults;
}

export const TotalPositionsSearchResult = ({ job }: ITotalPositionsProps) => {
  return (
    <>
      <DigiLayoutContainer>
        <DigiTypography>
          <div className="total-presentation">
            <p>Totalt antal annonser: {job.total.value}</p>
            <p>Totalt antal jobb: {job.positions}</p>
          </div>
        </DigiTypography>
      </DigiLayoutContainer>
    </>
  );
};
