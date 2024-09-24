export interface WorkplaceAddress {
    municipality: string;
    municipality_code: string;
    municipality_concept_id: string;
    region: string;
    region_code: string;
    region_concept_id: string;
    country: string;
    country_code: string;
    country_concept_id: string;
    street_address: string;
    postcode: string;
    city: string;
    coordinates: [number, number];
}