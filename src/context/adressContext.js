import React, { useContext, useEffect, useReducer, useState } from "react";
import { useAuth } from "./authContext";
import {
  ADD_ADRESS,
  REMOVE_ADRESS,
  LOAD_ADRESS,
  EDIT_ADRESS,
  SET_EDIT_ADRESS_ID,
  OPEN_EDIT_MODAL,
  CLOSE_EDIT_MODAL,
} from "../utils/actions";
import { adress1, adress2 } from "../utils/constants";
import { adressReducer } from "../reducers/adressReducer";
import { toast } from "react-hot-toast";
const initialAdressState = {
  adresses: [],
  isEditModalOpen: false,
  editAdressId: null,
};

const AdressContext = React.createContext();

export const AdressProvider = ({ children }) => {
  const [adressState, adressDispatch] = useReducer(
    adressReducer,
    initialAdressState
  );
  const [modalType, setModalType] = useState(null);
  const { token } = useAuth();
  const dummyAdresses = [adress1, adress2];
  useEffect(() => {
    if (!token) return;
    const getUserAdress = async () => {
      try {
        adressDispatch({ type: LOAD_ADRESS, payload: [...dummyAdresses] });
      } catch (error) {
        console.log(error);
      }
    };
    getUserAdress();
  }, [token]);

  const addAdress = async (adressDetails) => {
    try {
      adressDispatch({ type: ADD_ADRESS, payload: adressDetails });
      toast.success("Adress Added !!!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !!!");
    }
  };
  const removeAdress = async (adressId) => {
    try {
      adressDispatch({ type: REMOVE_ADRESS, payload: adressId });
      toast.success("Adress Removed !!!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !!!");
    }
  };
  const editAdress = async (adressId) => {
    try {
      adressDispatch({ type: EDIT_ADRESS, payload: adressId });
      toast.success("Adress Edited Succesfully !!!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !!!");
    }
  };
  const setEditAdressId = async (adressId) => {
    try {
      adressDispatch({ type: SET_EDIT_ADRESS_ID, payload: adressId });
    } catch (error) {
      console.log(error);
    }
  };
  const openEditModal = ({ type }) => {
    setModalType(type);
    adressDispatch({ type: OPEN_EDIT_MODAL });
  };
  const closeEditModal = () => adressDispatch({ type: CLOSE_EDIT_MODAL });
  return (
    <AdressContext.Provider
      value={{
        ...adressState,
        addAdress,
        removeAdress,
        editAdress,
        setEditAdressId,
        openEditModal,
        closeEditModal,
        modalType,
      }}
    >
      {children}
    </AdressContext.Provider>
  );
};

export const useAdress = () => useContext(AdressContext);
