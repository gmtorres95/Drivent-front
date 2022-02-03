import { useContext } from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import WarningMessage from "../../../components/WarningMessage";
import EventInfoContext from "../../../contexts/EventInfoContext";
import dayjs from "dayjs";
import CertificateContainer from "../../../components/CertificateContainer";

export default function Certificate() {
  function isEventFinished() {
    const { eventInfo } = useContext(EventInfoContext);
    return dayjs().isAfter(dayjs(eventInfo.endDate));
  }

  return(
    <>
      <StyledTypography variant="h4">Certificado</StyledTypography>
      {isEventFinished() ?
        <CertificateContainer /> :
        <WarningMessage>
          O seu certificado ficará disponível após o fim do evento
        </WarningMessage>
      }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
