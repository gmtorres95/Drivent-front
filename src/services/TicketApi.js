import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class TicketApi extends AuthenticatedApi {
  getTicketByUser() {
    return api.get("/ticket", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }

  updateTicketPayment() {
    return api.put("/ticket/payment", {}, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }

  updateTicketBooking(roomId) {
    return api.post(`/ticket/booking/${roomId}`, {}, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}
