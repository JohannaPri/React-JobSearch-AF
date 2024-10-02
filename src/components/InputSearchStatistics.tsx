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

export const InputSearchStatistics = () => {
  const { dispatch } = useContext(JobsHistoryContext);

  const [historicalSearchFilter, setHistoricalSearchFilter] =
    useState<IHistoricalSearchFilter>({
      searchText: "",
      dateFrom: new Date(),
      dateTo: new Date(),
    });

  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = async (e: DigiFormInputSearchCustomEvent<object>) => {
    e.preventDefault();

    const today = new Date().toISOString().split("T")[0];

    if (
      !historicalSearchFilter.searchText.trim() ||
      historicalSearchFilter.dateFrom.toISOString().split("T")[0] === today ||
      historicalSearchFilter.dateTo.toISOString().split("T")[0] === today
    ) {
      setErrorMessage("Kontrollera att alla fält är korrekt ifyllda");
      return;
    }

    setErrorMessage("");

    setHistoricalSearchFilter(historicalSearchFilter);
    const searchedHistoricalJobs = await getHistoricalJobs(
      historicalSearchFilter
    );
    dispatch({
      type: ActionJobSearchType.SEARCH,
      payload: searchedHistoricalJobs,
    });

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
            <h1>Sök på historiska jobbannonser (2016-2023)</h1>
          </DigiTypography>

          <DigiLayoutContainer>
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
            />
            <DigiCalendarDatepicker
              afId="dateTo"
              afMinDate={new Date("2016-01-01")}
              afMaxDate={new Date("2023-04-30")}
              afCloseOnSelect={true}
              afLabel="Välj ett datum till"
              afLabelDescription="Ex. 2020-01-22"
              afRequired={true}
              onAfOnDateChange={(
                e: DigiCalendarDatepickerCustomEvent<object>
              ) =>
                setHistoricalSearchFilter((historicalSearch) => ({
                  ...historicalSearch,
                  dateTo: new Date(e.target.value.toString()),
                }))
              }
            />
            <DigiFormInputSearch
              afLabel="Välj ett datumintervall och skriv in ett sökord (obligatoriskt)"
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
            />
            {errorMessage && (
              <DigiTypography>
                <p>{errorMessage}</p>
              </DigiTypography>
            )}
          </DigiLayoutContainer>
        </DigiLayoutBlock>
      </DigiLayoutContainer>
    </>
  );
};
