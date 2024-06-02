import { GetVenueById } from "../../../Data/Domain/Venue/Venue";
import { GetUserByEmail } from "../../../Data/Domain/User/User";
import { useEffect, useMemo, useState } from "react";

const bgColorList = [
  "#FFC312",
  "#EE5A24",
  "#C4E538",
  "#A3CB38",
  "#12CBC4",
  "#FDA7DF",
];

const EventCardViewHandler = ({ venueId, hostEmail, eventId }) => {
  const [venue, setVenue] = useState("");
  const [host, setHost] = useState("");
  const [bgColor, setBgColor] = useState("red");
  const [loadingVenue, setLoadingVenue] = useState(false);
  const [loadingHost, setLoadingHost] = useState(false);
  const loading = useMemo(
    () => {
        return loadingVenue || loadingHost},
    [loadingVenue, loadingHost]
  );

  useEffect(() => {
    let id = eventId.substring(5);
    let hash = 0;
    id.split("").forEach((c) => {
      hash += c.charCodeAt(0);
    });
    hash = hash % bgColorList.length;
    setBgColor(bgColorList[hash]);
  }, [eventId]);

  useEffect(() => {
    async function updateVenueFromId() {
      const { data, error } = await GetVenueById(venueId);
      if (!error) {
        setVenue(data);
      } else {
        setVenue("Unable to fetch venue at the moment!!!");
        console.error(error);
      }
      setLoadingVenue(false);
    }
    setLoadingVenue(true);
    updateVenueFromId();
  }, [venueId]);

  useEffect(() => {
    async function updateHostFromEmail() {
      const { data, error } = await GetUserByEmail(hostEmail);
      if (!error) {
        setHost(data);
      } else {
        setHost("Could not fetch hostname");
        console.log(error);
      }
      setLoadingHost(false);
    }
    setLoadingHost(true);
    updateHostFromEmail();
  }, [hostEmail]);

  return {
    venue,
    host,
    bgColor,
    loading,
  };
};

export default EventCardViewHandler;
