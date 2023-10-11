import axios from "axios";
import authHeader from "./auth-header";

export default function getUserBoard() {
  return axios.get("http://localhost:3000/api/user/", { headers: authHeader() });
}
