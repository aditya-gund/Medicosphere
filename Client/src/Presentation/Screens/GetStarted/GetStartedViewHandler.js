import { useRef, useState } from "react";
import { Login, Signup } from "../../../Data/Domain/User/User";
import { useNavigate } from "react-router-dom";
// import { useUser } from "../../Context/UserContext";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/User/UserSlice";

function GetStartedViewHandler() {
  const [screenMode, setScreenMode] = useState("login");
  const form = useRef();
  const navigate = useNavigate();
  // const { setUser } = useUser();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setUser();
  // }, [setUser]);

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

      if (data) {
        // setUser(data.firstname, data.lastname, data.email, data.role);
        dispatch(setUser({firstName: data.firstName,lastName: data.lastName,email: data.email, role: data.role}));
        navigate("/home");
      } else {
        if (error && (error.response.status === 401 || error.response.status === 403)) {
          alert("Invalid email or password");
        } else {
          alert("Oops!!! Looks like the api has some issues");
        }
      }
      // if (data === true) {
      //   navigate("/home", { state: { email } });
      // } else if (data === false) {
      //   alert("Invalid username or password");
      // } else {
      //   alert("An error has occurred. Check console for more information.");
      //   console.log(error);
      // }
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
    const role = values.get("role");    

    if (confirmPassword === password) {
      Signup(firstName, lastName, email, password, role).then(({ data, error }) => {
        if (data) {
          dispatch(setUser({firstName: data.firstname,lastName: data.lastname,email: data.email,role: data.role}));
          navigate("/home");
        } else {
          if (error && (error.response.status === 401 || error.response.status === 403)) {
            alert("Invalid email or password");
          } else {
            alert("Oops!!! Looks like the api has some issues");
          }
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
