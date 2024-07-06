import { useCallback, useEffect, useState } from "react";
import {
  GetAllVenues,
  RegisterVenue,
  UnlistVenue,
  UpdateVenue,
} from "../../../Data/Domain/Venue/Venue";
import { useModal } from "../../Redux/Modal/ModalSlice";

function VenueViewHandler() {
  const [address, setAddress] = useState("");
  const [venues, setVenues] = useState([]);
  const [country, setCountry] = useState({});
  const [state, setState] = useState({});
  const [city, setCity] = useState({});
  const [loadingVenues, setLoadingVenues] = useState(true);
  const [registeringVenue, setRegisteringVenue] = useState(false);

  const { showPopup, hidePopup } = useModal();

  const updateVenueList = useCallback(async () => {
    setLoadingVenues(true);
    const { data, error } = await GetAllVenues();
    if (!error) {
      setVenues(data);
      setLoadingVenues(false);
    } else {
      alert("Oops! An error occurred while trying to fetch venues");
      console.error(error);
    }
  }, []);

  useEffect(() => {
    updateVenueList();
  }, [updateVenueList]);

  async function unlist(venueId) {
    const unlist = await UnlistVenue(venueId);
    if (unlist) {
      alert("Venue deleted successfully.");
      updateVenueList();
    } else {
      alert(
        "Oops! we ran into an issue while trying to complete your request."
      );
    }
    hidePopup();
  }

  async function update({ id, address, country, city, state }, newValue) {
    if (
      address !== newValue.address ||
      country !== newValue.country ||
      city !== newValue.city ||
      state !== newValue.state
    ) {
      const { data, error } = await UpdateVenue(
        id,
        newValue.address,
        newValue.state,
        newValue.city,
        newValue.country
      );
      if (data) {
        alert("Venue updated successfully.");
        updateVenueList();
      } else {
        alert(
          "Oops! an error occurred while trying to update venue " +
            id +
            ". Please check console for more details"
        );
        console.error(error);
      }
    }
    hidePopup();
  }

  function onUnlist(venueId) {
    showPopup("UnlistVenueModal", { onUnlist: () => unlist(venueId), venueId });
  }

  function onUpdatePress({ id, address, country, city, state }) {
    showPopup("UpdateVenueModal", {
      id,
      address,
      country,
      city,
      state,
      onUpdate: update,
    });
  }

  async function onNewVenueFormSubmit(e) {
    e.preventDefault();
    function getElement(key) {
      return e.target.elements[key].value;
    }
    setRegisteringVenue(true);
    const { data, error } = await RegisterVenue(
      getElement("address"),
      getElement("city"),
      getElement("state"),
      getElement("country")
    );
    if (!error) {
      setRegisteringVenue(false);
      setAddress("");
      setCity({});
      setState({});
      setCountry({});
      alert("Event created successfully");
      console.log(data);
      updateVenueList();
    } else {
      setRegisteringVenue(false);
      alert(
        "Unable to create due to unexpected issues. Please check console for details."
      );
      console.error(error);
    }
    
  }

  return {
    venues,
    state,
    setState,
    country,
    setCountry,
    city,
    setCity,
    onUnlist,
    loadingVenues,
    onUpdatePress,
    address,
    setAddress,
    onNewVenueFormSubmit,
    registeringVenue
  };
}

export default VenueViewHandler;
