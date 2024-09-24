import { IJobAdDescription } from "./IJobAdDescription";
import { IJobTechTaxonomyItem } from "./IJobTexhTaxonomyItem";

export interface IJobAd {
    id: string;
    headline: string;
    application_deadline: string;
    number_of_vacancies: string;
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
    occupation_address: IJobTechTaxonomyItem;
    workplace_address: IWorkPlaceAddress;
    must_have: IRequirements;
    nice_to_have: IRequirements;
    publication_date: string;
    last_publication_date: string;
    removed: boolean;
    removed_date: string;
    timestamp: BigInteger;
}