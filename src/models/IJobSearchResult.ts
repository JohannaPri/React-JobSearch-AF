import { IJobAd } from "./IJobAd";
import { INumberOfHits } from "./INumberOfHits";

export interface IJobSearchResults {
    total: INumberOfHits;
    positions: number;
    hits: IJobAd[]
}