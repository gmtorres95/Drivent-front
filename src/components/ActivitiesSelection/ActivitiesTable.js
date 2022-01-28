import styled from "styled-components";
import Place from "./Location";

export default function ActivitiesTable() {
  return (
    <EventsContainer>
      {
        locations.map((locationInfo, key) => {
          return (
            <Place key={key} locationInfo={locationInfo} />
          );
        })
      }
    </EventsContainer>
  );
}

const EventsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const locations = [
  {
    name: "Auditório Principal",
    activities: [
      {
        name: "Minecraft: montando o PC ideal",
        start: new Date("10/22/2022 09:00"),
        end: new Date("10/22/2022 10:00"),
        totalOfSeats: 27,
      },
      {
        name: "LoL: montando o PC ideal",
        start: new Date("10/22/2022 10:00"),
        end: new Date("10/22/2022 11:00"),
        totalOfSeats: 27,
      },
      {
        name: "Fortnite: montando o PC ideal",
        start: new Date("10/22/2022 11:00"),
        end: new Date("10/22/2022 12:00"),
        totalOfSeats: 27,
      }
    ]
  },
  {
    name: "Auditório Lateral",
    activities: [
      {
        name: "Palestra 1",
        start: new Date("10/22/2022 09:00"),
        end: new Date("10/22/2022 11:00"),
        totalOfSeats: 27, 
      },
      {
        name: "Palestra 2",
        start: new Date("10/22/2022 12:00"),
        end: new Date("10/22/2022 13:00"),
        totalOfSeats: 27,
      }
    ]
  },
  {
    name: "Sala de Workshop",
    activities: [
      {
        name: "Palestra 3",
        start: new Date("10/22/2022 09:00"),
        end: new Date("10/22/2022 10:00"),
        totalOfSeats: 27,
      },
      {
        name: "Palestra 4",
        start: new Date("10/22/2022 10:00"),
        end: new Date("10/22/2022 11:30"),
        totalOfSeats: 27,
      }
    ]
  }
];
