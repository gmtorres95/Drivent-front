import { useState } from "react";
import styled from "styled-components";
import Room from "./Room";
import Button from "../Form/Button";

let mock = [
  {
    id: 1,
    number: "101",
    bedsQuantity: 3,
    bookings: 1
  },
  {
    id: 2,
    number: "102",
    bedsQuantity: 3,
    bookings: 2
  },
  {
    id: 3,
    number: "103",
    bedsQuantity: 3,
    bookings: 3
  },
  {
    id: 4,
    number: "104",
    bedsQuantity: 3,
    bookings: 1
  },
  {
    id: 5,
    number: "105",
    bedsQuantity: 3,
    bookings: 2
  },
  {
    id: 6,
    number: "106",
    bedsQuantity: 3,
    bookings: 3
  }
];

export default function ChooseRoom() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return(
    <>
      <Wrapper>
        {mock.map((e) => <Room
          key={e.id}
          roomData={e}
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
        />)}
      </Wrapper>
      {selectedRoom &&
        <Button>RESERVAR QUARTO</Button>
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
