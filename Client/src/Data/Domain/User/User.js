import { signup } from "../../Datasource/User/User_mock";
import { login } from "../../Datasource/User/User_mock";

async function Login(email, password) {
  try {
    const {data} = await login(email, password);
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}

async function Signup(firstName, lastName, email, password) {
  try {
    const { data } = await signup(firstName, lastName, email, password);
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}

export { Login, Signup };
