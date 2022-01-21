import styled from "styled-components";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useState } from "react";
import Button from "../../../components/Form/Button";
import { SubmitContainer } from "../../../components/PersonalInformationForm/index";
import Input from "../../../components/Form/Input";
  
export default function CreditCardPayment() {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [validThru, setValidThru] = useState("");
  const [cvc, setCvc] = useState("");
  const [isFocus, setIsFocus] = useState("");

  function makePayment(event) {
    event.preventDefault();
    const body = {
      cardNumber,
      name,
      validThru,
      cvc,
    };
    console.log(body);
  }
  return (
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
          <Input
            name="cardNumber"
            //mask="9999 9999 9999 9999"
            label="Card Number"
            type="text"
            fullWidth
            value={cardNumber}
            onFocus={(e) => setIsFocus(e.target.name)}
            onChange={e => setCardNumber(e.target.value)}
          />
          <p> Eg: 12...,34...,34...,56...</p>
          <Input
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onFocus={(e) => setIsFocus(e.target.name)}
            onChange={e => setName(e.target.value)}
          />
          <BoxInputs>
            <Input
              name="validThru"
              label="Valid Thru"
              type="text"
              fullWidth
              value={validThru}
              onFocus={(e) => setIsFocus(e.target.name)}
              onChange={e => setValidThru(e.target.value)}
            />
            <Input
              name="cvc"
              //mask="999"
              label="CVC"
              type="number"
              fullWidth
              value={cvc}
              onFocus={(e) => setIsFocus(e.target.name)}
              onChange={e => setCvc(e.target.value)}
            />
          </BoxInputs>
        </ContainerInputs>
      </Box>
      <SubmitContainer>
        <Button type="submit">
              Finalizar Pagamento
        </Button>
      </SubmitContainer>
    </Form>
  );
}

const Form = styled.form`
    p {
       margin-top: 5px;
       color: #898989;
    }
    height: auto;
`;

const Box = styled.div`
    display: flex;
    margin-left: 0;
    margin-top:10px;
    div:first-child {
        align-self: flex-start;
        margin: 0;
        margin-top: 2px;
    }
`;

const BoxInputs = styled.div`
    display: flex;
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
