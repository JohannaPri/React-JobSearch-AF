import {
  LayoutBlockVariation,
  TypographyMetaVariation,
  TypographyTimeVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiLayoutContainer,
  DigiLayoutBlock,
  DigiTypography,
  DigiTypographyMeta,
  DigiTypographyTime,
} from "@digi/arbetsformedlingen-react";
import { IJobAd } from "../models/IJobAd";

interface IHistoricalJobsProps {
  job: IJobAd;
}

export const HistoricalJobsPresentation = ({ job }: IHistoricalJobsProps) => {
  // console.log(job.logo_url);
  return (
    <>
      <DigiLayoutContainer>
        <div className="jobs-presentation-wrapper">
          <DigiLayoutBlock afVariation={LayoutBlockVariation.SECONDARY}>
            <DigiTypography>
              <div className="historical-job-presentation">
                <div>
                  <h3>{job.headline}</h3>
                  <DigiTypographyMeta
                    afVariation={TypographyMetaVariation.PRIMARY}
                  >
                    <p>
                      {job.occupation.label} - {job.occupation_group.label}
                    </p>
                    <p slot="secondary">{job.employer.name}</p>
                    <p>{job.working_hours_type.label}</p>
                  </DigiTypographyMeta>
                </div>

                <div className="publication-date-historical">
                  {job.publication_date ? (
                    <div>
                      <span className="publication-bold">Publicerades </span>
                      <DigiTypographyMeta
                        afVariation={TypographyMetaVariation.SECONDARY}
                      >
                        <DigiTypographyTime
                          afVariation={TypographyTimeVariation.PRIMARY}
                          afDateTime={job.publication_date}
                        ></DigiTypographyTime>
                      </DigiTypographyMeta>
                    </div>
                  ) : (
                    <p>Publikationsdatum ej tillgänligt</p>
                  )}
                </div>
              </div>
            </DigiTypography>
          </DigiLayoutBlock>
        </div>
      </DigiLayoutContainer>
    </>
  );
};
