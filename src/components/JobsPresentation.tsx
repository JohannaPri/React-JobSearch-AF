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
              <div className="jobs-presentation-item">
                <div>
                  <div className="jobs-image-logo-container">
                    <img
                      src={
                        props.jobAd.logo_url
                          ? props.jobAd.logo_url
                          : "placeholder-logo.svg"
                      }
                      alt="company logo"
                    ></img>
                  </div>
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
                  {props.jobAd.publication_date ? (
                    <div className="publication-date">
                      <span>Publicerades </span>
                      <DigiTypographyTime
                        afVariation={TypographyTimeVariation.PRETTY}
                        afDateTime={props.jobAd.publication_date}
                      ></DigiTypographyTime>
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
