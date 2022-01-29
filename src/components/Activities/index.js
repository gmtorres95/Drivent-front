import { useContext } from "react";
import TicketContext from "../../contexts/TicketContext";
import WarningMessage from "../WarningMessage";
import ScheduleByDay from "./ScheduleByDay";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

export default function ChooseActivities() {
  const { ticketData } = useContext(TicketContext);
  
  return(
    <>
      {ticketData?.type.type === "Online" ?
        <WarningMessage>
            Sua modalidade de ingresso não necessita escolher
            atividade. Você terá acesso a todas as atividades.
        </WarningMessage> :
        <>
          <StyledSubTitle variant="h6">
            Primeiro, filtre pelo dia do evento:
          </StyledSubTitle>
          <ScheduleByDay />
        </>
      }
    </>
  );
}

const StyledSubTitle = styled(Typography)`
  color: #8E8E8E;
  font-weight: normal !important;
`;
