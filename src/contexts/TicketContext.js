import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import useApi from "../hooks/useApi";
import UserContext from "./UserContext";

const TicketContext = createContext();
export default TicketContext;

export function TicketProvider({ children }) {
  const [ticketData, setTicketData ] = useState(null);
  const { ticket } = useApi();
  const { userData } = useContext(UserContext);

  useEffect(() => {
    if(userData && userData.token) attTicket();
  }, [userData]);

  function attTicket() {
    ticket.getTicketByUser()
      .then((res) => {
        setTicketData(res.data);
      })
      .catch(() => {
        toast("Não foi possível carregar os detalhes do ingresso");
      });
  }

  return (
    <TicketContext.Provider value={{ ticketData, setTicketData, attTicket }}>
      { children }
    </TicketContext.Provider>
  );
}

