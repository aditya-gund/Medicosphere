import "./Modal.css";

import { useMemo } from "react";
import CancelEventModal from "./Modals/CancelEventModal/CancelEventModal";
import { RedirectNotFound } from "../Screens/NotFound/NotFound";
import UnlistVenueModal from "./Modals/UnlistVenueModal/UnlistVenueModal";
import UpdateVenueModal from "./Modals/UpdateVenueModal/UpdateVenueModal";
import { ExpenseModal } from "./Modals/ExpenseModal/ExpenseModal";
import { useModal } from "../Context/ModalContext";
import { DeleteExpenseModal } from "./Modals/DeleteExpenseModal/DeleteExpense";

function Modal() {
  const { popup, modal: modalName, modalProps, hidePopup } = useModal();
  function hideModal() {
    hidePopup();
  }

  const modal = useMemo(() => {
    switch (modalName) {
      case "":
        return <></>;
      case "CancelEventModal":
        return <CancelEventModal {...modalProps} />;
      case "UnlistVenueModal":
        return <UnlistVenueModal {...modalProps} />;
      case "UpdateVenueModal":
        return <UpdateVenueModal {...modalProps} />;
      case "ExpenseModal":
        return <ExpenseModal {...modalProps} />;
      case "DeleteExpenseModal":
        return <DeleteExpenseModal {...modalProps} />;
      default:
        return <RedirectNotFound />;
    }
  }, [modalName, modalProps]);

  if (popup)
    return (
      <div className="modal-wrapper" onClick={() => hideModal()}>
        {modal}
      </div>
    );
  else return <></>;
}

export default Modal;
