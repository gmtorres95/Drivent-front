import styled from "styled-components";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useContext, useState } from "react";
import Button from "../Form/Button";
import { SubmitContainer } from "../PersonalInformationForm";
import useApi from "../../hooks/useApi";
import { toast } from "react-toastify";
import { HiCheckCircle } from "react-icons/hi";
import CreditCardInfoInput from "./CreditCardInfoInput";
import validation from "./validation";
import TicketContext from "../../contexts/TicketContext";

export default function CreditCardPayment({ isPaid, setIsPaid }) {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [validThru, setValidThru] = useState("");
  const [cvc, setCvc] = useState("");
  const [isFocus, setIsFocus] = useState("");
  const { attTicket } = useContext(TicketContext);
  const { ticket } = useApi();
  const [cardNumberMask, setCardNumberMask] = useState("");
  const [cvcMask, setCvcMask] = useState("");

  function makePayment(event) {
    event.preventDefault();
    const body = {
      cardNumber,
      name,
      validThru,
      cvc,
    };
    
    if(!validation(body)) {
      return toast("Preencha os dados corretamente!");
    }

    ticket.updateTicketPayment().then((response) => {
      setIsPaid(true);
      attTicket();
      toast("Pagamento efetuado com sucesso!");
    }).catch(() => {
      toast("Não foi possível carregar os detalhes do ingresso");
    });
  }

  function onChange(event) {
    setCardNumber(event.target.value);
    let cardType = cardNumber.substring(0, 2);

    function adaptCardNumberMask(cardType) {
      const cases =  {
        30: "9999 999999 9999",
        34: "9999 999999 99999",
        36: "9999 999999 9999",
        38: "9999 999999 9999",
        37: "9999 999999 99999",
        default: "9999 9999 9999 9999",
      };
      return setCardNumberMask(cases[cardType] || cases.default);
    }
    adaptCardNumberMask(cardType);

    function adaptCvcMask(cardType) {
      const cases =  {
        34: "9999",
        37: "9999",
        default: "999",
      };
      return setCvcMask(cases[cardType] || cases.default);
    }
    adaptCvcMask(cardType);
  }

  return (
    <>
      {!isPaid ?
        <Form onSubmit={makePayment}>
          <Box>
            <Cards
              number={cardNumber}
              name={name}
              expiry={validThru}
              cvc={cvc}
              focused={isFocus}
            />
            <ContainerInputs>
              <CreditCardInfoInput
                marginButtom={20}
                name="cardNumber"
                mask={cardNumberMask}
                placeholder="Card Number"
                type="number"
                fullWidth
                value={cardNumber}
                onFocus={(e) => setIsFocus(e.target.name)}
                onChange={onChange}
              />
              <p> Eg: 49...,51...,36...,37...</p>
              <CreditCardInfoInput
                name="name"
                placeholder="Name"
                type="text"
                fullWidth
                value={name}
                onFocus={(e) => setIsFocus(e.target.name)}
                onChange={e => setName(e.target.value)}
              />
              <BoxInputs>
                <CreditCardInfoInput
                  name="validThru"
                  placeholder="Valid Thru"
                  type="date"
                  mask={"99/99"}
                  fullWidth
                  value={validThru}
                  onFocus={(e) => setIsFocus(e.target.name)}
                  onChange={e => setValidThru(e.target.value)}
                />
                <CreditCardInfoInput
                  name="cvc"
                  mask={cvcMask}
                  placeholder="CVC"
                  type="number"
                  fullWidth
                  value={cvc}
                  onFocus={(e) => setIsFocus(e.target.name)}
                  onChange={(e) => setCvc(e.target.value)}
                />
              </BoxInputs>
            </ContainerInputs>
          </Box>
          <SubmitContainer>
            <Button type="submit">
              Finalizar Pagamento
            </Button>
          </SubmitContainer>
        </Form> :
        <ContainerCompletePayment>
          <HiCheckCircle color="#36B853" size={50} />
          <div>
            <h3>Pagamento confirmado!</h3>
            <p>Prossiga para escolha de hospedagem e atividades</p>
          </div>
        </ContainerCompletePayment>
      }
    </>
  );
}

const Form = styled.form`
    p {
       margin: 5px 0 5px 0;
       color: #898989;
    }
    height: auto;
    div:last-child {
        margin-top: 10px !important;
    }
`;

const Box = styled.div`
    display: flex;
    margin-left: 0;
    div:first-child {
        margin: 0;
        margin-top: 2px;
    }
`;

const BoxInputs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    div:first-child {
      margin: 5px 0 10px 0;
    }
    div:nth-child(2) {
        width: 30%;
        margin: 0 0 15px 8px;
    }
`;

const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: 30px;
    input {
      height: 10px;
    }
`;

const ContainerCompletePayment = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #454545;
  line-height: 19px;
  svg {
    margin-right: 10px;
  }
  h3 {
    font-weight: bold;
  }
`;
