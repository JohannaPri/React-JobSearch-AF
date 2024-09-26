import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IJobAd } from "../models/IJobAd";
import {
  LayoutBlockVariation,
  TypographyVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiTypography,
  DigiLayoutBlock,
  DigiLayoutContainer,
} from "@digi/arbetsformedlingen-react";

const jobId = "29082265";
//const { jobId } = useParams();

const fetchJobAd = async (jobId: string): Promise<IJobAd> => {
  const response = await axios.get<IJobAd>(
    `https://jobsearch.api.jobtechdev.se/ad/${jobId}`
  );
  return response.data;
};

export const Job = () => {
  const [jobAd, setJobAd] = useState<IJobAd | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const data = await fetchJobAd(jobId);
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
    };

    fetchJobData();
  }, [jobId]);

  if (loading) return <div>Laddar...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!jobAd) return <div>Annonsen kunde inte hittas.</div>;

  return (
    <div>
      <div className="job-info-margin">
        <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
          <DigiTypography afVariation={TypographyVariation.SMALL}>
            <h1>{jobAd.headline}</h1>
            <h2>{jobAd.employer.name}</h2>
            <h3>{jobAd.occupation.label}</h3>
            <h3>Kommun: {jobAd.workplace_address.municipality}</h3>
            <div className="job-info">
              <span>Omfattning: {jobAd.working_hours_type.label}</span>
              <span>Varaktighet: {jobAd.duration.label}</span>
              <span>
                Anställningsform: {jobAd.description.conditions ?? "..."}
              </span>
              <span>Antal jobb: {jobAd.number_of_vacancies}</span>
            </div>
          </DigiTypography>
        </DigiLayoutBlock>
      </div>
      <div>
        <DigiLayoutContainer afVerticalPadding>
          <DigiTypography afVariation={TypographyVariation.SMALL}>
            <h2>Om jobbet</h2>
            <p>{jobAd.description.text}</p>
          </DigiTypography>
        </DigiLayoutContainer>
      </div>
    </div>
  );
};
