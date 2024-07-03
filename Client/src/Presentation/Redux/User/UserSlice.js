import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const UserSlice = createSlice({
    name: "user",
    initialState: {
        firstName: null,
        lastName: null,
        email: null,
        role: null
    },
    reducers:{
        setUser: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.role = action.payload.role;
            
        },
        removeUser: (state) => {
            state = {
                firstname: null,
                lastname: null,
                email: null,
                role: null
            }
        }
    }
});

export function useUser()
{
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    function updateUser(userArg)
    {
        dispatch(setUser(userArg));
    }

    return {
        user,
        updateUser
    }
}

export const {setUser, removeUser} = UserSlice.actions;
export default UserSlice.reducer;