import styled from "styled-components";
import { Typography } from "@material-ui/core";

export default function SumaryCard({ room }) {
  const { number, roomType, bookings, hotel } = room;

  return(
    <Wrapper isSelected={true} >
      <HotelImage src={hotel.image} />
      <HotelName variant="h6" >{hotel.name}</HotelName>
      <TextWrapper>
        <MiniTitle>Quarto reservado</MiniTitle>
        <p>{number} ({roomType})</p>
      </TextWrapper>
      <TextWrapper>
        <MiniTitle>Pessoas no seu quarto</MiniTitle>
        <p>Você {bookings > 1 && `e mais ${bookings-1}`}</p>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 15px 0 50px;
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
  font-weight: normal !important;
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
