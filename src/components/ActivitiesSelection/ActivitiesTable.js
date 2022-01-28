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
      }
    ]
  },
  {
    name: "Auditório Lateral",
    activities: [
      {
        name: "Palestra x",
        start: new Date("10/22/2022 09:00"),
        end: new Date("10/22/2022 11:00"),
        totalOfSeats: 27,
      }
    ]
  },
  {
    name: "Sala de Workshop",
    activities: [
      {
        name: "Palestra y",
        start: new Date("10/22/2022 09:00"),
        end: new Date("10/22/2022 10:00"),
        totalOfSeats: 27,
      },
      {
        name: "Palestra z",
        start: new Date("10/22/2022 10:00"),
        end: new Date("10/22/2022 11:00"),
        totalOfSeats: 27,
      }
    ]
  }
];
