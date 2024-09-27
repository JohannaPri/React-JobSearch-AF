import {
  ButtonType,
  FormInputSearchVariation,
  FormInputType,
} from "@digi/arbetsformedlingen";
import {
  DigiFormInputSearch,
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";

import { DigiFormInputSearchCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { useContext, useState } from "react";
import { IUserFilter } from "../models/IUserFilter";
import { getJobs } from "../services/jobSearchService";
import { JobsContext } from "../contexts/JobsContext";
import { ActionJobSearchType } from "../reducers/jobSearchReducer";
import { RegionFilter } from "./RegionFilter";
import { OtherFilter } from "./OtherFilter";

export const InputSearch = () => {
   const { dispatch } = useContext(JobsContext);

  const [userFilter, setUserFilter] = useState<IUserFilter>({
    searchText: "",
    experience: false,
    trainee: false,
    remote: false,
    region: []
  });

  const handleClick = async (e: DigiFormInputSearchCustomEvent<object>) => {
    e.preventDefault();
    
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
      <RegionFilter userFilter={userFilter}></RegionFilter>
      <OtherFilter userFilter={userFilter}></OtherFilter>

       
      </DigiLayoutContainer>
    </>
  );
};
