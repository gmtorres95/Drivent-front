import { Typography } from "@material-ui/core";
import styled from "styled-components";
import ActivitiesSelection from "../../../components/ActivitiesSelection";

export default function Activities() {
  return(
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      <ActivitiesSelection />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
