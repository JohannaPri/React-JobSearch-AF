import {
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";

export const NoAds = () => {
  return (
    <>
      <DigiLayoutContainer>
        <div className="no-ads-wrapper">
          <DigiTypography>
            <p>Inga annonser matchade din sökning</p>
          </DigiTypography>
        </div>
      </DigiLayoutContainer>
    </>
  );
};
