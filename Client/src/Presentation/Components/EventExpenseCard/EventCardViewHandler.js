import { GetUserByEmail } from "../../../Data/Domain/User/User";
import { useEffect, useState } from "react";

const bgColorList = [
  "#FFC312",
  "#EE5A24",
  "#C4E538",
  "#A3CB38",
  "#12CBC4",
  "#FDA7DF",
];

const EventCardViewHandler = ({ eventId }) => {
  // const [host, setHost] = useState("");
  const [bgColor, setBgColor] = useState("red");

  useEffect(() => {
    let id = eventId.substring(5);
    let hash = 0;
    id.split("").forEach((c) => {
      hash += c.charCodeAt(0);
    });
    hash = hash % bgColorList.length;
    setBgColor(bgColorList[hash]);
  }, [eventId]);

  // useEffect(() => {
  //   async function updateHostFromEmail() {
  //     const { data, error } = await GetUserByEmail(hostEmail);
  //     console.log("Fetched user ");
  //     console.log(data);
  //     if (!error) {
  //       setHost(data);
  //     } else {
  //       setHost("Could not fetch hostname");
  //       console.log(error);
  //     }
  //   }
  //   updateHostFromEmail();
  // }, [hostEmail]);

  return {
    // host,
    bgColor
  };
};

export default EventCardViewHandler;
