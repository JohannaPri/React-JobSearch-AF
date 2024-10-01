import { DigiFormFilter } from "@digi/arbetsformedlingen-react";
import { useState, useEffect } from "react";
import { TaxonomyRegions } from "../models/ITaxonomyRegion";
import { getTaxonomyRegions } from "../services/jobSearchService";
import { IUserFilter } from "../models/IUserFilter";

export interface IFilterProps {
  userFilter: IUserFilter;
}

export const RegionFilter = ({ userFilter }: IFilterProps) => {
  const [taxonomy, setTaxonomy] = useState<TaxonomyRegions[] | undefined>([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (fetched) return;
    const getRegions = async () => {
      const data = await getTaxonomyRegions();
      setTaxonomy(data);
      setFetched(true);
    };

    getRegions();
  });

  return (
    <>
      <DigiFormFilter
        afFilterButtonText="Välj Län"
        afSubmitButtonText="Filtrera"
        afFilterButtonAriaLabel="Välj län att filtrera sökningen med"
        afSubmitButtonTextAriaLabel="Filtrera sökningen"
        afListItems={taxonomy?.map((tax) => ({
          id: tax["taxonomy/id"],
          label: tax["taxonomy/preferred-label"],
        }))}
        onAfSubmitFilter={(e) => (userFilter.region = e.detail.checked)}
        onAfCloseFilter={(e) => (userFilter.region = e.detail.checked)}
      ></DigiFormFilter>
    </>
  );
};
