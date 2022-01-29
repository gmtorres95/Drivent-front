import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class ActivityApi extends AuthenticatedApi {
  getDates() {
    return api.get("/dates", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}
