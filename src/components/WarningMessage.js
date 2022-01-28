import { Typography } from "@material-ui/core";
import styled from "styled-components";

export default function WarningMessage({ children }) {
  return(
    <ContainerWarning>
      <StyledWarning 
        variant="h6" 
        align="center"
      >
        {children}
      </StyledWarning>
    </ContainerWarning>
  );
}

const StyledWarning = styled(Typography)`
  font-family: 'Roboto',sans-serif;
  font-weight: normal !important;
  color: #8E8E8E;
  font-size: 20px;
  width: 480px;
`;

const ContainerWarning = styled.div`
  text-align: center;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
