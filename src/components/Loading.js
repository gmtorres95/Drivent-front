import Loader from "react-loader-spinner";
import styled from "styled-components";

export default function Loading() {
  return(
    <DivLoader>
      <Loader
        color="#FA4098" 
        height={50} 
        width={50}
        type="Oval"
      />
    </DivLoader>
  );
}

const DivLoader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
