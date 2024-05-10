//actual code to call existing java api will be written here using axios
import axios from "axios";
const link = "http://localhost:8080/user";

async function login(email, password) {
  const call = link + "/login";
  return axios.post(call, { email, password });
}

async function signup(firstname, lastname, email, password, role) {
  const call = link + "/signup";
  return axios.post(call, { firstname, lastname, email, password, role });
}

export { login, signup };
