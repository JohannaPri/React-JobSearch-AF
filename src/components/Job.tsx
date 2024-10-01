import { Link, useParams } from "react-router-dom";
import { IJobAd } from "../models/IJobAd";
import {
  InfoCardBorderPosition,
  InfoCardHeadingLevel,
  InfoCardSize,
  InfoCardType,
  InfoCardVariation,
  LayoutBlockVariation,
  LayoutColumnsElement,
  LayoutColumnsVariation,
  TypographyMetaVariation,
  TypographyTimeVariation,
  TypographyVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiTypography,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiNavigationBreadcrumbs,
  DigiInfoCard,
  DigiLayoutColumns,
  DigiTypographyTime,
  DigiTypographyMeta,
} from "@digi/arbetsformedlingen-react";
import { IWeightedJobtechTaxonomyItem } from "../models/IWeightedJobtechTaxonomyItem";

export const Job = () => {
  const { id } = useParams<{ id: string }>();

  const storedJobs = localStorage.getItem("jobs") as string;
  const jobs = JSON.parse(storedJobs);
  const jobAd = jobs.hits.find((job: IJobAd) => job.id === id);

  if (!jobAd)
    return (
      <>
        <DigiLayoutContainer>
          <DigiTypography>
            <h4>Annonsen hittades inte</h4>
          </DigiTypography>
        </DigiLayoutContainer>
      </>
    );
  return (
    <div>
      <div className="breadcrumb-spacing">
        <DigiNavigationBreadcrumbs afCurrentPage="Nuvarande sida">
          <Link to="/">Start</Link>
          <Link to="/searchjobs">Lediga tjänster</Link>
        </DigiNavigationBreadcrumbs>
      </div>
      <div className="job-info-margin">
        <DigiLayoutBlock afVariation={LayoutBlockVariation.TRANSPARENT}>
          <DigiTypography afVariation={TypographyVariation.SMALL}>
            <div className="job-info-padding">
              <img
                src={jobAd.logo_url ? jobAd.logo_url : "placeholder-logo.svg"}
                alt="company logo"
              ></img>
              <h1>{jobAd.headline}</h1>
              <h2>{jobAd.employer.name}</h2>
              <h3>{jobAd.occupation.label}</h3>
              <h3>Kommun: {jobAd.workplace_address.municipality}</h3>
              <div className="job-info">
                <span>Omfattning: {jobAd.working_hours_type.label}</span>
                <span>Varaktighet: {jobAd.duration.label}</span>
                <span>
                  Anställningsform:{" "}
                  {jobAd.description.conditions ?? "Enligt överenskommelse"}
                </span>
                <span>Antal jobb: {jobAd.number_of_vacancies}</span>
              </div>
            </div>
          </DigiTypography>
        </DigiLayoutBlock>
      </div>
      <DigiLayoutContainer>
        <DigiLayoutColumns
          afElement={LayoutColumnsElement.DIV}
          afVariation={LayoutColumnsVariation.ONE}
        >
          <div className="size-info-card">
            <DigiLayoutContainer>
              <DigiInfoCard
                afHeading="Kvalifikationer"
                afHeadingLevel={InfoCardHeadingLevel.H2}
                afType={InfoCardType.TIP}
                afVariation={InfoCardVariation.SECONDARY}
                afSize={InfoCardSize.STANDARD}
              >
                <div>
                  <span>
                    <h3>Arbetslivserfarenheter:</h3>
                  </span>

                  {jobAd.must_have.work_experiences &&
                  jobAd.must_have.work_experiences.length > 0 ? (
                    jobAd.must_have.work_experiences.map(
                      (work: IWeightedJobtechTaxonomyItem, index: number) => (
                        <p key={index}>{work.label}</p>
                      )
                    )
                  ) : (
                    <p>Inga krav</p>
                  )}

                  <span>
                    <h3>Språk</h3>
                  </span>

                  {jobAd.must_have.languages &&
                  jobAd.must_have.languages.length > 0 ? (
                    jobAd.must_have.languages.map(
                      (lang: IWeightedJobtechTaxonomyItem, index: number) => (
                        <p key={index}>{lang.label}</p>
                      )
                    )
                  ) : (
                    <p>Inga krav</p>
                  )}
                </div>
              </DigiInfoCard>
            </DigiLayoutContainer>
          </div>

          <div className="size-info-card">
            <DigiLayoutContainer>
              <DigiInfoCard
                afHeading="Sök Jobbet"
                afHeadingLevel={InfoCardHeadingLevel.H2}
                afType={InfoCardType.RELATED}
                afVariation={InfoCardVariation.SECONDARY}
                afBorderPosition={InfoCardBorderPosition.LEFT}
              >
                <div>
                  <span>
                    <h3>Ansök Senast</h3>
                  </span>

                  {jobAd.last_publication_date ? (
                    <DigiTypographyTime
                      afVariation={TypographyTimeVariation.DISTANCE}
                      afDateTime={new Date(
                        jobAd.last_publication_date
                      ).toISOString()}
                    >
                      {new Date(jobAd.last_publication_date).toLocaleDateString(
                        "sv-SE",
                        {
                          month: "long",
                          day: "numeric",
                        }
                      )}{" "}
                    </DigiTypographyTime>
                  ) : (
                    <p>Inget publiceringsdatum tillgängligt</p>
                  )}

                  <span>
                    <h3>Kontakt till Företag</h3>
                  </span>

                  {jobAd.application_details.email ? (
                    <p>{jobAd.application_details.email}</p>
                  ) : jobAd.application_details.url ? (
                    <a
                      href={jobAd.application_details.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Besök företagets hemsida
                    </a>
                  ) : (
                    <p>Kontakt ej tillgänglig</p>
                  )}
                </div>
              </DigiInfoCard>
            </DigiLayoutContainer>
          </div>
        </DigiLayoutColumns>
      </DigiLayoutContainer>

      <div>
        <DigiLayoutContainer afVerticalPadding>
          <DigiTypography afVariation={TypographyVariation.SMALL}>
            <div className="width-text">
              <h2>Om jobbet</h2>
              {jobAd.description && jobAd.description.text_formatted ? (
                <>
                  {jobAd.description.text_formatted.includes("\n") ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: jobAd.description.text_formatted.replace(
                          /\n/g,
                          "<br />"
                        ),
                      }}
                    />
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: jobAd.description.text_formatted,
                      }}
                    />
                  )}
                </>
              ) : (
                <p>Ingen beskrivning tillgänglig</p>
              )}
            </div>
          </DigiTypography>
        </DigiLayoutContainer>
      </div>

      <div>
        <DigiLayoutContainer>
          <DigiTypography afVariation={TypographyVariation.SMALL}>
            <div>
              <span>
                <h2>Om Anställningen</h2>
              </span>
              <span>
                <h3>Lön</h3>
              </span>
              <div className="salary-type">
                <DigiTypographyMeta
                  afVariation={TypographyMetaVariation.PRIMARY}
                >
                  <p slot="secondary">
                    <strong>Lönetyp:</strong>{" "}
                    {jobAd.salary_type.label || "Enligt överenskommelse"}
                  </p>
                </DigiTypographyMeta>
              </div>
            </div>
            <div className="workplace-address">
              <span>
                <h3>Var ligger arbetsplatsen?</h3>
              </span>

              <div className="workplace-address-specific">
                <DigiTypographyMeta
                  afVariation={TypographyMetaVariation.SECONDARY}
                >
                  {jobAd.workplace_address ? (
                    <>
                      {jobAd.workplace_address.street_address ? (
                        <p>{jobAd.workplace_address.street_address}</p>
                      ) : (
                        <p>Adress är inte tillgänglig</p>
                      )}
                      {jobAd.workplace_address.postcode ||
                      jobAd.workplace_address.city ? (
                        <p>
                          {jobAd.workplace_address.postcode ||
                            "Postkod är inte tillgänglig"}{" "}
                          {jobAd.workplace_address.city ||
                            "Stad är inte tillgänglig"}
                        </p>
                      ) : null}
                    </>
                  ) : (
                    <p>Ingen adress är tillgänglig</p>
                  )}
                </DigiTypographyMeta>
              </div>
            </div>
            <div>
              <span>
                <h3>Arbetsgivaren</h3>
              </span>
              <div className="employer-name-last-section">
                <DigiTypographyMeta
                  afVariation={TypographyMetaVariation.SECONDARY}
                >
                  <p>{jobAd.employer.name}</p>
                </DigiTypographyMeta>
              </div>
            </div>
            <div className="id-date">
              <DigiTypographyMeta afVariation={TypographyMetaVariation.PRIMARY}>
                <p>Annons-Id: {jobAd.id}</p>
                <p slot="secondary">
                  Publicerad:{" "}
                  {jobAd.publication_date
                    ? new Date(jobAd.publication_date).toLocaleDateString(
                        "sv-SE",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      ) +
                      ", kl. " +
                      new Date(jobAd.publication_date).toLocaleTimeString(
                        "sv-SE",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )
                    : "Datum ej tillgängligt"}
                </p>
              </DigiTypographyMeta>
            </div>
          </DigiTypography>
        </DigiLayoutContainer>
      </div>
    </div>
  );
};
