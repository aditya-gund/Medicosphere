import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    role: null,
    profilePic: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.profilePic = action.payload.profilePic;
    },
    removeUser: (state) => {
      state = {
        id: null,
        firstname: null,
        lastname: null,
        email: null,
        role: null,
        profilePic: null
      };
    },
  },
});

export function useUser() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function updateUser(userArg) {
    dispatch(setUser(userArg));
  }

  function logout() {
    dispatch(
      setUser({
        id: null,
        firstName: null,
        lastName: null,
        email: null,
        role: null,
        profilePic: null
      })
    );
    navigate("/");
  }

  return {
    user,
    updateUser,
    logout
  };
}

export const { setUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
