import { useState } from "react";
import "./UnlistVenueModal.css";

function UnlistVenueModal({ onUnlist, venueId }) {
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);

  async function onFormSubmit(e)
  {
    e.preventDefault();
    setProcessing(true);

    if(e.target[0].value.trim() === "")
    {
        setError("");
    }
    else if(e.target[0].value === ("Unlist Venue " + venueId))
    {
        await onUnlist();
    }
    else
    {
        setError("Input value does not match required value");
    }
    setProcessing(false);
  }

  return (
    <div className="UnlistVenueModal" onClick={(e) => e.stopPropagation()}>
      <h2>Unlist Venue {venueId}</h2>
      To confirm unlisting venue type "Unlist Venue {venueId}"
      <form
        onSubmit={(e) => onFormSubmit(e)}
      >
        <input type="text" placeholder={"Unlist Venue " + venueId} className={processing?"disabled-text":""} disabled={processing} />
        <input type="submit" value={"Unlist"} className={processing?"disabled-submit":""} disabled={processing} />
      </form>
      <span>{error}</span>
    </div>
  );
}

export default UnlistVenueModal;
