import { useContext } from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import WarningMessage from "../../../components/WarningMessage";
import EventInfoContext from "../../../contexts/EventInfoContext";
import dayjs from "dayjs";
import CertificateContainer from "../../../components/CertificateContainer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { GrDocumentPdf } from "react-icons/gr";
import Button from "../../../components/Form/Button";

export default function Certificate() {
  function isEventFinished() {
    const { eventInfo } = useContext(EventInfoContext);
    return dayjs().isAfter(dayjs(eventInfo.endDate));
  }

  function downloadPDF() {
    const element = document.getElementById("pdf");
    html2canvas(element).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
      });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const widthRatio = pageWidth/ canvas.width;
      const heightRatio = pageHeight/ canvas.height;
      const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

      const canvasWidth = canvas.width * ratio;
      const canvasHeight = canvas.height * ratio;

      const marginX = (pageWidth - canvasWidth)/2;
      const marginY = (pageHeight - canvasHeight)/2;

      pdf.addImage(img, "PNG", marginX, marginY, canvasWidth, canvasHeight); 
      pdf.save("myCertificate.pdf");
    });
  }

  return(
    <>
      <StyledTypography variant="h4">Certificado</StyledTypography>
      {isEventFinished() ?
        <>
          <CertificateContainer />
          <StyledButton onClick={downloadPDF}><GrDocumentPdf style={{ marginRight: "10px" }} />Gerar PDF</StyledButton>
        </>
        :
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

const StyledButton = styled(Button)`
  font-decoration: none !important;
  position: absolute !important;
  left: calc(50% - 75px);
  width: 150px;
  background-color: #D5D5D5 !important;
  bottom: 50px !important; 
`;
