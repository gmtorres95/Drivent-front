import { Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import styled from "styled-components";
import HotalSelection from "../../../components/HotelSelection";
import HotelSumary from "../../../components/HotelSumary";
import WarningMessage from "../../../components/WarningMessage";
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
          <WarningMessage>
            Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades
          </WarningMessage>
        :
        <WarningMessage>
            Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem
        </WarningMessage>
      }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
