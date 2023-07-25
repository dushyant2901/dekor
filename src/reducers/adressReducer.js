import {
  LOAD_ADRESS,
  ADD_ADRESS,
  REMOVE_ADRESS,
  EDIT_ADRESS,
  OPEN_EDIT_MODAL,
  CLOSE_EDIT_MODAL,
  SET_EDIT_ADRESS_ID,
} from "../utils/actions";

export const adressReducer = (state, { type, payload }) => {
  if (type === LOAD_ADRESS) {
    console.log({ payload });
    return {
      ...state,
      adresses: [...payload],
    };
  }
  if (type === ADD_ADRESS) {
    console.log({ payload, from: "add to adress" });
    return {
      ...state,
      adresses: [...state.adresses, payload],
    };
  }
  if (type === REMOVE_ADRESS) {
    console.log({ payload, from: "remove from cart" });
    return {
      ...state,
      adresses: state.adresses.filter(({ _id }) => _id !== payload),
    };
  }
  if (type === EDIT_ADRESS) {
    console.log({ payload, from: "remove from cart" });
    return {
      ...state,
      adresses: state.adresses.map((adress) =>
        adress._id === state.editAdressId ? payload : adress
      ),
    };
  }
  if (type === SET_EDIT_ADRESS_ID) {
    console.log({ payload, from: "remove from cart" });
    return {
      ...state,
      editAdressId: payload,
    };
  }
  if (type === OPEN_EDIT_MODAL) {
    console.log({ payload, from: "open edit" });
    return {
      ...state,
      isEditModalOpen: true,
    };
  }
  if (type === CLOSE_EDIT_MODAL) {
    console.log({ payload, from: "remove from cart" });
    return {
      ...state,
      isEditModalOpen: false,
    };
  }

  throw new Error(`No Matching "${type}" - action type`);
};
