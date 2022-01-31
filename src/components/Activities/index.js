import { useContext } from "react";
import TicketContext from "../../contexts/TicketContext";
import WarningMessage from "../WarningMessage";
import ScheduleByDay from "./ScheduleByDay";

export default function ChooseActivities() {
  const { ticketData } = useContext(TicketContext);
  
  return(
    <>
      {ticketData?.type.type === "Online" ?
        <WarningMessage>
          Sua modalidade de ingresso não necessita escolher
          atividade. Você terá acesso a todas as atividades.
        </WarningMessage> :
        <ScheduleByDay />
      }
    </>
  );
}

