import styled from "styled-components";
import ActivityCard from "./ActivityCard";

export default function Location(props) {
  const { locationInfo } = props;
  const { activities } = locationInfo;

  return (
    <PlacesContainer>
      <Tittle>{locationInfo.name}</Tittle>
      <EventsContainer>
        {activities.map((activity) => <ActivityCard activityInfo={activity} />)}
      </EventsContainer>
    </PlacesContainer>
  );
}

const PlacesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tittle = styled.p`
  font-size: 17px;
  color: #7b7b7b;
  margin-bottom: 30px;
`;

const EventsContainer = styled.div`
  border: 1px solid #d7d7d7;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
