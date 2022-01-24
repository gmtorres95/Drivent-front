import { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import TicketInfoSummary from "../../../components/Payment";
import Button from "../../../components/Form/Button";
import { toast } from "react-toastify";

export default function Payment() {
  const { enrollment, ticket } = useApi();
  const [isValidForPayment, setIsValidForPayment] = useState(false);
  const [ticketModality, setTicketModality] = useState(null);
  const [hotelType, setHotelType] = useState(null);
  const [value, setValue] = useState(0);
  const [isValidForSummary, setIsValidForSummary] = useState(false);

  useEffect(() => {
    enrollment.getPersonalInformations().then((response) => {
      if(response.status === 200) {
        setIsValidForPayment(true);
      }
    });
  }, []);
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
    }).catch(() => {
      toast.error("Falha ao fazer reserva");
    });
  }

  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      {isValidForPayment ?
        <>
          <StyledSubTitle variant="h6">Primeiro, escolha sua modalidade de ingresso</StyledSubTitle>
          <BoxOption>
            <Option selected={ ticketModality === "Presencial" ? true : false} onClick={() => setTicketData("Presencial")}>
              <h1>Presencial</h1>
              <h2>R$ 250</h2>
            </Option>
            <Option selected={ ticketModality === "Online" ? true : false} onClick={() => setTicketData("Online")}>
              <h1>Online</h1>
              <h2>R$ 100</h2>
            </Option>
          </BoxOption>
          {ticketModality  === "Presencial"?
            <>
              <StyledSubTitle variant="h6" style={{ marginTop: "44px" }}>Ótimo! Agora escolha sua modalidade de hospedagem</StyledSubTitle> 
              <BoxOption>
                <Option selected={ hotelType === "Sem" ? true : false} onClick={() => setHotelData("Sem") } >
                  <h1>Sem Hotel</h1>
                  <h2>+ R$ 0</h2>
                </Option>
                <Option selected={ hotelType === "Com" ? true : false} onClick={() => setHotelData("Com") }>
                  <h1>Com Hotel</h1>
                  <h2>+ R$ 350</h2>
                </Option>
              </BoxOption></> : <></>}{isValidForSummary ? <><StyledSubTitle variant="h6"  style={{ marginTop: "43px" }}>Fechado! O total ficou em <strong>R$ {value}</strong>. Agora é só confirmar:</StyledSubTitle><Button style={{ height: "37px", width: "193px", fontSize: "14px", textAlign: "center", color: "#000000" }} onClick={postReservation}>Reservar Ingresso</Button></> : <></>}
        </> : 
        <ContainerWarning><StyledWarning variant="h8" align="center">Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</StyledWarning></ContainerWarning>
      }
    </> );
}
const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

export const StyledSubTitle = styled(Typography)`
  color: #8E8E8E;
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

export const BoxOption = styled.div`
  display: flex;
  width: 314px;
  justify-content: space-between;
  margin-top:20px;
`;

const Option = styled.div`
  cursor: pointer;
  font-family: 'Roboto',sans-serif;
  background: ${props => props.selected ? "#FFEED2" : "none"};
  width: 145px;
  height: 145px;
  border: 1px solid #CECECE;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-transition: all .2s linear 0s;
  transition: all .2s linear 0s;
    h1{
      font-size: 16px;
      line-height: 19px;
    }
    h2{
      font-size: 14px;
      color: #898989;
      margin-top: 5px;
    }
`;
