import { useState } from "react";
import ChooseRoom from "../ChooseRoom";
import HotelCard from "./HotelCard";

export default function HotalSelection() {
  const [selectedHotel, setSelectedHotel] = useState(1);

  return(
    <>
      <HotelCard />
      <ChooseRoom selectedHotel={selectedHotel}/>
    </>
  );
}
