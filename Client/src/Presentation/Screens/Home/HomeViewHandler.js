import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../Redux/User/UserSlice";

function HomeViewHandler()
{
    const [searchEventParam, setSearchEventParam] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const {user, updateUser} = useUser();

    useEffect(() => {
        if(user.email === null)
        {
            const storedUser = JSON.parse(sessionStorage.getItem("user"));
            if(storedUser !== null)
                updateUser(storedUser);
        }
        else
            sessionStorage.setItem("user", JSON.stringify(user));
    }, [user, updateUser]);

    useEffect(() => {
        if(searchEventParam !== "" && location.pathname !== "/Home/Events")
        navigate("/Home/Events");
    }, [searchEventParam, location, navigate])

    return {
        searchEventParam,
        setSearchEventParam
    }
}

export default HomeViewHandler;