import styled from "styled-components";
import ActivityCard from "./ActivityCard";

export default function Location(props) {
  const {
    locationInfo,
    selectedActivities,
  } = props;
  const { activities } = locationInfo;

  return (
    <PlacesContainer>
      <Tittle>{locationInfo.name}</Tittle>
      <ActivitiesContainer>
        {activities.map((activity) => <ActivityCard activityInfo={activity} selectedActivities={selectedActivities} />)}
      </ActivitiesContainer>
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
  height: 48px;
  font-size: 17px;
  color: #7b7b7b;
  display: flex;
  align-items: center;
`;

const ActivitiesContainer = styled.div`
  border: 1px solid #d7d7d7;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px;
  }
`;
