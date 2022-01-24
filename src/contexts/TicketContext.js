import { createContext, useEffect, useState } from "react";
import useApi from "../hooks/useApi";

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({ children }) {
  const [ticketData, setTicketData ] = useState(null);
  const { ticket } = useApi();
  useEffect(() => {
    ticket.getTicketByUser().then((res) => {
      setTicketData(res.data);
    });
  }, []);

  return (
    <TicketContext.Provider value={{ ticketData, setTicketData }}>
      { children }
    </TicketContext.Provider>
  );
}

