import styled from "styled-components";
import { BsPerson, BsPersonFill } from "react-icons/bs";

export default function Room({ roomData, selectedRoom, setSelectedRoom }) {
  const { id, number, bookings, bedsQuantity } = roomData;
  const isSelected = selectedRoom === id;
  const isFull = bedsQuantity === bookings;

  function decideIcons() {
    let icons = [];
    for(let i = 0; i < bookings; i++) icons.push(<BedUnavailableIcon/>);
    if(isSelected) icons.push(<BedSelectedIcon/>);
    const availableBeds = bedsQuantity - icons.length;
    for(let i = 0; i < availableBeds; i++) icons.push(<BedAvailableIcon/>);
    return icons;
  }

  return(
    <Wrapper 
      isFull={isFull} 
      isSelected={isSelected}
      onClick={isFull? "" : () => setSelectedRoom(id)}
    >
      <RoomNumber>{number}</RoomNumber>
      <IconsWrapper>
        {decideIcons()}
      </IconsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 190px;
  height: 45px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #CECECE;
  border-radius: 10px;
  cursor: ${({ isFull }) => isFull? "" : "pointer"};
  opacity: ${({ isFull }) => isFull? 0.6 : ""};
  background-color: ${({ isFull, isSelected }) => isFull? "#E9E9E9" : isSelected ? "#FFEED2" : ""};
`;

const RoomNumber = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #454545;
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const BedAvailableIcon = styled(BsPerson)`
  width: 25px;
  height: 25px;
`;

const BedUnavailableIcon = styled(BsPersonFill)`
  width: 25px;
  height: 25px;
`;

const BedSelectedIcon = styled(BsPersonFill)`
  width: 25px;
  height: 25px;
  color: #FF4791;
`;
