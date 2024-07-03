import { GetUserByEmail } from "../../../Data/Domain/User/User";
import { useEffect, useMemo, useState } from "react";
import { CancelEvent } from "../../../Data/Domain/Event/Event";
import { useModal } from "../../Redux/Modal/ModalSlice";

const bgColorList = [
  "#FFC312",
  "#EE5A24",
  "#C4E538",
  "#A3CB38",
  "#12CBC4",
  "#FDA7DF",
];

const EventCardViewHandler = ({ hostEmail, eventId, checkAndUpdateEvents }) => {
  const [host, setHost] = useState("");
  const [bgColor, setBgColor] = useState("red");
  const [loadingVenue, setLoadingVenue] = useState(false);
  const [loadingHost, setLoadingHost] = useState(false);
  const { showPopup, hidePopup } = useModal();

  async function cancelEvent() {
    const { data, error } = await CancelEvent();
    if (data) {
      alert(eventId + " deleted successfully.");
      console.log(data);
      checkAndUpdateEvents();
    } else {
      alert("Unexpected error encountered while trying to cancel " + eventId);
      console.error(error);
    }

    hidePopup();
  }

  function ShowCancelMenu() {
    showPopup("CancelEventModal", { onConfirm: async () => await cancelEvent(), eventId: eventId });
  }

  const loading = useMemo(() => {
    return loadingVenue || loadingHost;
  }, [loadingVenue, loadingHost]);

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
    host,
    bgColor,
    loading,
    ShowCancelMenu,
  };
};

export default EventCardViewHandler;
