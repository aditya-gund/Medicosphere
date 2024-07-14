//import { signup } from "../../Datasource/User/User_mock";
//import { login } from "../../Datasource/User/User_mock";
import { getUserByEmail, getUserById, login, updateUserImage } from "../../Datasource/User/User_mock";
import { signup } from "../../Datasource/User/User_mock";
import { searchUserByEmail } from "../../Datasource/User/User_mock";

export async function Login(email, password) {
  try {
    const { data } = await login(email, password);
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}

export async function Signup(firstName, lastName, email, password, role) {
  try {
    const { data } = await signup(firstName, lastName, email, password, role);
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}

export async function GetUserByEmail(email) {
  try {
    const { data } = await getUserByEmail(email);
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}

export async function GetUserById(userId) {
  try {
    const { data } = await getUserById(userId);
    return { data };
  } catch (error) {
    return { error };
  }
}

export async function SearchUserByEmail(match) {
  try {
    const { data } = await searchUserByEmail(match);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export async function UpdateProfilePicture(id, image) {
  try {
    const { data } = await updateUserImage(id, image);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}