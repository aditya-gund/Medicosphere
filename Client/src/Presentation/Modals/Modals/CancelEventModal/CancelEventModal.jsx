import "./CancelEventModal.css";
import { useState } from "react";

function CancelEventModal({onConfirm, eventId}) {

  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  async function checkConfirm(e)
  {
    e.preventDefault();
    setProcessing(true);
    const input = e.target[0].value;
    if(input === "")
        setError(null);
    else if(input === "Cancel "+eventId)
    {
      await onConfirm();
    }
    else
      setError("Input does not match required value");
    setProcessing(false);
  }

  return (
    <div className="cancel-event-modal" onClick={(e) => {e.stopPropagation()}}>
        <h2>Cancel {eventId}</h2>
        To confirm, type "Cancel {eventId}" in the box below
      <form onSubmit={(e) => checkConfirm(e)} >
        <input type="text" name="confirmInput" disabled={processing} />
        <input type="submit" value="Confirm Cancellation" disabled={processing} />
      </form>
      <span>{error? error: ""}</span>
    </div>
  );
}

export default CancelEventModal;
