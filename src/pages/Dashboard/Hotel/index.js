import { Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import styled from "styled-components";
import HotalSelection from "../../../components/HotelSelection";
import HotelSumary from "../../../components/HotelSumary";
import TicketContext from "../../../contexts/TicketContext";

export default function Hotel() {
  const { ticketData } = useContext(TicketContext);
  const [isChangingRoom, setIsChangingRoom] = useState(false);

  return(
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {ticketData?.isPaid ?
        Number(ticketData.type.hotelPrice) !== 0 ?
          ticketData.room && !isChangingRoom ?
            <HotelSumary data={ticketData.room} setIsChangingRoom={setIsChangingRoom} />
            :
            <HotalSelection setIsChangingRoom={setIsChangingRoom} />
          :
          <ContainerWarning>
            <StyledWarning 
              variant="h6" 
              align="center"
            >
            Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades
            </StyledWarning>
          </ContainerWarning>
        :
        <ContainerWarning>
          <StyledWarning 
            variant="h6" 
            align="center"
          >
            Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem
          </StyledWarning>
        </ContainerWarning>
      }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
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
