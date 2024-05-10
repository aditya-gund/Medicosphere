import { createContext, useContext, useState } from "react";


const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [firstname,setFirstname] = useState();
    const [lastname,setLastname] = useState();
    const [email,setEmail] = useState();
    const [role,setRole] = useState();

    function setUser(firstname, lastname, email, role){
        setFirstname(firstname);
        setLastname(lastname);
        setEmail(email);
        setRole(role);
    }

    const value = {
        firstname,
        lastname,
        email,
        role,
        setUser
    }

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

export const useUser = () => {
    return useContext(UserContext);
}