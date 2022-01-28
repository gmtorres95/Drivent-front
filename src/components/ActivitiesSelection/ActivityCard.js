import styled from "styled-components";

export default function ActivityCard(props) {
  const { 
    name,
    start,
    end,
    numberOfSeats,
  } = props.activityInfo;

  return (
    <StyledCard>Teste</StyledCard>
  );
}

const StyledCard = styled.div`
  width: 90%;
  height: 80px;
  margin: 10px 0;
  border: none;
  background-color: #f1f1ff;
  border-radius: 5px;
  :hover{
    background-color: #d0d0d7;
  }
`;
