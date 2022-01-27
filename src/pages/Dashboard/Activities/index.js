import { useContext } from "react";
import TicketContext from "../../../contexts/TicketContext";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import WarningMessage from "../../../components/WarningMessage";

export default function Activities() {
  const { ticketData } = useContext(TicketContext);
  return(
    <>
      <StyledTypography variant="h4">Escolha de Atividades</StyledTypography>
      {ticketData?.isPaid ?
        "Em breve" :
        <WarningMessage>
          Você precisa ter confirmado pagamento antes
          de fazer a escolha de atividades
        </WarningMessage>
      }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
