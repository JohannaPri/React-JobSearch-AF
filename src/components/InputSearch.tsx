import {
  ButtonType,
  FormCheckboxVariation,
  FormInputSearchVariation,
  FormInputType,
  LayoutColumnsElement,
} from "@digi/arbetsformedlingen";
import {
  DigiFormCheckbox,
  DigiFormFilter,
  DigiFormInputSearch,
  DigiLayoutColumns,
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";

import { DigiFormInputSearchCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { FormEvent, useState } from "react";
import { IUserFilter } from "../models/IUserFilter";
//import { getJobs } from "../services/jobSearchService";
//import { JobsContext } from "../contexts/JobsContext";
//import { ActionJobSearchType } from "../reducers/jobSearchReducer";

export const InputSearch = () => {
  // const { dispatch } = useContext(JobsContext);

  const [userFilter, setUserFilter] = useState<IUserFilter>({
    searchText: "",
    experience: false,
    trainee: false,
    remote: false,
  });

  const handleClick = async (e: FormEvent) => {
    e.preventDefault();

    console.log(userFilter);
    //const searchedJobs = await getJobs(userFilter);
    //dispatch({ type: ActionJobSearchType.SEARCH, payload: searchedJobs });
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
          onClick={handleClick}
        ></DigiFormInputSearch>

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
