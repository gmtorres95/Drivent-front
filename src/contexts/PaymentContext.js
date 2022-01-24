import { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const PaymentContext = createContext();
export default PaymentContext;

export function PaymentProvider({ children }) {
  const [isPaid, setIsPaid] = useLocalStorage("PaymentData", {});
  
  return (
    <PaymentContext.Provider value={{ isPaid, setIsPaid }}>
      {children}
    </PaymentContext.Provider>
  );
}
