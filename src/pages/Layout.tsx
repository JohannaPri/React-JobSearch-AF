import {
  FooterVariation,
  FooterCardVariation,
  LogoVariation,
  LogoColor,
} from "@digi/arbetsformedlingen";
import {
  DigiHeader,
  DigiHeaderNotification,
  DigiIconBellFilled,
  DigiHeaderAvatar,
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
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <DigiHeader
          afSystemName="JobbNavigator"
          afHideSystemName={false}
          afMenuButtonText="Meny"
        >
          <a
            slot="header-logo"
            aria-label="Designsystemets startsida"
            href="/"
          ></a>
          <div slot="header-content">
            <DigiHeaderNotification afNotificationAmount={8}>
              <a href="/">
                <DigiIconBellFilled></DigiIconBellFilled>
                Notiser
              </a>
            </DigiHeaderNotification>
            <DigiHeaderAvatar
              afSrc="/assets/images/avatar.svg"
              afAlt="Profilbild på Linda Karlsson"
              afName="Linda Karlsson"
              afSignature="KALIA"
              afIsLoggedIn={false}
              afHideSignature={true}
            ></DigiHeaderAvatar>
          </div>
          <div slot="header-navigation">
            <DigiHeaderNavigation
              afCloseButtonText="Stäng"
              afCloseButtonAriaLabel="Stäng meny"
              afNavAriaLabel="Huvudmeny"
            >
              <DigiHeaderNavigationItem afCurrentPage={true}>
                <a href="/">Startsida</a>
              </DigiHeaderNavigationItem>
              <DigiHeaderNavigationItem>
                <a href="/">Lediga tjänster</a>
              </DigiHeaderNavigationItem>
              <DigiHeaderNavigationItem>
                <a href="/">Historik/Statistik</a>
              </DigiHeaderNavigationItem>
            </DigiHeaderNavigation>
          </div>
        </DigiHeader>
      </header>

      <main>
        <Outlet></Outlet>
      </main>

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
            <div>
              <DigiFooterCard afType={FooterCardVariation.BORDER}>
                <a href="#">Om tjänsten dolores</a>
                <p>
                  Systemversion: 1.4.0 <br /> Ansvarig: Jenny Svensson
                </p>
              </DigiFooterCard>
            </div>
            <div>
              <DigiFooterCard afType={FooterCardVariation.BORDER}>
                <a href="#">Kontakta oss</a>
                <p>
                  Telefon: 0771-60 0001 <br /> Öppettider: Vardagar 08:00-16:30
                </p>
              </DigiFooterCard>
            </div>
          </div>
          <div slot="content-bottom-left">
            <Link to="/">
              <DigiLogo
                afVariation={LogoVariation.LARGE}
                afColor={LogoColor.SECONDARY}
              ></DigiLogo>
            </Link>
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
