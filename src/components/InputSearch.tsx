import {
  ButtonType,
  FormInputSearchVariation,
  FormInputType,
  LayoutBlockVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiFormInputSearch,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";

import { DigiFormInputSearchCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { useContext, useState } from "react";
import { getJobs } from "../services/jobSearchService";
import { JobsContext } from "../contexts/JobsContext";
import { ActionJobSearchType } from "../reducers/jobSearchReducer";
import { RegionFilter } from "./RegionFilter";
import { OtherFilter } from "./OtherFilter";
import { NoAds } from "./NoAds";
import { UserFilterJobSearchContext } from "../contexts/UserFilterJobSearchContext";
import { ActionUserFilterType } from "../reducers/UserFilterJobReducer";
import { PaddingHeading } from "./styled/Wrappers";

export const InputSearch = () => {
  const { dispatch } = useContext(JobsContext);
  const { userFilter, filterDispatch } = useContext(UserFilterJobSearchContext);
  const [noResults, setNoResults] = useState(false);

  const handleClick = async (e: DigiFormInputSearchCustomEvent<object>) => {
    e.preventDefault();
    filterDispatch({
      type: ActionUserFilterType.CHANGE_PAGE,
      payload: userFilter,
    });
    const searchedJobs = await getJobs(userFilter);
    dispatch({ type: ActionJobSearchType.SEARCH, payload: searchedJobs });

    if (searchedJobs.hits.length === 0) {
      console.log("no results");

      setNoResults(true);
    } else setNoResults(false);
  };

  return (
    <>
      <DigiLayoutContainer>
        <DigiLayoutBlock
          afMarginBottom={true}
          afVariation={LayoutBlockVariation.TRANSPARENT}
        >
          <DigiTypography>
            <PaddingHeading>
              <h1>Sök på jobb</h1>
            </PaddingHeading>
          </DigiTypography>
          <div className="search-container">
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
          </div>

          <div className="filter-button">
            <RegionFilter userFilter={userFilter}></RegionFilter>
            <OtherFilter userFilter={userFilter}></OtherFilter>
          </div>
        </DigiLayoutBlock>
        {noResults && <NoAds></NoAds>}
      </DigiLayoutContainer>
    </>
  );
};
