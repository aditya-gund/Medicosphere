import { useRef, useState } from "react";
import { Login, Signup } from "../../../Data/Domain/User/User";
import { useNavigate } from "react-router-dom";

function GetStartedViewHandler() {
  const [screenMode, setScreenMode] = useState("login");
  const form = useRef();
  const navigate = useNavigate();

  function setLoginMode() {
    setScreenMode("login");
  }

  function setSignupMode() {
    setScreenMode("signup");
  }

  function login(e) {
    e.preventDefault();
    const values = new FormData(form.current);
    const email = values.get("email");
    const password = values.get("password");
    Login(email, password).then(({ data, error }) => {
      if (data === true) {
        navigate("/home", { state: { email } });
      } else if (data === false) {
        alert("Invalid username or password");
      } else {
        alert("An error has occurred. Check console for more information.");
        console.log(error);
      }
    });
  }

  function signup(e) {
    e.preventDefault();
    const values = new FormData(form.current);
    const email = values.get("email");
    const password = values.get("password");
    const firstName = values.get("firstName");
    const lastName = values.get("lastName");
    const confirmPassword = values.get("confirmPassword");

    if (confirmPassword === password) {
      Signup(firstName, lastName, email, password).then(({ data, error }) => {
        if (data === true) {
          navigate("/home", { state: { email } });
        }
        else if(data === false)
        {
            alert("Email is already registered to an existing account");
        } 
        else {
          alert("An error has occurred. Check console for more information.");
          console.log(error);
        }
      });
    } else {
      alert("Password does not match with confirm password");
    }
  }

  return {
    screenMode,
    setLoginMode,
    setSignupMode,
    form,
    login,
    signup,
  };
}

export default GetStartedViewHandler;
