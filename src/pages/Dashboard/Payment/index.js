import { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
export default function Payment() {
  const { enrollment } = useApi();
  const [isValidForPayment, setIsValidForPayment] = useState(false);
  useEffect(() => {
    enrollment.getPersonalInformations().then((response) => {
      if(response.status === 200) {
        setIsValidForPayment(true);
      }
    });
  }, []);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      {isValidForPayment ?
        <>
          <StyledSubTitle variant="h6">Primeiro, escolha sua modalidade de ingresso</StyledSubTitle>
          <BoxOption>
            <Option>
              <h1>Presencial</h1>
              <h2>R$ 250</h2>
            </Option>
            <Option>
              <h1>Online</h1>
              <h2>R$ 100</h2>
            </Option>
          </BoxOption>
        </> : 
        <ContainerWarning><StyledWarning variant="h8" align="center">Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</StyledWarning></ContainerWarning>
      }
    </> );
}
const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const StyledSubTitle = styled(Typography)`
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
const BoxOption = styled.div`
  display: flex;
  width: 314px;
  justify-content: space-between;
  margin-top:20px;
`;

const Option = styled.div`
  font-family: 'Roboto',sans-serif;
  width: 145px;
  height: 145px;
  border: 1px solid #CECECE;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

