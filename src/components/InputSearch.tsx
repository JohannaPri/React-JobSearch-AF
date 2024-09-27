import {
  ButtonType,
  FormInputSearchVariation,
  FormInputType,
} from "@digi/arbetsformedlingen";
import {
  DigiFormFilter,
  DigiFormInputSearch,
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";

import { DigiFormInputSearchCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { FormEvent, useContext, useEffect, useState } from "react";
import { IUserFilter } from "../models/IUserFilter";
import { getTaxonomyRegions } from "../services/jobSearchService";
import { TaxonomyRegions } from "../models/ITaxonomyRegion";
import { getJobs } from "../services/jobSearchService";
import { JobsContext } from "../contexts/JobsContext";
import { ActionJobSearchType } from "../reducers/jobSearchReducer";

export const InputSearch = () => {
   const { dispatch } = useContext(JobsContext);
  const [taxonomy, setTaxonomy] = useState<TaxonomyRegions[] | undefined>([]);
  const [fetched, setFetched] =useState(false);

  useEffect(() => {
    if(fetched) return
    const getRegions = async () => {
      const data = await getTaxonomyRegions();
      setTaxonomy(data)
      setFetched(true)
    }

    getRegions()
  })
  

  const [userFilter, setUserFilter] = useState<IUserFilter>({
    searchText: "",
    experience: false,
    trainee: false,
    remote: false,
    region: []
  });

  const handleClick = async (e: DigiFormInputSearchCustomEvent<object>) => {
    e.preventDefault();

    console.log(userFilter);
    const searchedJobs = await getJobs(userFilter);
    dispatch({ type: ActionJobSearchType.SEARCH, payload: searchedJobs });
  };

  return (
    <>
      <DigiLayoutContainer className="search-container">
        <DigiTypography>
          <h1>Sök på jobb</h1>
        </DigiTypography>
        <DigiFormInputSearch
          afLabel="Ex. Frontend Developer Stockholm"
          afVariation={FormInputSearchVariation.SMALL}
          afType={FormInputType.SEARCH}
          afButtonText="Sök"
          afButtonType={ButtonType.SUBMIT}
          afButtonAriaLabel="Sökfält för att söka jobb"
          afValue={userFilter.searchText}
          onAfOnChange={(e: DigiFormInputSearchCustomEvent<string>) => {
            userFilter.searchText = e.target.value;
          }}
          onAfOnClick={handleClick}
        ></DigiFormInputSearch>

<DigiFormFilter
          afFilterButtonText="Välj Län"
          afSubmitButtonText="Filtrera"
          afListItems={taxonomy?.map((tax) => ( {id: tax['taxonomy/id'], label: tax["taxonomy/preferred-label"]}))}
          onAfChangeFilter={(e) => console.log(e.detail.id, e.detail.isChecked)}
          onAfResetFilter={() => console.log("reset filter")}
          onAfSubmitFilter={(e) => userFilter.region = e.detail.checked}
          onAfCloseFilter={(e) =>
            console.log("submit filter", e.detail.listItems, e.detail.checked)
          }
        ></DigiFormFilter>

        <DigiFormFilter
          afFilterButtonText="Filter"
          afSubmitButtonText="Filtrera"
          afListItems={[
            { id: "experience", label: "Experience" },
            { id: "remote", label: "Remote" },
            { id: "trainee", label: "Trainee" },
          ]}
          onAfChangeFilter={(e) => console.log(e.detail.id, e.detail.isChecked)}
          onAfResetFilter={() => console.log("reset filter")}
          onAfSubmitFilter={(e) =>
            e.detail.checked.forEach((check) => {
              if (check === "experience") userFilter.experience = true;
              if (check === "remote") userFilter.remote = true;
              if (check === "trainee") userFilter.trainee = true;
            })
          }
          onAfCloseFilter={(e) =>
            console.log("submit filter", e.detail.listItems, e.detail.checked)
          }
        ></DigiFormFilter>
      </DigiLayoutContainer>
    </>
  );
};
