import { useContext } from "react";
import styled from "styled-components";
import ActivityContext from "../../contexts/ActivityContext";
import ActivityButton from "./ActivityButton";

export default function ActivityCard({ activityInfo }) {
  const {
    id,
    name,
    start,
    end,
    totalOfSeats,
  } = activityInfo;
  const { selectedActivities } = useContext(ActivityContext);

  function getCardHeight(start, end) {
    const duration = (end - start) / 60000;
    const baseHeight = 4 / 3;
    const padding = Math.ceil((duration / 60) - 1) * 12;
    return duration * baseHeight + padding;
  }

  function formatTime(time) {
    return time.toTimeString().slice(0, 5);
  }

  const cardHeight = getCardHeight(start, end);
  const isSelected = selectedActivities.includes(id);

  return (
    <StyledCard height={cardHeight} isSelected={isSelected} ifFull={!totalOfSeats} >
      <Info>
        <Name>{name}</Name>
        <Time>{formatTime(start)} - {formatTime(end)}</Time>
      </Info>
      <ActivityButton totalOfSeats={totalOfSeats} isSelected={isSelected} />
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: calc(100% - 24px);
  height: ${(props) => props.height ? props.height + "px" : "80px"};
  margin: 12px;
  padding: 12px 0px 12px 12px;
  border-radius: 5px;
  display: flex;
  background-color: ${(props) => props.isSelected ? "#D0FFDB" : "#F1F1F1"};
  ${(props) => !props.isSelected && ":hover{background-color: #D0D0D0;}"}
`;

const Info = styled.div`
width: calc(100% - 66px);
  height: 100%;
  color: #343434;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Name = styled.h1`
  font-weight: 700;
`;

const Time = styled.h2`
  font-weight: 400;
  margin: 8px 0;
`;
