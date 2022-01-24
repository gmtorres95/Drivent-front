import styled from "styled-components";

export const Option = styled.div`
  cursor: pointer;
  font-family: 'Roboto',sans-serif;
  background: ${props => props.selected ? "#FFEED2" : "none"};
  width: 145px;
  height: 145px;
  border: 1px solid #CECECE;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-transition: all .2s linear 0s;
  transition: all .2s linear 0s;
    h1{
      font-size: 16px;
      line-height: 19px;
    }
    h2{
      font-size: 14px;
      color: #898989;
      margin-top: 5px;
    }
`;
