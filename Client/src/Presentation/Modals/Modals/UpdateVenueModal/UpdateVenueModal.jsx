import { useState } from "react";
import "./UpdateVenueModal.css";
import VenueDetailsForm from "../../../Components/VenueDetailsForm/VenueDetailsForm";

function UpdateVenueModal({
  id,
  address: old_address,
  country: old_country,
  state: old_state,
  city: old_city,
  onUpdate,
}) {
  const [address, setAddress] = useState(old_address);
  const [country, setCountry] = useState(old_country);
  const [city, setCity] = useState(old_city);
  const [state, setState] = useState(old_state);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await onUpdate(
      {
        id,
        address: old_address,
        city: old_city,
        state: old_state,
        country: old_country,
      },
      { id, address, city, state, country }
    );
    setLoading(false);
    console.log("Called submit of modal");
  }

  return (
    <div className="update-venue-modal" onClick={(e) => e.stopPropagation()}>
      <h2>Update Venue {id}</h2>
      <VenueDetailsForm
        address={address}
        country={country}
        state={state}
        city={city}
        setAddress={setAddress}
        setCity={setCity}
        setState={setState}
        setCountry={setCountry}
        onSubmit={onSubmit}
        submitValue="Update Venue"
        loading={loading}
      />
    </div>
  );
}

export default UpdateVenueModal;
