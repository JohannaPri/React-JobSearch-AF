import { IApplicationDetails } from "./IApplicationDetails";
import { IEmployer } from "./IEmployer";
import { IJobAdDescription } from "./IJobAdDescription";
import { IJobTechTaxonomyItem } from "./IJobTexhTaxonomyItem";

import { IScopeOfWork } from "./IScopeOfWork";


export interface IJobHistoricalAd {
    id: string | null;
    headline: string | null;
    application_deadline: string | null;
    number_of_vacancies: number;
    description: IJobAdDescription;
    employment_type: IJobTechTaxonomyItem;
    salary_type: IJobTechTaxonomyItem;
    duration: IJobTechTaxonomyItem;
    working_hours_type: IJobTechTaxonomyItem;
    scope_of_work: IScopeOfWork;
    employer: IEmployer;
    application_details: IApplicationDetails;
    experience_required: boolean;
    access_to_own_car: boolean;
    driving_license_required: boolean;
    occupation: IJobTechTaxonomyItem;
    occupation_group: IJobTechTaxonomyItem;
    occupation_field: IJobTechTaxonomyItem;
    publication_date: string | null;
    last_publication_date: string | null;
    removed: boolean;
    removed_date: string | null;
    timestamp: number;
  }