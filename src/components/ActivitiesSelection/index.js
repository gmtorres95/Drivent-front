import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../Loading";
import Location from "./Location";
import useApi from "../../hooks/useApi";
import TicketContext from "../../contexts/TicketContext";

export default function ActivitiesSelection({ selectedDay }) {
  const [locations, setLocations] = useState(null);
  const { activity } = useApi();
  const { attTicket } = useContext(TicketContext);

  useEffect(() => {
    attTicket();
    activity.getActivitiesByDate(selectedDay).then((response) => {
      setLocations(response.data);
    });
  }, [selectedDay]);

  if(!locations) return <Loading />;

  return (
    <Container>
      <EventsContainer>
        {
          locations.map((locationInfo, key) => {
            return (
              <Location
                key={key}
                locationInfo={locationInfo}
              />
            );
          })
        }
      </EventsContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 440px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const EventsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
