import { IJobAd } from "../models/IJobAd";
import {
  LayoutBlockVariation,
  LinkVariation,
  TypographyMetaVariation,
  TypographyTimeVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiLink,
  DigiTypography,
  DigiTypographyMeta,
  DigiTypographyTime,
} from "@digi/arbetsformedlingen-react";

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
                <div className="link-jobs-presentation">
                  <DigiLink
                    afHref={`/searchjob/${props.jobAd.id}`}
                    afVariation={LinkVariation.LARGE}
                  >
                    {props.jobAd.headline}
                  </DigiLink>
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
                      afDateTime="Fri Sep 27 2024 13:03:57 GMT+0200 (centraleuropeisk sommartid)"
                    ></DigiTypographyTime>
                  </div>
                ) : (
                  <p>Publikationsdatum ej tillgänligt</p>
                )}
              </div>
            </DigiTypography>
          </DigiLayoutBlock>
        </div>
      </DigiLayoutContainer>
    </>
  );
};
