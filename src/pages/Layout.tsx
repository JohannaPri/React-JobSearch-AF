import {
  FooterVariation,
  FooterCardVariation,
  LogoVariation,
  LogoColor,
} from "@digi/arbetsformedlingen";
import {
  DigiHeader,
  DigiHeaderNavigation,
  DigiHeaderNavigationItem,
  DigiFooter,
  DigiFooterCard,
  DigiIconAccessibilityUniversal,
  DigiIconEnvelope,
  DigiIconGlobe,
  DigiIconSign,
  DigiLogo,
} from "@digi/arbetsformedlingen-react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Main } from "../components/styled/Wrappers";

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      <header>
        <DigiHeader
          afSystemName="JobbNavigator"
          afHideSystemName={false}
          afMenuButtonText="Meny"
          afAriaLabel="Designsystemets header för Layout"
        >
          <a
            slot="header-logo"
            aria-label="Designsystemets startsida"
            href="/"
          ></a>
          <div slot="header-navigation">
            <DigiHeaderNavigation
              afCloseButtonText="Stäng"
              afCloseButtonAriaLabel="Stäng meny"
              afNavAriaLabel="Huvudmeny"
            >
              <DigiHeaderNavigationItem
                afCurrentPage={location.pathname === "/"}
              >
                <NavLink to={"/"}>Startsida</NavLink>
              </DigiHeaderNavigationItem>
              <DigiHeaderNavigationItem
                afCurrentPage={location.pathname === "/searchjobs"}
              >
                <NavLink to={"/searchjobs"}>Lediga tjänster</NavLink>
              </DigiHeaderNavigationItem>
              <DigiHeaderNavigationItem
                afCurrentPage={location.pathname === "/searchstatistics"}
              >
                <NavLink to={"/searchstatistics"}>Historiska tjänster</NavLink>
              </DigiHeaderNavigationItem>
            </DigiHeaderNavigation>
          </div>
        </DigiHeader>
      </header>

      <Main>
        <Outlet></Outlet>
      </Main>

      <footer>
        <DigiFooter afVariation={FooterVariation.SMALL}>
          <div slot="content-top">
            <div>
              <DigiFooterCard afType={FooterCardVariation.ICON}>
                <ul>
                  <li>
                    <a href="#">
                      <DigiIconAccessibilityUniversal></DigiIconAccessibilityUniversal>
                      Tillgänglighetsredogörelse
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <DigiIconSign></DigiIconSign>
                      Teckenspråk
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <DigiIconGlobe></DigiIconGlobe>
                      Other languages
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <DigiIconEnvelope></DigiIconEnvelope>
                      Mejla vår funktionbrevlåda
                    </a>
                  </li>
                </ul>
              </DigiFooterCard>
            </div>

            <div className="footer-container">
              <DigiFooterCard afType={FooterCardVariation.BORDER}>
                <a href="#">Kontakta oss</a>
                <p>
                  Telefon: 0777-00 0000 <br /> Öppettider: Vardagar 08:00-16:30
                </p>
              </DigiFooterCard>
            </div>
          </div>
          <div className="footerLogo" slot="content-bottom-left">
            <div>
              {" "}
              <Link
                to="/"
                aria-label="Logotyp som går att trycka på för att komma till startsidan"
              >
                <DigiLogo
                  afVariation={LogoVariation.LARGE}
                  afColor={LogoColor.SECONDARY}
                ></DigiLogo>
              </Link>
            </div>
            <div>
              <h1 className="footerBrandName">JobbNavigator</h1>
            </div>
          </div>
          <div slot="content-bottom-right">
            <p>Följ oss på</p>
            <a href="#">Facebook</a>
            <a href="#">Youtube</a>
            <a href="#">Linkedin</a>
            <a href="#">Instagram</a>
          </div>
        </DigiFooter>
      </footer>
      {/* Innehåll här */}
    </>
  );
};
