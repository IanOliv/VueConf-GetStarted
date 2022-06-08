import axios from "axios";
// const url = 'https://my-json-server.typicode.com/IanOliv/exposeme'
const url = "https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3";
// https://github.com/Code-Pop/Real-World_Vue-3/tree/L5-end
const apiClient = axios.create({
  baseURL: url,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

export default {
  async getEvents() {
    try {
      return await apiClient.get("/events");
    } catch (error) {
      return [];
    }
  },
  async getEvent(id) {
    try {
        return await apiClient.get(`/events/${id}`);
    } catch (error) {
      return [];
    }
  }
};
