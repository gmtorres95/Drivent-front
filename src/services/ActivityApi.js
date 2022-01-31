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

  postSubscription(activityId) {
    return api.post(`activities/${activityId}`, {}, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }

  getActivitiesByDate(dateId) {
    return api.get(`/activities/${dateId}`, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}
