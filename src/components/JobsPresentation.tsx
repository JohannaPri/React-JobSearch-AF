import { IJobAd } from "../models/IJobAd";
import {
  LayoutBlockVariation,
  TypographyMetaVariation,
  TypographyTimeVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
  DigiTypographyMeta,
  DigiTypographyTime,
} from "@digi/arbetsformedlingen-react";

import { Link } from "react-router-dom";

interface IJobPresentationProps {
  jobAd: IJobAd;
}

export const JobsPresentation = (props: IJobPresentationProps) => {
  return (
    <>
      <DigiLayoutContainer>
        <div className="jobs-presentation-wrapper">
          <DigiLayoutBlock afVariation={LayoutBlockVariation.SECONDARY}>
            <DigiTypography>
              <div className="historical-job-presentation">
                <div>
                  <div className="link-jobs-presentation">
                    <Link to={`/searchjob/${props.jobAd.id}`}>
                      {props.jobAd.headline}
                    </Link>
                  </div>
                  <DigiTypographyMeta
                    afVariation={TypographyMetaVariation.PRIMARY}
                  >
                    <p>{props.jobAd.employer.name}</p>
                    <p slot="secondary">{props.jobAd.occupation.label}</p>
                  </DigiTypographyMeta>
                </div>
                <div className="publication-date-historical">
                  {props.jobAd.publication_date ? (
                    <div className="publication-date">
                      <span className="publication-bold">Publicerades</span>
                      <DigiTypographyMeta
                        afVariation={TypographyMetaVariation.SECONDARY}
                      >
                        <DigiTypographyTime
                          afVariation={TypographyTimeVariation.PRIMARY}
                          afDateTime={props.jobAd.publication_date}
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
