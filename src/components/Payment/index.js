import styled from "styled-components";
import CreditCardPayment from "./CreditCard";
import useApi from "../../hooks/useApi";
import { useEffect, useState, useContext } from "react";
import Loading from "../Loading";
import { toast } from "react-toastify";
import { BoxOption } from "../Ticket/BoxOption";
import { Typography } from "@material-ui/core";
import TicketContext from "../../contexts/TicketContext";

export default function TicketInfoSummary() {
  const { ticket } = useApi();
  const [ticketInfo, setTicketInfo] = useState([]);
  const { ticketData } = useContext(TicketContext);
  const [isPaid, setIsPaid] = useState(ticketData.isPaid);

  useEffect(() => {
    ticket.getTicketByUser().then((response) => {
      setTicketInfo(response.data);
    }).catch(() => {
      toast("Não foi possível carregar os detalhes do ingresso");
    });
  }, []);

  if(!ticketInfo.type) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <StyledSubTitle variant="h6">Ingresso Escolhido</StyledSubTitle>
      <BoxOption>
        <BoxTicketSummary>
          <h1>
            {ticketInfo.type.type.split(" ")[0]}
            {ticketInfo.type.type.split(" ")[1] && " + "} 
            {ticketInfo.type.type.split(" ").splice(1).join(" ")}
          </h1>
          <h2>{`
                R$ ${Number(ticketInfo.type.price) + Number(ticketInfo.type.hotelPrice)}
            `}
          </h2>
        </BoxTicketSummary>  
      </BoxOption> 
      <StyledSubTitle variant="h6">Pagamento</StyledSubTitle>
      <CreditCardPayment isPaid={isPaid} setIsPaid={setIsPaid} />
    </>
  );
}

const BoxTicketSummary = styled.div`
    height: 108px;
    width: 290px;
    background-color: #FFEED2;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    h1{
      font-size: 16px;
      line-height: 19px;
      color: #454545;
    }
    h2{
      font-size: 14px;
      color: #898989;
      margin-top: 5px;
    }
`;

const StyledSubTitle = styled(Typography)`
  color: #8E8E8E;
`;
