import { createContext, useEffect, useState } from "react";

const ActivityContext = createContext();
export default ActivityContext;

export function ActivityProvider({ children }) {
  const [activities, setActivities] = useState(null);
  const [selectedActivities, setSelectedActivities] = useState([]);

  useEffect(() => {
    setSelectedActivities([1, 8, 4]);
    setActivities(
      [
        {
          name: "Auditório Principal",
          activities: [
            {
              id: 1,
              name: "Minecraft: montando o PC ideal",
              start: new Date("10/22/2022 09:00"),
              end: new Date("10/22/2022 10:00"),
              totalOfSeats: 18,
            },
            {
              id: 2,
              name: "LoL: montando o PC ideal",
              start: new Date("10/22/2022 10:00"),
              end: new Date("10/22/2022 11:00"),
              totalOfSeats: 27,
            },
            {
              id: 3,
              name: "Fortnite: montando o PC ideal",
              start: new Date("10/22/2022 11:00"),
              end: new Date("10/22/2022 12:00"),
              totalOfSeats: 30,
            },
            {
              id: 4,
              name: "DotA: montando o PC ideal",
              start: new Date("10/22/2022 11:00"),
              end: new Date("10/22/2022 12:00"),
              totalOfSeats: 50,
            }
          ]
        },
        {
          name: "Auditório Lateral",
          activities: [
            {
              id: 5,
              name: "Palestra 1",
              start: new Date("10/22/2022 09:00"),
              end: new Date("10/22/2022 11:00"),
              totalOfSeats: 35, 
            },
            {
              id: 6,
              name: "Palestra 2",
              start: new Date("10/22/2022 12:00"),
              end: new Date("10/22/2022 13:00"),
              totalOfSeats: 0,
            }
          ]
        },
        {
          name: "Sala de Workshop",
          activities: [
            {
              id: 7,
              name: "Palestra 3",
              start: new Date("10/22/2022 09:00"),
              end: new Date("10/22/2022 10:00"),
              totalOfSeats: 0,
            },
            {
              id: 8,
              name: "Palestra 4",
              start: new Date("10/22/2022 10:00"),
              end: new Date("10/22/2022 11:30"),
              totalOfSeats: 27,
            }
          ]
        }
      ]
    );
  }, []);

  return (
    <ActivityContext.Provider value={{ activities, setActivities, selectedActivities, setSelectedActivities }}>
      { children }
    </ActivityContext.Provider>
  );
}
