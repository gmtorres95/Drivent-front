import styled from "styled-components";
import ActivitiesTable from "./ActivitiesTable";

export default function ActivitiesSelection() {
  return (
    <Container>
      <ActivitiesTable />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
