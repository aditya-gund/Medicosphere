import { useRef, useState } from "react"

function GetStartedViewHandler(){

    const [screenMode, setScreenMode] = useState("login");
    const form = useRef();

    function setLoginMode(){
        setScreenMode("login");
    }

    function setSignupMode(){
        setScreenMode("signup");
    }

    function login(){
        console.log(form.current);
    }

    function signup(){
        console.log(form.current);
    }

    return {
        screenMode,
        setLoginMode,
        setSignupMode,
        form,
        login,
        signup
    }
}

export default GetStartedViewHandler;