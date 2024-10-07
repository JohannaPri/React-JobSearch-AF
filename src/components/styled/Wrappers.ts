import styled from "styled-components";

export const Main = styled.div`
  min-height: 100vh;
`;

export const PaginatorWrapper = styled.div`
  display: flex;
  padding: var(--digi--layout-container--vertical-padding)
    var(--digi--layout-container--gutter);
`;

export const DiagramWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const PaddingHeading = styled.div`
  margin-top: 1rem;
`;
