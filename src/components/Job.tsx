import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IJobAd } from "../models/IJobAd";
import {
  InfoCardBorderPosition,
  InfoCardHeadingLevel,
  InfoCardType,
  InfoCardVariation,
  LayoutBlockVariation,
  LayoutColumnsElement,
  LayoutColumnsVariation,
  LoaderSkeletonVariation,
  TypographyVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiTypography,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiLoaderSkeleton,
  DigiNavigationBreadcrumbs,
  DigiInfoCard,
  DigiLayoutColumns,
} from "@digi/arbetsformedlingen-react";

export const Job = () => {
  const [jobAd, setJobAd] = useState<IJobAd | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>();

  const fetchJobAd = async (id: string): Promise<IJobAd> => {
    const response = await axios.get<IJobAd>(
      `https://jobsearch.api.jobtechdev.se/ad/${id}`
    );
    return response.data;
  };

  useEffect(() => {
    const fetchJobData = async () => {
      if (id) {
        try {
          const data = await fetchJobAd(id);
          setJobAd(data);
        } catch (err) {
          if (axios.isAxiosError(err) && err.response) {
            setError(err.response.data.message);
          } else {
            setError("An unexpected error occurred");
          }
        } finally {
          setLoading(false);
        }
      } else {
        console.log("Error: id is undefined.");
      }
    };

    fetchJobData();
  }, [id]);

  if (loading) {
    return (
      <div>
        <DigiLoaderSkeleton
          afVariation={LoaderSkeletonVariation.TEXT}
          afCount={4}
        />
      </div>
    );
  }
  if (error) return <div>Error: {error}</div>;
  if (!jobAd) return <div>Annonsen kunde inte hittas.</div>;

  return (
    <div>
      <div className="breadcrumb-spacing">
        <DigiNavigationBreadcrumbs afCurrentPage="Nuvarande sida">
          <a href="/">Start</a>
          <a href="/searchjobs">Sök jobb</a>
        </DigiNavigationBreadcrumbs>
      </div>
      <div className="job-info-margin">
        <DigiLayoutBlock afVariation={LayoutBlockVariation.TRANSPARENT}>
          <DigiTypography afVariation={TypographyVariation.SMALL}>
            <div className="job-info-padding">
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

      <DigiLayoutColumns
        afElement={LayoutColumnsElement.DIV}
        afVariation={LayoutColumnsVariation.TWO}
      >
        <div>
          <DigiLayoutContainer>
            <DigiInfoCard
              afHeading="Kvalifikationer"
              afHeadingLevel={InfoCardHeadingLevel.H2}
              afType={InfoCardType.RELATED}
              afVariation={InfoCardVariation.SECONDARY}
              afBorderPosition={InfoCardBorderPosition.LEFT}
            >
              <div>
                <span>
                  <h3>Arbetslivserfarenheter:</h3>
                </span>
                {jobAd.must_have.work_experiences &&
                jobAd.must_have.work_experiences.length > 0 ? (
                  jobAd.must_have.work_experiences.map((work, index) => (
                    <p key={index}>{work.label}</p>
                  ))
                ) : (
                  <p>Inga krav</p>
                )}

                <span>
                  <h3>Språk:</h3>
                </span>
                {jobAd.must_have.languages &&
                jobAd.must_have.languages.length > 0 ? (
                  jobAd.must_have.languages.map((lang, index) => (
                    <p key={index}>{lang.label}</p>
                  ))
                ) : (
                  <p>Inga krav</p>
                )}
              </div>
            </DigiInfoCard>
          </DigiLayoutContainer>
        </div>
        <div>
          <DigiLayoutContainer>
            <DigiInfoCard
              afHeading="Sök Jobbet"
              afHeadingLevel={InfoCardHeadingLevel.H2}
              afType={InfoCardType.RELATED}
              afVariation={InfoCardVariation.SECONDARY}
              afBorderPosition={InfoCardBorderPosition.LEFT}
            >
              <p>DATA IN HÄR</p>
            </DigiInfoCard>
          </DigiLayoutContainer>
        </div>
      </DigiLayoutColumns>

      <div>
        <DigiLayoutContainer afVerticalPadding>
          <DigiTypography afVariation={TypographyVariation.SMALL}>
            <h2>Om jobbet</h2>
            <p>{jobAd.description.text}</p>
          </DigiTypography>
        </DigiLayoutContainer>
      </div>
      <div>
        <DigiLayoutBlock
          afVariation={LayoutBlockVariation.TRANSPARENT}
        ></DigiLayoutBlock>
      </div>
    </div>
  );
};