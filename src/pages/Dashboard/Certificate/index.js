import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import styled from "styled-components";

export default function Certificate() {
  function downloadPDF() {
    const element = document.getElementById("pdf");
    html2canvas(element).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(img, "JPEG", 0, 0);
      pdf.save("myCertificate.pdf");
    });
  }

  return (
    <><Container id="pdf">
      <div>Teste</div>
    </Container>
    <StyledButton onClick={downloadPDF}>Baixar PDF</StyledButton></>
  );
}

const Container = styled.div`
width: 100%;
`;

const StyledButton = styled.button`
     width: 100px;
`;
