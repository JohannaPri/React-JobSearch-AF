import {
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";

export const NoAds = () => {
  return (
    <>
      <DigiLayoutContainer>
        <div className="error-message-no-ads">
          <DigiTypography>
            <p>Inga annonser matchade din sökning</p>
          </DigiTypography>
        </div>
      </DigiLayoutContainer>
    </>
  );
};
