import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const ModalSlice = createSlice({
  name: "Modal",
  initialState: {
    popup: false,
    modal: "",
    modalProps: {},
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
    },
  },
});

export default ModalSlice.reducer;
const { showPopup, hidePopup } = ModalSlice.actions;

export function useModal() {
  const popup = useSelector((state) => state.modal.popup);
  const modal = useSelector((state) => state.modal.modal);
  const modalProps = useSelector((state) => state.modal.modalProps);

  const dispatch = useDispatch();

  function displayPopup(modal, modalProps) {
    dispatch(showPopup({ popup: true, modal, modalProps }));
  }

  function removePopup() {
    dispatch(hidePopup());
  }

  return {
    popup,
    modal,
    modalProps,
    showPopup: displayPopup,
    hidePopup: removePopup,
  };
}
