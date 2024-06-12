import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function HomeViewHandler()
{
    const [searchEventParam, setSearchEventParam] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

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