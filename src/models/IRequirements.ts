import { IWeightedJobtechTaxonomyItem } from './IWeightedJobtechTaxonomyItem';

export interface IRequirements {
    skills: IWeightedJobtechTaxonomyItem[];
    languages: IWeightedJobtechTaxonomyItem[];
    work_experiences: IWeightedJobtechTaxonomyItem[];
    education: IWeightedJobtechTaxonomyItem[];
    education_level: IWeightedJobtechTaxonomyItem[];
}

