import { Typography } from "@material-ui/core";
import styled from "styled-components";
import Button from "../Form/Button";
import SumaryCard from "./SumaryCard";

export default function HotelSumary({ data, setIsChangingRoom }) {
  return(
    <>
      <Subtitle variant="h6">Você já escolheu seu quarto:</Subtitle>
      <SumaryCard room={data}/>
      <Button onClick={() => setIsChangingRoom(true)} >TROCAR DE QUARTO</Button>
    </>

  );
}

const Subtitle = styled(Typography)`
  color: #8E8E8E;
  font-weight: normal !important;
`;
