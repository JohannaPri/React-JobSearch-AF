import { DigiFormFilter } from "@digi/arbetsformedlingen-react";
import { IFilterProps } from "./RegionFilter";

export const OtherFilter = ({userFilter}: IFilterProps) => {

    return<>
         <DigiFormFilter
          afFilterButtonText="Filter"
          afSubmitButtonText="Filtrera"
          afListItems={[
            { id: "experience", label: "Experience" },
            { id: "remote", label: "Remote" },
            { id: "trainee", label: "Trainee" },
          ]}
          onAfSubmitFilter={(e) =>
            e.detail.checked.forEach((check) => {
              if (check === "experience") userFilter.experience = true;
              if (check === "remote") userFilter.remote = true;
              if (check === "trainee") userFilter.trainee = true;
            })
          }
          onAfCloseFilter={(e) =>
            e.detail.checked.forEach((check) => {
              if (check === "experience") userFilter.experience = true;
              if (check === "remote") userFilter.remote = true;
              if (check === "trainee") userFilter.trainee = true;
            })
          }
        ></DigiFormFilter>
    </>
}