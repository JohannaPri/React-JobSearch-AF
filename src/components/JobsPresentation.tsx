import { IJobAd } from "../models/IJobAd";
import {
  LayoutBlockVariation,
  LinkVariation,
  TypographyTimeVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiLink,
  DigiTypography,
  DigiTypographyTime,
} from "@digi/arbetsformedlingen-react";

interface IJobPresentationProps {
  jobAd: IJobAd;
}

export const JobsPresentation = (props: IJobPresentationProps) => {
  return (
    <>
      <DigiLayoutContainer>
        <DigiLayoutBlock
          af-margin-bottom="true"
          afVariation={LayoutBlockVariation.SECONDARY}
        >
          <DigiTypography>
            <DigiLink
              afHref={`/searchjob/${props.jobAd.id}`}
              afVariation={LinkVariation.LARGE}
            >
              {props.jobAd.headline}
            </DigiLink>
            <p>{props.jobAd.employer.name}</p>
            <p>{props.jobAd.occupation.label}</p>

            {props.jobAd.publication_date ? (
              <DigiTypographyTime
                afVariation={TypographyTimeVariation.PRETTY}
                afDateTime="Fri Sep 27 2024 13:03:57 GMT+0200 (centraleuropeisk sommartid)"
              ></DigiTypographyTime>
            ) : (
              <p>Publikationsdatum ej tillgänligt</p>
            )}
          </DigiTypography>
        </DigiLayoutBlock>
      </DigiLayoutContainer>
    </>
  );
};
