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

  postTicket(body) {
    return api.post("/ticket", body, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }

  updateTicket() {
    return api.put("/ticket/payment", {}, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}