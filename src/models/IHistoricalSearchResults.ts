import { INumberOfHits } from "./INumberOfHits";

export interface IHistoricalSearchResult {
  key: number;
  total: INumberOfHits;
  positions: number;
}
