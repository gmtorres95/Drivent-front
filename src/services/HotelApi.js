import api from "./api";

export default class HotelApi {
  getRoomsByHotelId(hotelId) {
    return api.get(`/rooms/${hotelId}`);
  }

  getHotelsList() {
    return api.get("/hotels");
  }
}
