import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class TicketApi extends AuthenticatedApi {
  getTicketByUser() {
    return api.get("/ticket/payment", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}
