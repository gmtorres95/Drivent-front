import styled from "styled-components";
import { BiLogIn, BiXCircle, BiCheckCircle } from "react-icons/bi";

export default function ActivityButton({ totalOfSeats, isSelected }) {
  return (
    <Container isSelected={isSelected}>
      {isSelected ? 
        <>
          <SuccessIcon />
          <Legend>Inscrito</Legend>
        </>
        : totalOfSeats ?
          <>
            <EnterIcon />
            <Legend>{totalOfSeats} vagas</Legend>
          </>
          :
          <>
            <FullIcon />
            <Legend isFull>Esgotado</Legend>
          </>
      }
    </Container>
  );
}

const Container = styled.div`
  width: 66px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${(props) => props.isSelected ? "#99E8A1" : "#CFCFCF"};
`;

const Legend = styled.div`
  margin: 4px 0;
  font-size: 9px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${(props) => props.isFull ? "#CC6666" : "#078632"}
`;

const EnterIcon = styled(BiLogIn)`
  color: #078632;
  font-size: 20px;
`;

const FullIcon = styled(BiXCircle)`
  color: #CC6666;
  font-size: 20px;
`;

const SuccessIcon = styled(BiCheckCircle)`
  color: #078632;
  font-size: 20px;
`;
