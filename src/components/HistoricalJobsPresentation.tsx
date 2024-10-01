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
import { IJobHistoricalAd } from "../models/IJobHistoricalAd";

interface IHistoricalJobsProps {
  job: IJobHistoricalAd;
}

export const HistoricalJobsPresentation = ({ job }: IHistoricalJobsProps) => {
  console.log(job.logo_url);
  return (
    <>
      <DigiLayoutContainer>
        <DigiLayoutBlock afVariation={LayoutBlockVariation.SECONDARY}>
          <DigiTypography>
            <div className="historical-job-presentation">
              <div>
                <h3>{job.headline}</h3>
                <h6>
                  {job.occupation.label} - {job.occupation_group.label}
                </h6>
                <p>{job.employer.name}</p>
                <p>
                  <span>
                    {job.duration.label} - {job.scope_of_work.max}%
                  </span>
                </p>
                <p></p>
              </div>

              <div>
                <img
                  src={job.logo_url ? job.logo_url : "placeholder-logo.svg"}
                  alt=""
                  onError={({ currentTarget }) => {
                    currentTarget.src = "/placeholder-logo.svg";
                  }}
                ></img>
                <p>{job.working_hours_type.label}</p>
                {job.publication_date ? (
                  <div className="publication-date">
                    <span>Publicerades </span>
                    <DigiTypographyMeta
                      afVariation={TypographyMetaVariation.PRIMARY}
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
      </DigiLayoutContainer>
    </>
  );
};

/*
<DigiLayoutBlock>
            <DigiTypography>
              
            </DigiTypography>
          </DigiLayoutBlock>
          */
