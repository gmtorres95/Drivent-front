import { useState } from "react";
import styled from "styled-components";
import Room from "./Room";

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
    number: "101",
    bedsQuantity: 3,
    bookings: 1
  },
  {
    id: 5,
    number: "102",
    bedsQuantity: 3,
    bookings: 2
  },
  {
    id: 6,
    number: "103",
    bedsQuantity: 3,
    bookings: 3
  }
];

export default function ChooseRoom() {
  const [selectedRoom, setSelectedRoom] = useState(1);

  return(
    <Wrapper>
      {mock.map((e) => <Room roomData={e} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />)}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 15px;
`;
