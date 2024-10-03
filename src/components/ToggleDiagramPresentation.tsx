import { Dispatch } from "react";
import {
  ActionStatisticSearchType,
  IActionStatisticSearch,
} from "../reducers/showStatisticReducer";
import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";
import {
  DigiButton,
  DigiLayoutContainer,
} from "@digi/arbetsformedlingen-react";
import { DiagramPresentation } from "./DiagramPresentation";

interface IDiagramPresentationProps {
  show: boolean;
  dispatch: Dispatch<IActionStatisticSearch>;
}

export const ToggleDiagramPresentation = ({
  show,
  dispatch,
}: IDiagramPresentationProps) => {
  const handleClick = () => {
    dispatch({ type: ActionStatisticSearchType.TOGGLE, payload: !show });
  };

  return (
    <>
      <DigiLayoutContainer>
        <DigiButton
          afSize={ButtonSize.MEDIUM}
          afVariation={ButtonVariation.PRIMARY}
          afFullWidth={false}
          onAfOnClick={handleClick}
        >
          {show ? <span>Dölj Statistik</span> : <span>Visa Statistik</span>}
        </DigiButton>
      </DigiLayoutContainer>

      {show && <DiagramPresentation />}
    </>
  );
};
