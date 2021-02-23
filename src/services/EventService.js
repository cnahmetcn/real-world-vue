import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/cnahmetcn/real-world-vue",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  }
};
