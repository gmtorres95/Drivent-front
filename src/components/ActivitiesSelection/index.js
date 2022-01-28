import { useContext } from "react";
import styled from "styled-components";
import ActivityContext from "../../contexts/ActivityContext";
import ActivitiesTable from "./ActivitiesTable";
import Loading from "../Loading";

export default function ActivitiesSelection() {
  const { activities } = useContext(ActivityContext);

  return (
    <Container>
      {activities ? <ActivitiesTable /> : <Loading />}
    </Container>
  );
}

const Container = styled.div`
  height: 440px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
