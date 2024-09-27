// import { useContext } from "react";
import { IJobAd } from "../models/IJobAd";
import { Job } from "./Job";

const mockData: IJobAd[] = [
  {
    id: "29132316",

    headline: "Software Engineer",
    application_deadline: "2025-03-15T23:59:59",
    number_of_vacancies: 1,
    description: {
      text: "About Mindler\nMindler was founded in 2018 by two psychologists and a doctor with a shared vision of creating a world with improved mental health. Thanks to our dedicated tech teams, who developed our app and iCBT modules, Mindler has emerged as a leading provider, transforming the mental health industry.\nOur tech organization is split into three teams: Growth, Treatment and Operational Efficiency. All teams work full-stack across our different applications like the patient app, psychologist web platform and back office systems.\nThe role:\nBeing part of our Treatment Team, you will play a key role in shaping the patient treatment journey — from their first booking through to their therapy sessions and journal entries. You will work in a close-knit team together with our product manager, helping to build web-based tools for them, as well as ensuring smooth integrations with external journal systems and delivering iCBT content to the app via our CMS (Contentful). Our tech stack is focused on Typescript on AWS (with some exceptions in GCP). Additionally, we are constantly exploring new tools and enhancing our platform to improve patient outcomes.\nIf you’re passionate about developing innovative solutions that have a real impact on people’s mental health, this is the role for you!\nWhat you’ll be doing:\n \nbuild and enhance web-based tools for psychologists and other healthcare professionals.\n\n \nWork in a cross-functional team including developers, designer, content writer and PM.\n\n \nYou will develop features in our patient-facing app, including delivering content from our CMS.\n\n \nDevelop and maintain backend integrations with journal systems.\n\n \nWork with new tools and explore new technologies that can enhance the mental health treatment journey.\n\n \nEnsure the platform remains secure and compliant, keeping patient data safe and maintaining high compliance standards.\n\n \nContinuously improve development processes to deliver features with quality code and faster time-to-market.\n\n \nWho are you? \nYou have a bachelor in computer science (or equivalent) and 3+ years of experience developing web applications with a strong focus on backend development. Your expertise includes working with TypeScript and NodeJS, and you have substantial experience in SQL databases.\nYour background in modern software development teams is complemented by hands-on experience with Cloud providers like AWS, and proficiency in GitHub Actions or similar CI/CD tools. You also have a solid grasp of automated testing practices. While these are the core technologies we use, we value adaptability and a proactive mindset above all.\nIt’s a plus if you have experience with:\n \nMicroservices\n\n \nCDK / CloudFormation\n\n \ntRPC\n\n \nCMS (Contentful)\n\n \nReact Native\n\n \nObservability / Datadog\n\n \nMedical Compliance\n\n \nISO Compliance (e.g. ISO 27001 or ISO 13485)\n\n \nWhat can we offer?\nIf you thrive on collaborating with talented colleagues in the office, but also appreciate the flexibility to work remotely, we could be a great match. We offer a diverse role that emphasizes work-life balance, including tech-driven social activities to foster creativity and innovation. For example we arrange hack weeks, table tennis tournaments, board game nights, etc. There are also parties and physical well-being activities together with the rest of the organization. \nYou’ll be surrounded by inspiring engineers in a dynamic, forward-thinking environment. This gives you the opportunity to contribute to a company on a mission to make a meaningful impact on the global market of improving digital mental healthcare.\nWe are looking forward to hearing from you!\n–-\nMindler is an equal opportunity employer. All qualified applicants will be considered for employment without regard to gender, gender identity or expression, national origin, religion or other beliefs, disability, sexual orientation or age.",
      text_formatted:
        "<p><strong>About Mindler</strong></p><p>Mindler was founded in 2018 by two psychologists and a doctor with a shared vision of creating a world with improved mental health. Thanks to our dedicated tech teams, who developed our app and iCBT modules, Mindler has emerged as a leading provider, transforming the mental health industry.</p><p>Our tech organization is split into three teams: Growth, Treatment and Operational Efficiency. All teams work full-stack across our different applications like the patient app, psychologist web platform and back office systems.</p><p><strong>The role:</strong></p><p>Being part of our Treatment Team, you will play a key role in shaping the patient treatment journey — from their first booking through to their therapy sessions and journal entries. You will work in a close-knit team together with our product manager, helping to build web-based tools for them, as well as ensuring smooth integrations with external journal systems and delivering iCBT content to the app via our CMS (Contentful). Our tech stack is focused on Typescript on AWS (with some exceptions in GCP). Additionally, we are constantly exploring new tools and enhancing our platform to improve patient outcomes.</p><p>If you’re passionate about developing innovative solutions that have a real impact on people’s mental health, this is the role for you!</p><p><strong>What you’ll be doing:</strong></p><ul> <li><p>build and enhance web-based tools for psychologists and other healthcare professionals.</p></li> <li><p>Work in a cross-functional team including developers, designer, content writer and PM.</p></li> <li><p>You will develop features in our patient-facing app, including delivering content from our CMS.</p></li> <li><p>Develop and maintain backend integrations with journal systems.</p></li> <li><p>Work with new tools and explore new technologies that can enhance the mental health treatment journey.</p></li> <li><p>Ensure the platform remains secure and compliant, keeping patient data safe and maintaining high compliance standards.</p></li> <li><p>Continuously improve development processes to deliver features with quality code and faster time-to-market.</p></li> </ul><p><strong>Who are you? </strong></p><p>You have a bachelor in computer science (or equivalent) and 3+ years of experience developing web applications with a strong focus on backend development. Your expertise includes working with TypeScript and NodeJS, and you have substantial experience in SQL databases.</p><p>Your background in modern software development teams is complemented by hands-on experience with Cloud providers like AWS, and proficiency in GitHub Actions or similar CI/CD tools. You also have a solid grasp of automated testing practices. While these are the core technologies we use, we value adaptability and a proactive mindset above all.</p><p><strong>It’s a plus if you have experience with:</strong></p><ul> <li><p>Microservices</p></li> <li><p>CDK / CloudFormation</p></li> <li><p>tRPC</p></li> <li><p>CMS (Contentful)</p></li> <li><p>React Native</p></li> <li><p>Observability / Datadog</p></li> <li><p>Medical Compliance</p></li> <li><p>ISO Compliance (e.g. ISO 27001 or ISO 13485)</p></li> </ul><p><strong>What can we offer?</strong></p><p>If you thrive on collaborating with talented colleagues in the office, but also appreciate the flexibility to work remotely, we could be a great match. We offer a diverse role that emphasizes work-life balance, including tech-driven social activities to foster creativity and innovation. For example we arrange hack weeks, table tennis tournaments, board game nights, etc. There are also parties and physical well-being activities together with the rest of the organization. </p><p>You’ll be surrounded by inspiring engineers in a dynamic, forward-thinking environment. This gives you the opportunity to contribute to a company on a mission to make a meaningful impact on the global market of improving digital mental healthcare.</p><p>We are looking forward to hearing from you!</p><p><em>–-</em></p><p><em>Mindler is an equal opportunity employer. All qualified applicants will be considered for employment without regard to gender, gender identity or expression, national origin, religion or other beliefs, disability, sexual orientation or age.</em></p>",
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

    duration: {
      concept_id: "a7uU_j21_mkL",
      label: "Tills vidare",
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

    employer: {
      phone_number: null,
      email: null,
      url: "https://mindlercare.com/",
      organization_number: "5591500722",
      name: "Mindler AB",
      workplace: "Mindler",
    },
    application_details: {
      information: null,
      reference: null,
      email: null,
      via_af: false,
      url: "https://career.mindlercare.com/jobs/5018715-software-engineer?promotion=1164342-arbetsformedlingen",
      other: null,
    },
    experience_required: true,
    access_to_own_car: false,
    driving_license_required: false,

    occupation: {
      concept_id: "fg7B_yov_smw",
      label: "Systemutvecklare/Programmerare",
      legacy_ams_taxonomy_id: "2419",
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
          concept_id: "fg7B_yov_smw",
          label: "Systemutvecklare/Programmerare",
          legacy_ams_taxonomy_id: "2419",
        },
      ],
      education: [],
      education_level: [],
    },
    nice_to_have: {
      skills: [],
      languages: [],
      work_experiences: [],
      education: [],
      education_level: [],
    },
    publication_date: "2024-09-26T10:02:06",
    last_publication_date: "2025-03-15T23:59:59",
    removed: false,
    removed_date: null,
    occupation_address: {
      concept_id: null,
      label: null,
      legacy_ams_taxonomy_id: null,
    },
    timestamp: 1727337726868,
  },
  {
    id: "29132316",

    headline: "Software Engineer",
    application_deadline: "2025-03-15T23:59:59",
    number_of_vacancies: 1,
    description: {
      text: "About Mindler\nMindler was founded in 2018 by two psychologists and a doctor with a shared vision of creating a world with improved mental health. Thanks to our dedicated tech teams, who developed our app and iCBT modules, Mindler has emerged as a leading provider, transforming the mental health industry.\nOur tech organization is split into three teams: Growth, Treatment and Operational Efficiency. All teams work full-stack across our different applications like the patient app, psychologist web platform and back office systems.\nThe role:\nBeing part of our Treatment Team, you will play a key role in shaping the patient treatment journey — from their first booking through to their therapy sessions and journal entries. You will work in a close-knit team together with our product manager, helping to build web-based tools for them, as well as ensuring smooth integrations with external journal systems and delivering iCBT content to the app via our CMS (Contentful). Our tech stack is focused on Typescript on AWS (with some exceptions in GCP). Additionally, we are constantly exploring new tools and enhancing our platform to improve patient outcomes.\nIf you’re passionate about developing innovative solutions that have a real impact on people’s mental health, this is the role for you!\nWhat you’ll be doing:\n \nbuild and enhance web-based tools for psychologists and other healthcare professionals.\n\n \nWork in a cross-functional team including developers, designer, content writer and PM.\n\n \nYou will develop features in our patient-facing app, including delivering content from our CMS.\n\n \nDevelop and maintain backend integrations with journal systems.\n\n \nWork with new tools and explore new technologies that can enhance the mental health treatment journey.\n\n \nEnsure the platform remains secure and compliant, keeping patient data safe and maintaining high compliance standards.\n\n \nContinuously improve development processes to deliver features with quality code and faster time-to-market.\n\n \nWho are you? \nYou have a bachelor in computer science (or equivalent) and 3+ years of experience developing web applications with a strong focus on backend development. Your expertise includes working with TypeScript and NodeJS, and you have substantial experience in SQL databases.\nYour background in modern software development teams is complemented by hands-on experience with Cloud providers like AWS, and proficiency in GitHub Actions or similar CI/CD tools. You also have a solid grasp of automated testing practices. While these are the core technologies we use, we value adaptability and a proactive mindset above all.\nIt’s a plus if you have experience with:\n \nMicroservices\n\n \nCDK / CloudFormation\n\n \ntRPC\n\n \nCMS (Contentful)\n\n \nReact Native\n\n \nObservability / Datadog\n\n \nMedical Compliance\n\n \nISO Compliance (e.g. ISO 27001 or ISO 13485)\n\n \nWhat can we offer?\nIf you thrive on collaborating with talented colleagues in the office, but also appreciate the flexibility to work remotely, we could be a great match. We offer a diverse role that emphasizes work-life balance, including tech-driven social activities to foster creativity and innovation. For example we arrange hack weeks, table tennis tournaments, board game nights, etc. There are also parties and physical well-being activities together with the rest of the organization. \nYou’ll be surrounded by inspiring engineers in a dynamic, forward-thinking environment. This gives you the opportunity to contribute to a company on a mission to make a meaningful impact on the global market of improving digital mental healthcare.\nWe are looking forward to hearing from you!\n–-\nMindler is an equal opportunity employer. All qualified applicants will be considered for employment without regard to gender, gender identity or expression, national origin, religion or other beliefs, disability, sexual orientation or age.",
      text_formatted:
        "<p><strong>About Mindler</strong></p><p>Mindler was founded in 2018 by two psychologists and a doctor with a shared vision of creating a world with improved mental health. Thanks to our dedicated tech teams, who developed our app and iCBT modules, Mindler has emerged as a leading provider, transforming the mental health industry.</p><p>Our tech organization is split into three teams: Growth, Treatment and Operational Efficiency. All teams work full-stack across our different applications like the patient app, psychologist web platform and back office systems.</p><p><strong>The role:</strong></p><p>Being part of our Treatment Team, you will play a key role in shaping the patient treatment journey — from their first booking through to their therapy sessions and journal entries. You will work in a close-knit team together with our product manager, helping to build web-based tools for them, as well as ensuring smooth integrations with external journal systems and delivering iCBT content to the app via our CMS (Contentful). Our tech stack is focused on Typescript on AWS (with some exceptions in GCP). Additionally, we are constantly exploring new tools and enhancing our platform to improve patient outcomes.</p><p>If you’re passionate about developing innovative solutions that have a real impact on people’s mental health, this is the role for you!</p><p><strong>What you’ll be doing:</strong></p><ul> <li><p>build and enhance web-based tools for psychologists and other healthcare professionals.</p></li> <li><p>Work in a cross-functional team including developers, designer, content writer and PM.</p></li> <li><p>You will develop features in our patient-facing app, including delivering content from our CMS.</p></li> <li><p>Develop and maintain backend integrations with journal systems.</p></li> <li><p>Work with new tools and explore new technologies that can enhance the mental health treatment journey.</p></li> <li><p>Ensure the platform remains secure and compliant, keeping patient data safe and maintaining high compliance standards.</p></li> <li><p>Continuously improve development processes to deliver features with quality code and faster time-to-market.</p></li> </ul><p><strong>Who are you? </strong></p><p>You have a bachelor in computer science (or equivalent) and 3+ years of experience developing web applications with a strong focus on backend development. Your expertise includes working with TypeScript and NodeJS, and you have substantial experience in SQL databases.</p><p>Your background in modern software development teams is complemented by hands-on experience with Cloud providers like AWS, and proficiency in GitHub Actions or similar CI/CD tools. You also have a solid grasp of automated testing practices. While these are the core technologies we use, we value adaptability and a proactive mindset above all.</p><p><strong>It’s a plus if you have experience with:</strong></p><ul> <li><p>Microservices</p></li> <li><p>CDK / CloudFormation</p></li> <li><p>tRPC</p></li> <li><p>CMS (Contentful)</p></li> <li><p>React Native</p></li> <li><p>Observability / Datadog</p></li> <li><p>Medical Compliance</p></li> <li><p>ISO Compliance (e.g. ISO 27001 or ISO 13485)</p></li> </ul><p><strong>What can we offer?</strong></p><p>If you thrive on collaborating with talented colleagues in the office, but also appreciate the flexibility to work remotely, we could be a great match. We offer a diverse role that emphasizes work-life balance, including tech-driven social activities to foster creativity and innovation. For example we arrange hack weeks, table tennis tournaments, board game nights, etc. There are also parties and physical well-being activities together with the rest of the organization. </p><p>You’ll be surrounded by inspiring engineers in a dynamic, forward-thinking environment. This gives you the opportunity to contribute to a company on a mission to make a meaningful impact on the global market of improving digital mental healthcare.</p><p>We are looking forward to hearing from you!</p><p><em>–-</em></p><p><em>Mindler is an equal opportunity employer. All qualified applicants will be considered for employment without regard to gender, gender identity or expression, national origin, religion or other beliefs, disability, sexual orientation or age.</em></p>",
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

    duration: {
      concept_id: "a7uU_j21_mkL",
      label: "Tills vidare",
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

    employer: {
      phone_number: null,
      email: null,
      url: "https://mindlercare.com/",
      organization_number: "5591500722",
      name: "Mindler AB",
      workplace: "Mindler",
    },
    application_details: {
      information: null,
      reference: null,
      email: null,
      via_af: false,
      url: "https://career.mindlercare.com/jobs/5018715-software-engineer?promotion=1164342-arbetsformedlingen",
      other: null,
    },
    experience_required: true,
    access_to_own_car: false,
    driving_license_required: false,

    occupation: {
      concept_id: "fg7B_yov_smw",
      label: "Systemutvecklare/Programmerare",
      legacy_ams_taxonomy_id: "2419",
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
          concept_id: "fg7B_yov_smw",
          label: "Systemutvecklare/Programmerare",
          legacy_ams_taxonomy_id: "2419",
        },
      ],
      education: [],
      education_level: [],
    },
    nice_to_have: {
      skills: [],
      languages: [],
      work_experiences: [],
      education: [],
      education_level: [],
    },
    publication_date: "2024-09-26T10:02:06",
    last_publication_date: "2025-03-15T23:59:59",
    removed: false,
    removed_date: null,
    occupation_address: {
      concept_id: null,
      label: null,
      legacy_ams_taxonomy_id: null,
    },
    timestamp: 1727337726868,
  },
];

export const Jobs = () => {
  // const jobs = useContext(JobsContext);
  return (
    <>
      <ul>
        {mockData.map((job) => (
          <Job key={job.id}></Job>
        ))}
      </ul>
    </>
  );
};
