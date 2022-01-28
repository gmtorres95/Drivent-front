import { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import TicketInfoSummary from "../../../components/Payment";
import Ticket from "../../../components/Ticket";
import { useContext } from "react";
import TicketContext from "../../../contexts/TicketContext";
import WarningMessage from "../../../components/WarningMessage";

export default function Payment() {
  const { enrollment } = useApi();
  const [isValidForAccess, setIsValidForAccess] = useState(false);
  const { ticketData } = useContext(TicketContext);

  useEffect(() => {
    enrollment.getPersonalInformations().then((response) => {
      if(response.status === 200) {
        setIsValidForAccess(true);
      }
    });
  }, []);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      {isValidForAccess ?
        !ticketData ?
          <Ticket />
          :
          <TicketInfoSummary />
        : 
        <WarningMessage>
            Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
        </WarningMessage>
      }
    </> );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const StyledWarning = styled(Typography)`
  font-family: 'Roboto',sans-serif;
  color: #8E8E8E;
  font-size: 20px;
`;
const ContainerWarning = styled.div`
  width: 390px;
  text-align: center;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
