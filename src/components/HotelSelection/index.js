import { Typography } from "@material-ui/core";
import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import useApi from "../../hooks/useApi";
import ChooseRoom from "../ChooseRoom";
import HotelCard from "./HotelCard";
import TicketContext from "../../contexts/TicketContext";
import Loading from "../Loading";

export default function HotalSelection({ setIsChangingRoom }) {
  const { ticketData } = useContext(TicketContext);
  const [selectedHotel, setSelectedHotel] = useState(ticketData.room?.hotel.id || null);
  const [hotels, setHotels] = useState(null);
  const { hotel } = useApi();

  useEffect(() => {
    getHotels();
  }, []);

  function getHotels() {
    hotel.getHotelsList()
      .then((res) => setHotels(res.data))
      .catch((error) => {
        if (error.response?.data?.message) {
          toast(error.response.data.message);
        } else {
          toast("Não foi possível");
        }
        /* eslint-disable-next-line no-console */
        console.log(error);
      });
  }
  
  if(!hotels) return <Loading />;

  return(
    <>
      <Subtitle variant="h6">Primeiro, escolha seu hotel</Subtitle>
      <HotelSeletion>
        {hotels.map((hotel) => <HotelCard
          key={hotel.id}
          hotelData={hotel}
          selectedHotel={selectedHotel}
          setSelectedHotel={setSelectedHotel}
        />)}
      </HotelSeletion>
      {selectedHotel &&
        <ChooseRoom 
          selectedHotel={selectedHotel}
          setIsChangingRoom={setIsChangingRoom}
        />
      }
    </>
  );
}

const HotelSeletion = styled.div`
  display: flex;
  gap: 19px;
  margin-bottom: 50px;
  flex-wrap: wrap;
`;

const Subtitle = styled(Typography)`
  color: #8E8E8E;
  font-weight: normal !important;
`;
