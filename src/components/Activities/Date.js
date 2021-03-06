import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function Date({ date, id, selectedDay, setSelectedDay }) {
  const isSelected = selectedDay === id;
  const weekday = dayjs(date).locale("pt-br").format("dddd").split("-")[0];
  const day = dayjs(date).locale("pt-br").format("DD/MM");
  
  return(
    <ActivityDate
      isSelected={isSelected}
      onClick={() => setSelectedDay(id)}
    >
      <span>
        {`${weekday}, ${day}`}
      </span>
    </ActivityDate>
  );
}

const ActivityDate = styled.div`
    width: 131px;
    height: 37px;
    background-color: ${({ isSelected }) => isSelected ? "#FFD37D" : "#E0E0E0"};
    border-radius: 4px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 17px;
    span {
        font-weight: normal !important;
        font-size: 14px;
    }
    &:hover {
        cursor: pointer;
    }
`;
