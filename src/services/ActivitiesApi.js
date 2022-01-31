import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class ActivitiesApi extends AuthenticatedApi {
  postSubscription(activityId) {
    return api.post(`activity/${activityId}`, {}, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}
