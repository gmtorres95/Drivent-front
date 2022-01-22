import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import ChooseRoom from "../../../components/ChooseRoom";

export default function Hotel() {
  return(
    <>
      <Subtitle variant="h6">Ótima pedida! Agora escolha seu quarto:</Subtitle>
      <ChooseRoom/>
    </>
  );
}

const Subtitle = styled(Typography)`
  color: #8E8E8E;
`;
