import { INumberOfHits } from "./INumberOfHits";

export interface IHistoricalSearchResult {
    total: INumberOfHits;
    positions: number;
}