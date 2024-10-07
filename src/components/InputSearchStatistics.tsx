import {
  LayoutBlockVariation,
  FormInputSearchVariation,
  FormInputType,
  ButtonType,
} from "@digi/arbetsformedlingen";
import {
  DigiLayoutContainer,
  DigiLayoutBlock,
  DigiTypography,
  DigiFormInputSearch,
  DigiCalendarDatepicker,
} from "@digi/arbetsformedlingen-react";
import {
  DigiCalendarDatepickerCustomEvent,
  DigiFormInputSearchCustomEvent,
} from "@digi/arbetsformedlingen/dist/types/components";
import { useContext, useState } from "react";
import { IHistoricalSearchFilter } from "../models/IHistoricalSearchFilter";
import { JobsHistoryContext } from "../contexts/jobsHistoryContext";
import { ActionJobSearchType } from "../reducers/jobHistorySearchReducer";
import { getHistoricalJobs } from "../services/jobHistoryService";
import { NoAds } from "./NoAds";

export const InputSearchStatistics = () => {
  const { dispatch } = useContext(JobsHistoryContext);

  const [historicalSearchFilter, setHistoricalSearchFilter] =
    useState<IHistoricalSearchFilter>({
      searchText: "",
      dateFrom: new Date(),
      dateTo: new Date(),
    });

  const [errorMessage, setErrorMessage] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleClick = async (e: DigiFormInputSearchCustomEvent<object>) => {
    e.preventDefault();

    if (
      !historicalSearchFilter.searchText.trim() ||
      isNaN(historicalSearchFilter.dateFrom.getTime()) ||
      isNaN(historicalSearchFilter.dateTo.getTime())
    ) {
      console.log("blev ingen sökning");

      setErrorMessage("Kontrollera att alla fält är korrekt ifyllda");
      return;
    }

    setErrorMessage("");

    setHistoricalSearchFilter(historicalSearchFilter);
    const searchedHistoricalJobs = await getHistoricalJobs(
      historicalSearchFilter
    );
    console.log("sökning", searchedHistoricalJobs);
    dispatch({
      type: ActionJobSearchType.SEARCH,
      payload: searchedHistoricalJobs,
    });

    if (searchedHistoricalJobs.length === 0) {
      setNoResults(true);
    } else setNoResults(false);

    console.log("sökning gjord");
  };

  return (
    <>
      <DigiLayoutContainer>
        <DigiLayoutBlock
          afMarginBottom={true}
          afVariation={LayoutBlockVariation.TRANSPARENT}
        >
          <DigiTypography>
            <div className="padding-heading">
              <h1>Sök på historiska jobbannonser (2016-2023)</h1>
            </div>
          </DigiTypography>
          <div className="date-search-container">
            <DigiCalendarDatepicker
              afId="dateFrom"
              afMinDate={new Date("2016-01-01")}
              afMaxDate={new Date("2023-04-30")}
              afCloseOnSelect={true}
              afLabel="Välj ett datum från"
              afLabelDescription="Ex. 2019-03-11"
              afRequired={true}
              afValidationWrongFormat="Fel datumformat"
              onAfOnDateChange={(
                e: DigiCalendarDatepickerCustomEvent<object>
              ) =>
                setHistoricalSearchFilter((historicalSearch) => ({
                  ...historicalSearch,
                  dateFrom: new Date(e.target.value.toString()),
                }))
              }
              onFocus={() => {
                setErrorMessage("");
              }}
            />
            <DigiCalendarDatepicker
              afId="dateTo"
              afMinDate={new Date("2016-01-01")}
              afMaxDate={new Date("2023-04-30")}
              afCloseOnSelect={true}
              afLabel="Välj ett datum till"
              afLabelDescription="Ex. 2020-01-22"
              afRequired={true}
              afValidationWrongFormat="Fel datumformat"
              onAfOnDateChange={(
                e: DigiCalendarDatepickerCustomEvent<object>
              ) =>
                setHistoricalSearchFilter((historicalSearch) => ({
                  ...historicalSearch,
                  dateTo: new Date(e.target.value.toString()),
                }))
              }
              onFocus={() => {
                setErrorMessage("");
              }}
            />
          </div>
          <div className="search-container">
            <DigiFormInputSearch
              afLabel="Ex. Frontend Developer Stockholm (obligatoriskt)"
              afVariation={FormInputSearchVariation.SMALL}
              afType={FormInputType.SEARCH}
              afButtonText="Sök"
              afButtonType={ButtonType.SUBMIT}
              afButtonAriaLabel="Sökfält för att söka jobb"
              afValue={historicalSearchFilter.searchText}
              onAfOnChange={(e: DigiFormInputSearchCustomEvent<string>) => {
                historicalSearchFilter.searchText = e.target.value;
              }}
              onAfOnClick={handleClick}
              onFocus={() => {
                setErrorMessage("");
              }}
            />
            {errorMessage && (
              <DigiTypography>
                <p className="error-message pop-animation">{errorMessage}</p>
              </DigiTypography>
            )}
          </div>
        </DigiLayoutBlock>
      </DigiLayoutContainer>
      {noResults && <NoAds></NoAds>}
    </>
  );
};
