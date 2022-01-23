import styled from "styled-components";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useState } from "react";
import Button from "../../../components/Form/Button";
import { SubmitContainer } from "../../../components/PersonalInformationForm/index";
import InputMask from "react-input-mask";
import TextField from "@material-ui/core/TextField";

function CreditCardInfoInput({ mask, onChange, name, onFocus, placeholder }) {
  return (
    <InputMask
      mask={mask}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      onFocus={onFocus}
    >
      {() => <TextField
        variant="outlined"
        mask={mask}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        onFocus={onFocus}
      />}
    </InputMask>
  );
}

export default function CreditCardPayment() {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [validThru, setValidThru] = useState("");
  const [cvc, setCvc] = useState("");
  const [isFocus, setIsFocus] = useState("");

  function makePayment(event) {
    event.preventDefault();
    const body = {
      cardNumber: cardNumber.replace(/\s/g, ""),
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
          <CreditCardInfoInput
            marginButtom={20}
            name="cardNumber"
            mask="9999 9999 9999 9999"
            placeholder="Card Number"
            type="number"
            fullWidth
            value={cardNumber}
            onFocus={(e) => setIsFocus(e.target.name)}
            onChange={e => setCardNumber(e.target.value)}
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
              mask="999"
              placeholder="CVC"
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
       margin-bottom: 15px;
       color: #898989;
    }
    height: auto;
`;

const Box = styled.div`
    display: flex;
    margin-left: 0;
    margin-top:10px;
    div:first-child {
        margin: 0;
        margin-top: 2px;
    }
`;

const BoxInputs = styled.div`
    display: flex;
    align-items: center;
    div:first-child {
      margin-right: 20px;
    }
`;

const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: 30px;
    input:nth-child(2) {
      margin: 10px 0px;
    }
    input {
        height: 10px;

    }
`;
