import axios from "axios";
import { API_URL } from "../constants/contants";

export default class ApiClient {
  constructor() {
    this.base_url = API_URL;
  }
  async postStaff(values) {
    try {
      const response = await axios({
        method: "post",
        url: `${this.base_url}/staff/`,
        data: values,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async getAllStaff() {
    try {
      const response = await axios({
        method: "get",
        url: `${this.base_url}/staff/`,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      return response;
    } catch (error) {
      return error;
    }
  }
}
