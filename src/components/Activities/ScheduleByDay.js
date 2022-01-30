import styled from "styled-components";
import { useEffect, useState } from "react";
import Date from "./Date";
import useApi from "../../hooks/useApi";
import Loading from "../Loading";
import { toast } from "react-toastify";
import { Typography } from "@material-ui/core";

export default function ScheduleByDay() {  
  const [selectedDay, setSelectedDay] = useState(false);
  const [dates, setDates] = useState([]);
  const api = useApi();

  useEffect(() => {
    api.activity.getDates().then((response) => {
      setDates(response.data);
    }).catch(() => {
      toast("Não foi possível carregar as datas!");
    });
  }, []);

  if(!dates) {
    return(
      <Loading />
    );
  }

  return(
    <>
      <StyledSubTitle variant="h6">
          Primeiro, filtre pelo dia do evento:
      </StyledSubTitle>
      <Box>
        {dates.map(({ date, id }) => (
          <Date
            date={date}
            key={id}
            id={id}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay} />
        ))}
      </Box>
    </>
  );
}

const StyledSubTitle = styled(Typography)`
  color: #8E8E8E;
  font-weight: normal !important;
`;

const Box = styled.div`
    display: flex;
    margin-top: 20px;
`;
 
