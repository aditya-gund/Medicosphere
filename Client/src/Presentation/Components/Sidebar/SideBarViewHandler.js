import { useNavigate } from "react-router-dom";

function SideBarViewHandler(){
    const navigate = useNavigate();
    function redirect(link){
        navigate(link);
    }
    return {
        redirect
    }
}

export default SideBarViewHandler;