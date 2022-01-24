import { Typography } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import TicketContext from "../../contexts/TicketContext";
import useApi from "../../hooks/useApi";
import Button from "../Form/Button";
import { BoxOption } from "./BoxOption";
import { Option } from "./Option";

export default function Ticket() {
  const { ticket } = useApi();
  const [ticketModality, setTicketModality] = useState(null);
  const [hotelType, setHotelType] = useState(null);
  const [value, setValue] = useState(0);
  const [isValidForSummary, setIsValidForSummary] = useState(false);
  const { attTicket } = useContext(TicketContext);

  useEffect(() => {
    if(ticketModality === "Online") {
      setHotelType("Sem");
    }
    let ticketValue;
    let hotelValue;
    if(ticketModality === "Presencial") {
      ticketValue = 250;
    }
    else if( ticketModality === "Online") {
      ticketValue = 100;
      hotelValue = 0;
    }
    if(hotelType === "Com") {
      hotelValue = 350;
    }
    else{
      hotelValue = 0;
    }
    let total = ticketValue + hotelValue;
    setValue(total);
    if(hotelType && ticketModality) {
      setIsValidForSummary(true);
    }
    else{
      setIsValidForSummary(false);
    }
  }, [ticketModality, hotelType]);

  function setTicketData(ticket) {
    if(ticketModality === ticket) {
      setTicketModality(null);
    }
    else{
      setTicketModality(ticket);
    }
  }

  function returnHotelType() {
    if(ticketModality === "Presencial" && hotelType === "Com") return 1;
    else if(ticketModality === "Presencial" && hotelType === "Sem") return 2;
    else return 3;
  }

  function setHotelData(type) {
    if(hotelType === type) {
      setHotelType(null);
    }
    else{
      setHotelType(type);
    }
  }
  function postReservation() {
    const type = returnHotelType();
    ticket.postTicket({ type }).then(() => {
      toast("Reserva feita com sucesso!");
      attTicket();
    }).catch(() => {
      toast.error("Falha ao fazer reserva");
    });
  }

  return(
    <>
      <StyledSubTitle variant="h6">Primeiro, escolha sua modalidade de ingresso</StyledSubTitle>
      <BoxOption>
        <Option 
          selected={ ticketModality === "Presencial" ? true : false} 
          onClick={() => setTicketData("Presencial")}
        >
          <h1>Presencial</h1>
          <h2>R$ 250</h2>
        </Option>
        <Option 
          selected={ ticketModality === "Online" ? true : false} 
          onClick={() => setTicketData("Online")}
        >
          <h1>Online</h1>
          <h2>R$ 100</h2>
        </Option>
      </BoxOption>
      {ticketModality  === "Presencial" &&
        <>
          <StyledSubTitle 
            variant="h6" 
            style={{ marginTop: "44px" }}
          >
            Ótimo! Agora escolha sua modalidade de hospedagem
          </StyledSubTitle> 
          <BoxOption>
            <Option
              selected={ hotelType === "Sem" ? true : false}
              onClick={() => setHotelData("Sem")}
            >
              <h1>Sem Hotel</h1>
              <h2>+ R$ 0</h2>
            </Option>
            <Option
              selected={ hotelType === "Com" ? true : false} 
              onClick={() => setHotelData("Com")}
            >
              <h1>Com Hotel</h1>
              <h2>+ R$ 350</h2>
            </Option>
          </BoxOption>
        </>
      }
      {isValidForSummary &&
        <>
          <StyledSubTitle 
            variant="h6"
            style={{ marginTop: "43px" }}
          >
            Fechado! O total ficou em <strong>R$ {value}</strong>.
              Agora é só confirmar:
          </StyledSubTitle>
          <Button onClick={postReservation}>Reservar Ingresso</Button>
        </>
      }
    </>
  );
}

const StyledSubTitle = styled(Typography)`
  color: #8E8E8E;
`;
