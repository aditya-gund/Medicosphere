import { createContext, useCallback, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalContextProvider = ({children}) => {

    const [modal, setModal] = useState("");
    const [modalProps, setModalProps] = useState({});
    const [popup, setPopup] = useState(false);

    const showPopup = useCallback((modal, modalProps) => {
        setPopup(true);
        setModal(modal);
        setModalProps(modalProps);
    }, []);

    const hidePopup = useCallback(() => {
        setPopup(false);
        setModal("");
        setModalProps({});
    }, [])

    const value = {
        modal,
        modalProps,
        popup,
        hidePopup,
        showPopup,
    }

    return <ModalContext.Provider value={value}>
        {children}
    </ModalContext.Provider>
}

export function useModal()
{
    return useContext(ModalContext);
}