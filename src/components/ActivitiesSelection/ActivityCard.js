import styled from "styled-components";

export default function ActivityCard(props) {
  const { 
    name,
    start,
    end,
    numberOfSeats,
  } = props.activityInfo;

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

  return (
    <StyledCard height={cardHeight}>
      <Info>
        <Name>{name}</Name>
        <Time>{formatTime(start)} - {formatTime(end)}</Time>
      </Info>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: calc(100% - 24px);
  height: ${(props) => props.height ? props.height + "px" : "80px"};
  margin: 12px;
  padding: 12px;
  border-radius: 5px;
  background-color: #f1f1ff;
  :hover{
    background-color: #d0d0d7;
  }
`;

const Info = styled.div`
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
