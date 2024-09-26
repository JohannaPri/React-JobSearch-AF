import {
  ButtonType,
  FormCheckboxVariation,
  FormInputSearchVariation,
  FormInputType,
  LayoutColumnsElement,
} from "@digi/arbetsformedlingen";
import {
  DigiFormCheckbox,
  DigiFormInputSearch,
  DigiLayoutColumns,
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";

import { DigiFormInputSearchCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { FormEvent, useContext, useState } from "react";
import { IUserFilter } from "../models/IUserFilter";
import { getJobs } from "../services/jobSearchService";
import { JobsContext } from "../contexts/JobsContext";
import { ActionJobSearchType } from "../reducers/jobSearchReducer";

export const InputSearch = () => {
  const { dispatch } = useContext(JobsContext);

  const [userInput, setUserInput] = useState("");

  const [experience, setExperience] = useState(false);
  const [trainee, setTrainee] = useState(false);
  const [remote, setRemote] = useState(false);

  const handleClick = async (e: FormEvent) => {
    e.preventDefault();
    console.log("input", userInput);
    console.log("experience", experience);
    console.log("trainee", trainee);
    console.log("remote", remote);

    const userFilter: IUserFilter = {
      searchText: userInput,
      experience: experience,
      trainee: trainee,
      remote: remote,
    };
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
          afValue={userInput}
          onAfOnChange={(e: DigiFormInputSearchCustomEvent<string>) => {
            setUserInput(e.target.value);
          }}
          onClick={handleClick}
        ></DigiFormInputSearch>

        <DigiLayoutColumns afElement={LayoutColumnsElement.DIV}>
          <DigiFormCheckbox
            afLabel="Erfarenhet"
            afVariation={FormCheckboxVariation.PRIMARY}
            onAfOnChange={() => setExperience(!experience)}
          />
          <DigiFormCheckbox
            afLabel="Distans arbete"
            afVariation={FormCheckboxVariation.PRIMARY}
            onAfOnChange={() => setRemote(!remote)}
          />
          <DigiFormCheckbox
            afLabel="Praktikant/LIA"
            afVariation={FormCheckboxVariation.PRIMARY}
            onAfOnChange={() => setTrainee(!trainee)}
          />
        </DigiLayoutColumns>
      </DigiLayoutContainer>
    </>
  );
};
