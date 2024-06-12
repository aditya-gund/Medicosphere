import { useEffect, useState } from "react";
import { SearchUserByEmail } from "../../../../../Data/Domain/User/User";

export function AddAttendeesViewHandler() {
  const [addingUser, setAddingUser] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const [matchedUsers, setMatchedUsers] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    async function updateUserList() {
      const { data, error } = await SearchUserByEmail(searchParam);
      if (!error) {
        setMatchedUsers(data);
      } else {
        console.error(error);
      }
      setSearching(false);
    }
    let timeout = null;
    if (searchParam !== "")
    {
        setSearching(true);
        timeout = setTimeout(() => {
            updateUserList();
          }, 300);
    }
    else
    {
        setSearching(false);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
      setSearching(false);
    };
  }, [searchParam]);

  function toggleAddUserMenu() {
    setAddingUser((state) => !state);
  }

  return {
    addingUser,
    toggleAddUserMenu,
    setSearchParam,
    matchedUsers,
    searching,
    setAddingUser
  };
}
