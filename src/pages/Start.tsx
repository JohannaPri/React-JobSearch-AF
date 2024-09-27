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

export const Start = () => {
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
          <h3>Redo att hitta ditt nästa drömjobb? </h3>

          <Link to="/searchjobs">
            {" "}
            <DigiLinkButton
              afHref="#"
              afSize={LinkButtonSize.LARGE}
              afVariation={LinkButtonVariation.PRIMARY}
            >
              Lediga tjänster
            </DigiLinkButton>
          </Link>
        </DigiTypography>
        <DigiMediaImage
          afUnlazy
          afHeight="300"
          afWidth="300"
          afSrc="../public/start-page.png"
          afAlt="Arbetsförmedlingens logotyp som en fasadskyld"
        ></DigiMediaImage>{" "}
      </div>
    </>
  );
};
