import {useDispatch, useSelector} from "react-redux";
import "./Modal.css";
import { hidePopup } from "../Redux/Modal/ModalSlice";
import { useMemo } from "react";
import CancelEventModal from "./Modals/CancelEventModal/CancelEventModal";
import { RedirectNotFound } from "../Screens/NotFound/NotFound";

function Modal()
{
    const popup = useSelector((state) => state.modal.popup);
    const modalName = useSelector((state) => state.modal.modal);
    const modalProps = useSelector((state) => state.modal.modalProps);
    const dispatch = useDispatch();
    function hideModal()
    {
        dispatch(hidePopup());
    }
    
    const modal = useMemo(() => {
        switch(modalName){
            case "":
                return <></>
            case "CancelEventModal":
                return <CancelEventModal {...modalProps} />
            default:
                return <RedirectNotFound />
        }
    }, [modalName, modalProps])

    if(popup)
    return <div className="modal-wrapper" onClick={() => hideModal()} >
        {modal}
    </div>
    else
    return <></>
    
}

export default Modal;