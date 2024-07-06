import VenueDetailsForm from "../../Components/VenueDetailsForm/VenueDetailsForm";
import "./Venue.css";
import VenueViewHandler from "./VenueViewHandler";

function Venue() {
  const {
    venues,
    address,
    setAddress,
    state,
    setState,
    country,
    setCountry,
    city,
    setCity,
    onUnlist,
    loadingVenues,
    onUpdatePress,
    onNewVenueFormSubmit,
    registeringVenue,
  } = VenueViewHandler();
  return (
    <div className="Venue">
      <div className="venue-list">
        <h2>Registered Venues</h2>
        {loadingVenues ? (
          <div className="loader"></div>
        ) : (
          <div className="venue-list-data">
            <div>Venue ID</div>
            <div>Address</div>
            <div>Country</div>
            <div>City</div>
            <div>State</div>
            <div></div>
            <div></div>

            {venues.map(({ id, address, country, city, state }) => (
              <VenueRow
                key={id}
                id={id}
                address={address}
                country={country}
                city={city}
                state={state}
                onUnlist={() => {
                  onUnlist(id);
                }}
                onUpdate={() =>
                  onUpdatePress({
                    id: id,
                    address: address,
                    country: country,
                    state: state,
                    city: city,
                  })
                }
              />
            ))}
          </div>
        )}
      </div>
      <div className="new-venue">
        <h2>Register New Venue</h2>
        <VenueDetailsForm
          country={country}
          city={city}
          state={state}
          address={address}
          setCountry={setCountry}
          setState={setState}
          setCity={setCity}
          setAddress={setAddress}
          onSubmit={onNewVenueFormSubmit}
          loading={registeringVenue}
          submitValue={"Register Venue"}
        />
      </div>
    </div>
  );
}

export default Venue;

function VenueRow({ id, address, country, city, state, onUpdate, onUnlist }) {
  return (
    <>
      <div>{id}</div>
      <div>{address}</div>
      <div>{country}</div>
      <div>{city}</div>
      <div>{state}</div>
      <button onClick={() => onUpdate()}>Update</button>
      <button onClick={() => onUnlist()}>Unlist</button>
    </>
  );
}
