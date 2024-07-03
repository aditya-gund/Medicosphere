import { useMemo } from "react";
import { GetCountries } from "../../../Data/Domain/Venue/Venue";

function VenueDetailsForm({
  address,
  setAddress,
  country,
  setCountry,
  state,
  setState,
  city,
  setCity,
  onSubmit,
  submitValue,
}) {
  const countries = useMemo(() => GetCountries(), []);

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
          setCity({});
          setState({});
        }}
        name="country"
        required
      >
        <option hidden value="">
          --select country--
        </option>
        {countries.map(({ country }) => (
          <option value={country}>{country}</option>
        ))}
      </select>
      <select
        value={state}
        onChange={(e) => {
          setState(e.target.value);
          setCity({});
        }}
        name="state"
        disabled={JSON.stringify(country) === JSON.stringify({})}
        required
      >
        <option hidden value="">
          --select state--
        </option>
        {JSON.stringify(country) !== JSON.stringify({})
          ? countries
              .filter((countryValue) => countryValue.country === country)[0]
              .states.map((stateValue) => (
                <option value={stateValue.state}>{stateValue.state}</option>
              ))
          : ""}
      </select>
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        name="city"
        disabled={JSON.stringify(state) === JSON.stringify({})}
        required
      >
        <option hidden value="">
          --select city--
        </option>
        {JSON.stringify(country) !== JSON.stringify({}) &&
        JSON.stringify(state) !== JSON.stringify({})
          ? countries
              .filter((countryValue) => countryValue.country === country)[0]
              .states.filter((stateValue) => stateValue.state === state)[0]
              .cities.map((cityValue) => (
                <option value={cityValue}>{cityValue}</option>
              ))
          : ""}
      </select>
      <input type="submit" value={submitValue} />
    </form>
  );
}

export default VenueDetailsForm;
