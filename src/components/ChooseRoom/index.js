import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Room from "./Room";
import Button from "../Form/Button";
import useApi from "../../hooks/useApi";
import { Typography } from "@material-ui/core";

export default function ChooseRoom({ selectedHotel }) {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const { hotel, ticket } = useApi();

  useEffect(() => {
    setSelectedRoom(null);
    getRooms();
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

  return(
    <>
      <Subtitle variant="h6">Ótima pedida! Agora escolha seu quarto:</Subtitle>
      <Wrapper>
        {rooms.map((e) => <Room
          key={e.id}
          roomData={e}
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
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
  font-style: normal;
`;
