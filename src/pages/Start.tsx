import {
  LinkButtonSize,
  LinkButtonVariation,
  TypographyVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiLinkButton,
  DigiMediaImage,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { Link } from "react-router-dom";
import { repo } from "../Router";

export const Start = () => {
  localStorage.clear();

  return (
    <>
      {" "}
      <div className="start">
        <DigiTypography afVariation={TypographyVariation.SMALL}>
          <h1>Välkommen till JobbNavigator - din personliga platsbank!</h1>
          <p>
            Här kan du enkelt söka efter lediga jobb och utforska olika yrken
            som passar dina intressen och mål. Med hjälp av Arbetsförmedlingens
            öppna data erbjuder vi dig tillgång till tusentals jobbannonser och
            detaljerad information om olika yrken, allt på ett ställe.
          </p>
          <p>
            Håll koll på din jobbsökarhistorik och få statistik över
            jobbmarknaden - se hur många jobb som funnits ute och följ trender
            inom olika branscher.
          </p>
          <h2 className="heading-start">
            Redo att hitta ditt nästa drömjobb?{" "}
          </h2>

          <Link to="/searchjobs">
            {" "}
            <DigiLinkButton
              afHref="#"
              afSize={LinkButtonSize.MEDIUMLARGE}
              afVariation={LinkButtonVariation.SECONDARY}
            >
              Lediga tjänster
            </DigiLinkButton>
          </Link>
        </DigiTypography>
        <DigiMediaImage
          afUnlazy
          afHeight="370"
          afWidth="370"
          afSrc={`${repo}/start-page-smaller.png`}
          afAlt="Arbetsförmedlingens logotyp som en fasadskyld"
        ></DigiMediaImage>{" "}
      </div>
    </>
  );
};
