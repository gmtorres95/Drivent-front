import { StyledSubTitle, BoxOption } from "./index";
import styled from "styled-components";
import CreditCardPayment from "./CreditCard";

const ticketInfo = [
  {
    id: 1,
    type: "Presencial Com Hotel",
    price: 250,
    hotelPrice: 100,
  }
];

export default function TicketInfoSummary() {
  return (
    <>
      <StyledSubTitle>Ingresso Escolhido</StyledSubTitle>
      <BoxOption>
        <BoxTicketSummary>
          <h1>{`
                ${ticketInfo[0].type.split(" ")[0]} + 
                ${ticketInfo[0].type.split(" ").splice(1).join(" ")}
            `}
          </h1>
          <h2>{`
                R$ ${ticketInfo[0].price + ticketInfo[0].hotelPrice}
            `}
          </h2>
        </BoxTicketSummary>  
      </BoxOption> 
      <StyledSubTitle>Pagamento</StyledSubTitle>
      <CreditCardPayment />
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
