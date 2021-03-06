import styled from "styled-components";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import ActivityButton from "./ActivityButton";
import useApi from "../../hooks/useApi";
import { useContext, useState } from "react";
import TicketContext from "../../contexts/TicketContext";
import { Dialog } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { DialogActions }  from "@mui/material";
import { Button } from "@mui/material";

export default function ActivityCard({ activityInfo }) {
  const {
    id,
    name,
    start,
    end,
    totalOfSeats,
  } = activityInfo;
  const { activity } = useApi();
  const { attTicket, ticketData } = useContext(TicketContext);
  const [isSelected, setIsSelected] = useState(() => ticketData.activities.map((activity) => activity.id).includes(id));
  const [openModal, setOpenModal] = useState(false);

  function getCardHeight(start, end) {
    const duration = (new Date(end) - new Date(start)) / 60000;
    const baseHeight = 4 / 3;
    const padding = Math.ceil((duration / 60) - 1) * 12;
    return duration * baseHeight + padding;
  }

  function formatTime(time) {
    return dayjs(time).format("HH:mm");
  }

  function selectActivity() {
    if(isSelected) return setOpenModal(true);
    if(!totalOfSeats) return toast("Não há vagas disponíveis para essa atividade!");
    activity.postSubscription(id).then(() => {
      toast("Inscrição realizada com sucesso!");
      setIsSelected(true);
      attTicket();
    }).catch((err) => {
      if(err.response.status === 409) {
        return toast("Não é possivel se inscrever em atividades de mesmo horário");
      }
      return toast("Erro no servidor! Tente novamente mais tarde.");
    });
  }

  const cardHeight = getCardHeight(start, end);

  function unsubscribe() {
    activity.updateSubscription(id).then(() => {
      setIsSelected(false);
      setOpenModal(false);
    }).catch(() => {
      return toast("Não foi possível cancelar a inscrição!");
    });
  }

  return (
    <>
      <StyledCard
        height={cardHeight}
        isSelected={isSelected}
        ifFull={!totalOfSeats}
        onClick={selectActivity}
      >
        <Info>
          <Name>{name}</Name>
          <Time>{formatTime(start)} - {formatTime(end)}</Time>
        </Info>
        <ActivityButton totalOfSeats={totalOfSeats} isSelected={isSelected} />
      </StyledCard>
      <Dialog
        open={openModal}
        keepMounted
        onClose={() => setOpenModal(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {"Você deseja cancelar sua inscrição nesta atividade?"}
        </DialogTitle>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            onClick={unsubscribe}
          >
            Sim
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => setOpenModal(false)}
          >
            Não
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const StyledCard = styled.div`
  width: calc(100% - 24px);
  height: ${(props) => props.height ? props.height + "px" : "80px"};
  margin: 12px;
  padding: 12px 0px 12px 12px;
  border-radius: 5px;
  display: flex;
  background-color: ${(props) => props.isSelected ? "#D0FFDB" : "#F1F1F1"};
  ${(props) => !props.isSelected && ":hover{background-color: #D0D0D0;}"}
`;

const Info = styled.div`
width: calc(100% - 66px);
  height: 100%;
  color: #343434;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Name = styled.h1`
  font-weight: 700;
`;

const Time = styled.h2`
  font-weight: 400;
  margin: 8px 0;
`;
