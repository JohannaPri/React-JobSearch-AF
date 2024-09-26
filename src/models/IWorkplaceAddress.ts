export interface IWorkplaceAddress {
  municipality: string | null;
  municipality_code: string | null;
  municipality_concept_id: string | null;
  region: string | null;
  region_code: string | null;
  region_concept_id: string | null;
  country: string | null;
  country_code: string | null;
  country_concept_id: string | null;
  street_address: string | null;
  postcode: string | null;
  city: string | null;
  coordinates: [number, number];
}
