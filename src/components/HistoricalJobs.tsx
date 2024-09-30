import {
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { HistoricalJobsPresentation } from "./HistoricalJobsPresentation";

export const HistoricalJobs = () => {
  // hämta contextext

  const mockData = {
    total: {
      value: 2438,
    },
    positions: 2940,
    query_time_in_millis: 45,
    result_time_in_millis: 59,
    stats: [],
    freetext_concepts: {
      skill: ["front end"],
      occupation: [],
      location: [],
      skill_must: [],
      occupation_must: [],
      location_must: [],
      skill_must_not: [],
      occupation_must_not: [],
      location_must_not: [],
    },
    hits: [
      {
        relevance: 1,
        id: "d556717f99f381bc1ceefa040396f61b95bc1c9a",
        external_id: "46-556284-2319-wb-132309",
        original_id: "24382036",
        label: null,
        webpage_url:
          "https://arbetsformedlingen.se/platsbanken/annonser/d556717f99f381bc1ceefa040396f61b95bc1c9a",
        logo_url:
          "https://www.arbetsformedlingen.se/rest/arbetsgivare/rest/af/v3/organisation/5562842319/logotyper/logo.png",
        headline: "Frontend Utvecklare",
        application_deadline: "2020-12-20T23:59:59",
        number_of_vacancies: 1,
        description: {
          text: "Sopra Steria i Stockholm söker nu dig med god kunskap inom HTML, CSS och framför allt JavaScript. Vi tror att du bygger responsiva gränssnitt som regel samt alltid säkerställer interaktion på mobila enheter eftersom trenden för användning går i den riktningen. Vi värdesätter om du har förståelse för UX och design samt prestanda på klientsidan.\n\nDu kommer att ges möjligheten att tillhöra ett glatt team som jobbar i teknikens framkant, med uppdrag att få kundernas system att bli eventbaserade, moderna och att fungera på alla typer av enheter. Vi tror att du trivs med att vara en del i utvecklingen när teamet växer sig större, och gärna vill dela med dig av dina kunskaper och erfarenheter. Genom dina kunskaper kommer du att spela en viktig roll i våra kunders digitaliseringsresor.\n\nVem är du?\n\n• Du har runt 2–3 års erfarenhet av frontend-utveckling.\n• Har erfarenhet av något av de större ramverken för komponentbaserade och reaktiva applikationer (React, Angular, Vue m.fl.)\n• Är bekväm med att sätta upp och konfigurera task runners för transpilering/minifiering/prekompilering o.s.v. (t.ex. Grunt, Webpack)\n• Har kunskap av att strukturera och organisera JavaScript och CSS för större projekt (t.ex. kunskap om CSS preprocessorer, ramverk för CSS-in-JS)\n• Är nyfiken på utveckling inom Headless CMS. Erfarenhet av utveckling inom något headless CMS plattform (Contentful, EpiServer m.fl.) är meriterande.\n\nVilka är vi?\n\nI världen är vi mer än 45 000 medarbetare, 470 av oss finns här i Sverige.\n\nPå Sopra Steria får du möjlighet att jobba i teknikens framkant, tillsammans med högt kvalificerade kollegor. Vi arbetar aktivt med att skapa bra gemenskap och arbetsglädje. Vi tror på trivsel, trygghet och tillit som den bästa grunden för proaktivitet och kreativitet. Du som börjar jobba hos oss får schyssta villkor, ett långsiktigt perspektiv på dig som medarbetare och goda karriärmöjligheter. Vi har som mål att rankas som den bästa arbetsplatsen i branschen.\n\nKänner du igen dig i beskrivningen och är intresserad av ett mycket omväxlande och inspirerande jobb hos ett driftigt och framgångsrikt företag?\n\nAnsökan\n\nAnsök enkelt genom att antingen ladda upp ditt CV eller länka direkt till ditt LinkedIn-konto via annonsen på vår hemsida! Observera att vi inte tar emot ansökningar inkomna via mail. ",
          text_formatted: null,
          company_information: null,
          needs: null,
          requirements: null,
          conditions: "-\r\n-",
        },
        employment_type: {
          concept_id: "PFZr_Syz_cUq",
          label: "Vanlig anställning",
          legacy_ams_taxonomy_id: "1",
        },
        salary_type: {
          concept_id: "oG8G_9cW_nRf",
          label: "Fast månads- vecko- eller timlön",
          legacy_ams_taxonomy_id: "1",
        },
        salary_description: "Enligt överenskommelse",
        duration: {
          concept_id: "a7uU_j21_mkL",
          label: "Tillsvidare",
          legacy_ams_taxonomy_id: "1",
        },
        working_hours_type: {
          concept_id: "6YE1_gAC_R2G",
          label: "Heltid",
          legacy_ams_taxonomy_id: "1",
        },
        scope_of_work: {
          min: 100,
          max: 100,
        },
        access: null,
        employer: {
          phone_number: null,
          email: null,
          url: null,
          organization_number: null,
          name: "Sopra Steria Sweden AB",
          workplace: "Sopra Steria",
        },
        application_details: {
          information: null,
          reference: null,
          email: null,
          via_af: false,
          url: "https://www.soprasteria.se/lediga-tjanster/?jobid=132309&ref=platsbanken",
          other: null,
        },
        experience_required: true,
        access_to_own_car: false,
        driving_license_required: false,
        driving_license: null,
        occupation: {
          concept_id: "TT8h_qKk_1iu",
          label: "Affärskonsult, IT",
          legacy_ams_taxonomy_id: "7579",
        },
        occupation_group: {
          concept_id: "UXKZ_3zZ_ipB",
          label: "Systemanalytiker och IT-arkitekter m.fl.",
          legacy_ams_taxonomy_id: "2511",
        },
        occupation_field: {
          concept_id: "apaJ_2ja_LuF",
          label: "Data/IT",
          legacy_ams_taxonomy_id: "3",
        },
        workplace_address: {
          municipality: "Stockholm",
          municipality_code: "0180",
          municipality_concept_id: "AvNB_uwa_6n6",
          region: "Stockholms län",
          region_code: "01",
          region_concept_id: "CifL_Rzy_Mku",
          country: "Sverige",
          country_code: "199",
          country_concept_id: "i46j_HmG_v64",
          street_address: null,
          postcode: null,
          city: null,
          coordinates: [18.06858, 59.329323],
        },
        must_have: {
          skills: [],
          languages: [],
          work_experiences: [
            {
              weight: 10,
              concept_id: "TT8h_qKk_1iu",
              label: "Affärskonsult, IT",
              legacy_ams_taxonomy_id: "7579",
            },
          ],
          education: null,
          education_level: null,
        },
        nice_to_have: {
          skills: [],
          languages: [],
          work_experiences: [],
          education: null,
          education_level: null,
        },
        application_contacts: [],
        publication_date: "2020-11-20T14:11:57",
        last_publication_date: "2020-12-20T23:59:59",
        removed: false,
        removed_date: null,
        source_type: "VIA_PLATSBANKEN_DXA",
        timestamp: 1605877917680,
      },
      {
        relevance: 1,
        id: "885dc8c105f0ac13a846fa1fd23c54c1e7466966",
        external_id: "46-556984-5133-887274-1",
        original_id: "24075449",
        label: null,
        webpage_url:
          "https://arbetsformedlingen.se/platsbanken/annonser/885dc8c105f0ac13a846fa1fd23c54c1e7466966",
        logo_url:
          "https://www.arbetsformedlingen.se/rest/arbetsgivare/rest/af/v3/organisation/5569845133/logotyper/logo.png",
        headline: "Frontend utvecklare",
        application_deadline: "2020-11-11T23:59:59",
        number_of_vacancies: 1,
        description: {
          text: "Frontend utvecklare ? Följ med på vår resa!\nVill du bli en del av ett sammansvetsat team som står inför en spännande tillväxtfas? Då kan vi på Envoi stolt presentera ditt nästa uppdrag - som vår nya frontend utvecklare!\n\nUppdragsbeskrivning\nVi söker en frontend utvecklare med AngularJS.\n\nDu kommer att ingå i ett team av medarbetare på enheten för utveckling och förvaltning (VUF) som hanterar myndighetens olika förvaltningsuppdrag och utvecklingsprojekt.\n\nSka-krav (obligatoriska krav)\n- Dokumenterad och praktisk erfarenhet av arbete som frontend utvecklare i projekt under ett par års tid\n- 1 - 3 års dokumenterad och praktisk erfarenhet av AngularJS och TypeScript\n- 1 - 3 års dokumenterad och praktisk erfarenhet av Java REST-API ́er\n- 1 - 3 års dokumenterad och praktisk erfarenhet av GIT WorkFlow\n- Dokumenterad och praktisk erfarenhet av att arbeta agilt i enlighet med Scrum\n- Dokumenterad och praktisk erfarenhet av förvaltningsstyrningsstyrningsmodellen PM3\n- Konsulten ska vara certifierad Scrum Master\n- Konsulten ska behärska svenska och engelska i både tal och skrift.\n\n\nVarför ska du jobba hos oss?\nVi på Envoi AB kan erbjuda förmånliga attraktiva anställningsvillkor som professionell konsult hos oss där du själv är med och påverkar din lön och vi har naturligtvis kollektivavtal (Almega).\n\nSom konsult hos Envoi AB har du engagerade säljare som hittar uppdrag utifrån ditt intresse. Vi har kunder i hela Stockholm inom systemutveckling och teknik. Hos oss får du möjligheten att jobba i en bredd av branscher. Om du har en drivkraft att utvecklas och utmanas med stor flexibilitet, då är det en bra början att bli en del av vår Envoifamilj.\n\nDu också får tillgång till personlig utveckling på kort och lång sikt samt friskvårdsbidrag att utnyttja för fysisk aktivitet på fritiden.\n\nEnvoi AB har även infört ett förmånligt bonussystem som gör att vi tillsammans driver företaget framåt mot gemensamma mål.",
          text_formatted: null,
          company_information: null,
          needs: null,
          requirements: null,
          conditions: "Heltid\r\nAnställningstid enligt överenskommelse",
        },
        employment_type: {
          concept_id: "PFZr_Syz_cUq",
          label: "Vanlig anställning",
          legacy_ams_taxonomy_id: "1",
        },
        salary_type: {
          concept_id: "oG8G_9cW_nRf",
          label: "Fast månads- vecko- eller timlön",
          legacy_ams_taxonomy_id: "1",
        },
        salary_description: "Lön enligt överenskommelse",
        duration: {
          concept_id: "a7uU_j21_mkL",
          label: "Tillsvidare",
          legacy_ams_taxonomy_id: "1",
        },
        working_hours_type: {
          concept_id: "6YE1_gAC_R2G",
          label: "Heltid",
          legacy_ams_taxonomy_id: "1",
        },
        scope_of_work: {
          min: 100,
          max: 100,
        },
        access: null,
        employer: {
          phone_number: null,
          email: null,
          url: "http://www.envoi.se",
          organization_number: null,
          name: "Envoi AB",
          workplace: "Envoi AB",
        },
        application_details: {
          information: null,
          reference: null,
          email: null,
          via_af: false,
          url: "https://envoi.teamtailor.com/jobs/887274-frontend-utvecklare?promotion=160452-arbetsformedlingen",
          other: null,
        },
        experience_required: true,
        access_to_own_car: false,
        driving_license_required: false,
        driving_license: null,
        occupation: {
          concept_id: "GDHs_eoz_uKx",
          label: "Frontend-utvecklare",
          legacy_ams_taxonomy_id: "7633",
        },
        occupation_group: {
          concept_id: "DJh5_yyF_hEM",
          label: "Mjukvaru- och systemutvecklare m.fl.",
          legacy_ams_taxonomy_id: "2512",
        },
        occupation_field: {
          concept_id: "apaJ_2ja_LuF",
          label: "Data/IT",
          legacy_ams_taxonomy_id: "3",
        },
        workplace_address: {
          municipality: "Stockholm",
          municipality_code: "0180",
          municipality_concept_id: "AvNB_uwa_6n6",
          region: "Stockholms län",
          region_code: "01",
          region_concept_id: "CifL_Rzy_Mku",
          country: "Sverige",
          country_code: "199",
          country_concept_id: "i46j_HmG_v64",
          street_address: null,
          postcode: null,
          city: null,
          coordinates: [18.06858, 59.329323],
        },
        must_have: {
          skills: [],
          languages: [],
          work_experiences: [
            {
              weight: 10,
              concept_id: "GDHs_eoz_uKx",
              label: "Frontend-utvecklare",
              legacy_ams_taxonomy_id: "7633",
            },
          ],
          education: null,
          education_level: null,
        },
        nice_to_have: {
          skills: [],
          languages: [],
          work_experiences: [],
          education: null,
          education_level: null,
        },
        application_contacts: [],
        publication_date: "2020-05-25T14:40:10",
        last_publication_date: "2020-11-11T23:59:59",
        removed: false,
        removed_date: null,
        source_type: "VIA_PLATSBANKEN_DXA",
        timestamp: 1590410410325,
      },
    ],
  };

  return (
    <>
      <DigiLayoutContainer>
        <DigiTypography>
          <div className="total-presentation">
            <p>Totalt antal anonser : {mockData.total.value}</p>
            <p>Totalt antal jobb: {mockData.positions}</p>
          </div>
        </DigiTypography>
      </DigiLayoutContainer>
      <div>
        {mockData.hits.map((job) => (
          <div key={job.id}>
            <HistoricalJobsPresentation job={job} />
          </div>
        ))}
      </div>
    </>
  );
};
