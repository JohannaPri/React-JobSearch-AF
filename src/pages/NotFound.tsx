import { ErrorPageStatusCodes } from "@digi/arbetsformedlingen";
import {
  DigiNotificationErrorPage,
  DigiLinkInternal,
} from "@digi/arbetsformedlingen-react";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="notFound">
      <div>
        <DigiNotificationErrorPage
          afHttpStatusCode={ErrorPageStatusCodes.NOT_FOUND}
        >
          <p slot="bodytext">
            Det kan bero på att länken hit är felaktig eller att sidan inte
            finns kvar. Prova att ladda om sidan, felet kan vara tillfälligt. Du
            kan använd länken nedan för att gå tillbaka till startsidan.
          </p>

          <ul slot="links">
            <li>
              <DigiLinkInternal afHref="/" afVariation="small">
                <div className="link-notfound">
                <NavLink to={"/"}>Gå till startsidan</NavLink>
                </div>
              </DigiLinkInternal>
            </li>
          </ul>
        </DigiNotificationErrorPage>
      </div>
      <div>
        <img
          className="brokenCompass"
          height={300}
          src="../public/not-found-compass.png"
          alt=""
        />
      </div>
    </div>
  );
};
