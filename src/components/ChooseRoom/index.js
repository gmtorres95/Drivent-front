import { useContext, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Room from "./Room";
import Button from "../Form/Button";
import useApi from "../../hooks/useApi";
import { Typography } from "@material-ui/core";
import TicketContext from "../../contexts/TicketContext";
import Loading from "../Loading";

export default function ChooseRoom({ selectedHotel, setIsChangingRoom }) {
  const { ticketData, attTicket } = useContext(TicketContext);
  const [rooms, setRooms] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(ticketData.room?.id || null);
  const { hotel, ticket } = useApi();

  useEffect(() => {
    getRooms();
    setRooms(null);
  }, [selectedHotel]);

  function getRooms() {
    hotel.getRoomsByHotelId(selectedHotel)
      .then((res) => setRooms(res.data))
      .catch((error) => {
        if (error.response?.data?.details) {
          for (const detail of error.response.data.details) {
            toast(detail);
          }
        } else {
          toast("Não foi possível");
        }
        /* eslint-disable-next-line no-console */
        console.log(error);
      });
  }

  function handleSubmit() {
    ticket.updateTicketBooking(selectedRoom)
      .then((res) => {
        toast("Quarto reservado com sucesso!");
        attTicket();
        setIsChangingRoom(false);
      })
      .catch((error) => {
        if (error.response?.data?.details) {
          for (const detail of error.response.data.details) {
            toast(detail);
          }
        } else {
          toast("Não foi possível");
        }
        /* eslint-disable-next-line no-console */
        console.log(error);
      });
  }

  if(!rooms) return <Loading />;

  return(
    <>
      <Subtitle variant="h6">Ótima pedida! Agora escolha seu quarto:</Subtitle>
      <Wrapper>
        {rooms.map((e) => <Room
          key={e.id}
          roomData={e}
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
          isWhatsChanging={ticketData.room?.id === e.id}
        />)}
      </Wrapper>
      {selectedRoom &&
        <Button onClick={handleSubmit} >RESERVAR QUARTO</Button>
      }
    </>
  );
}

const Wrapper = styled.div`
  margin: 33px 0 46px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 15px;
`;

const Subtitle = styled(Typography)`
  color: #8E8E8E;
  font-weight: normal !important;
`;
