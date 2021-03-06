import styled from "styled-components";
import { Typography } from "@material-ui/core";

export default function HotelCard({ hotelData, selectedHotel, setSelectedHotel }) {
  const { id, image, name, roomTypes, totalOfBeds, unavailableBeds } = hotelData;
  const isSelected = selectedHotel === id;

  function roomTypesText() {
    if(roomTypes.length === 3) return "Single, Double e Triple";
    if(roomTypes.length === 1) return roomTypes[0];
    return `${roomTypes[0]} e ${roomTypes[1]}`;
  }

  return(
    <Wrapper isSelected={isSelected} onClick={() => setSelectedHotel(id)}>
      <HotelImage src={image} />
      <HotelName variant="h6" >{name}</HotelName>
      <TextWrapper>
        <MiniTitle>Tipos de acomodação:</MiniTitle>
        <p>{roomTypesText()}</p>
      </TextWrapper>
      <TextWrapper>
        <MiniTitle>Vagas disponíveis:</MiniTitle>
        <p>{totalOfBeds - unavailableBeds}</p>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 196px;
  height: 264px;
  background: ${({ isSelected }) => isSelected ? "#FFEED2" : "#F1F1F1"};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 15px 15px;
  gap: 10px; 
  cursor: pointer;
`;

const HotelImage = styled.img`
  width: 168px;
  height: 109px;
  border-radius: 5px;
`;

const HotelName = styled(Typography)`
  color: #343434;
`;

const TextWrapper = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: #3C3C3C;
  font-family: 'Roboto', sans-serif;
`;

const MiniTitle = styled.p`
  font-weight: bold;
`;
