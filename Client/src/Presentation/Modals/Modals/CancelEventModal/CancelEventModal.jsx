import { useState } from "react";
import "./CancelEventModal.css";
import { useDispatch } from "react-redux";
import { hidePopup } from "../../../Redux/Modal/ModalSlice";

function CancelEventModal({onConfirm, eventId}) {

  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  function checkConfirm(e)
  {
    e.preventDefault();
    const input = e.target[0].value;
    if(input === "Cancel "+eventId)
    {
     onConfirm();
      dispatch(hidePopup())
    }
    else
      setError("Input does not match required value");
  }

  return (
    <div className="cancel-event-modal" onClick={(e) => {e.stopPropagation()}}>
        <h2>Cancel {eventId}</h2>
        To confirm, type "Cancel {eventId}" in the box below
      <form onSubmit={(e) => checkConfirm(e)} >
        <input type="text" name="confirmInput" />
        <input type="submit" value="Confirm Cancellation" />
      </form>
      <span>{error? error: ""}</span>
    </div>
  );
}

export default CancelEventModal;
