import {
  LayoutBlockVariation,
  LinkVariation,
  TypographyMetaVariation,
  TypographyTimeVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiLayoutContainer,
  DigiLayoutBlock,
  DigiTypography,
  DigiLink,
  DigiTypographyMeta,
  DigiTypographyTime,
} from "@digi/arbetsformedlingen-react";
import { IJobHistoricalAd } from "../models/IJobHistoricalAd";

interface IHistoricalJobsProps {
  job: IJobHistoricalAd;
}

export const HistoricalJobsPresentation = ({ job }: IHistoricalJobsProps) => {
  return (
    <>
      <DigiLayoutContainer>
        <DigiLayoutBlock afVariation={LayoutBlockVariation.SECONDARY}>
          <DigiTypography>
            <div className="historical-job-presentation">
              <div>
                <h4>{job.headline}</h4>
                <p>{job.employer.workplace}</p>
                <span>{job.scope_of_work.max}%</span>
                <span>{job.duration.label}</span>
                <p></p>
              </div>

              <div>
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
