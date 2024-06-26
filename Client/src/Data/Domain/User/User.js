//import { signup } from "../../Datasource/User/User_mock";
//import { login } from "../../Datasource/User/User_mock";
import {  login } from "../../Datasource/User/User_mock";
import { signup } from "../../Datasource/User/User_mock";
import { searchUserByEmail } from "../../Datasource/User/User_mock";

export async function Login(email, password) {
  try {
    const {data} = await login(email, password);
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
  return {data: {firstName: "Test Name Reset", lastName: ""}};
  // try {
    
  //   const { data } = await getNameByEmail(email);
  //   return { data, error: null };
  // } catch (error) {
  //   return { data: null, error: error };
  // }
}

export async function SearchUserByEmail(match)
{
  try{
    const {data} = await searchUserByEmail(match);
    return {data, error: null};
  }
  catch(error)
  {
    return {data: null, error};
  }
}