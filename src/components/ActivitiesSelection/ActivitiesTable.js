import { useContext } from "react";
import styled from "styled-components";
import ActivityContext from "../../contexts/ActivityContext";
import Place from "./Location";

export default function ActivitiesTable() {
  const { activities } = useContext(ActivityContext);

  return (
    <EventsContainer>
      {
        activities.map((locationInfo, key) => {
          return (
            <Place
              key={key}
              locationInfo={locationInfo}
            />
          );
        })
      }
    </EventsContainer>
  );
}

const EventsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
