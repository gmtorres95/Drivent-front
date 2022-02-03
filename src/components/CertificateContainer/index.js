import { useContext, useEffect, useState } from "react";
import EventInfoContext from "../../contexts/EventInfoContext";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import dayjs from "dayjs";
import TicketContext from "../../contexts/TicketContext";
import Loading from "../Loading";

export default function CertificateContainer() {
  const { eventInfo } = useContext(EventInfoContext);
  const { ticketData, attTicket } = useContext(TicketContext);
  const [event, setEvent] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [hours, setHours] = useState(0);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    attTicket();
  }, []);

  useEffect(() => {
    setEvent(eventInfo.eventTitle);
    setName(ticketData?.enrollment.name);
    setType(ticketData?.type.type.split(" ")[0].toLowerCase());
    setHours(ticketData ? calculateHours(ticketData.activities) : 0);
    setStart(dayjs(eventInfo.startDate).format("DD/MM/YYYY"));
    setEnd(dayjs(eventInfo.endDate).format("DD/MM/YYYY"));
  }, [ticketData]);

  function calculateHours(activities) {
    return activities.reduce((hours, activity) => hours + dayjs(activity.end).diff(activity.start, "hours"), 0);
  }

  if(!ticketData) return <Loading />;

  return (
    <Wrapper id="pdf">
      <Container>
        <StyledTitle variant="h3">CERTIFICADO</StyledTitle>
        <StyledText variant="h5">
        Certificamos que o estudante <strong>{name}</strong> participou
        do evento <strong>{event}</strong> de forma {type},
        no período de {start} a {end}, com duração de <strong>{hours}</strong> horas.
        </StyledText>
      </Container>
    </Wrapper>
  );
}

const StyledTitle = styled(Typography)`
  font-weight: 500 !important;
  color: #6E6E6E;
`;

const StyledText = styled(Typography)`
  margin: 24px 0px !important;
  font-weight: 400 !important;
  color: #444;
  width: 700px !important;
`;

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  text-align: center;
  border: double 16px #9E9E9E;
  border-radius: 48px;
  display: flex;
  height: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  height: calc(100% - 102px);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  box-sizing: border-box;
`;
