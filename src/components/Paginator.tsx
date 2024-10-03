import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import { useContext } from "react";
import { JobsContext } from "../contexts/JobsContext";
import { DigiNavigationPaginationCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { UserFilterJobSearchContext } from "../contexts/UserFilterJobSearchContext";
import { ActionJobSearchType } from "../reducers/jobSearchReducer";
import { getJobs } from "../services/jobSearchService";

export const Paginator = () => {
  const { jobs, dispatch } = useContext(JobsContext);

  const { userFilter } = useContext(UserFilterJobSearchContext);

  const handleClick = async (
    e: DigiNavigationPaginationCustomEvent<number>
  ) => {
    userFilter.offset = (e.detail - 1) * 10;
    const searchedJobs = await getJobs(userFilter);
    dispatch({ type: ActionJobSearchType.SEARCH, payload: searchedJobs });
  };
  return (
    <>
      <DigiNavigationPagination
        afTotalPages={Math.ceil(jobs.total.value / 10)}
        afInitActive-page={1}
        afCurrentResultStart={1}
        afCurrentResultEnd={10}
        afTotalResults={jobs.total.value}
        afResultName="annonser"
        onAfOnPageChange={handleClick}
      ></DigiNavigationPagination>
    </>
  );
};
