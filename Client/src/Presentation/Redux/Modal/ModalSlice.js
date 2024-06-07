import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
    name: "Modal",
    initialState: {
        popup: false,
        modal: "",
        modalProps: {}
    },
    reducers: {
        showPopup: (state, action) => {
            state.popup = action.payload.popup;
            state.modal = action.payload.modal;
            state.modalProps = action.payload.modalProps;
        },
        hidePopup: (state) => {
            state.popup = false;
            state.modal = "";
            state.modalProps = {};
        }
    }   
})

export default ModalSlice.reducer;
export const {showPopup, hidePopup} = ModalSlice.actions;