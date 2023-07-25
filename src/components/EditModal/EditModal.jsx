import React, { useEffect, useState } from "react";
import { useAdress } from "../../context/adressContext";

export const EditModal = () => {
  const {
    closeEditModal,
    editAdressId,
    adresses,
    editAdress,
    addAdress,
    modalType,
  } = useAdress();
  const [adress, setAdress] = useState(null);
  useEffect(() => {
    if (modalType === "edit-adress") {
      const adress = adresses.find(({ _id }) => _id === editAdressId);
      setAdress(adress);
    }
  }, [editAdressId]);

  const handleAdressChange = (e) => {
    setAdress({ ...adress, adress: e.target.value });
  };
  const handleSubmitBtn = (e) => {
    e.preventDefault();
    modalType === "edit-adress"
      ? editAdress(adress)
      : addAdress({ ...adress, _id: Math.random() * 1000 });
    closeEditModal();
  };
  return (
    <article className="bg-lightPrimary fixed inset-0 flex flex-col items-center justify-center">
      <form className="flex flex-col gap-4 border-primary border shadow-md rounded-md bg-white relative p-4 w-9/12 md:w-1/3">
        <button onClick={closeEditModal} className="absolute right-3 top-3">
          close
        </button>
        <h3 className="text-lg text-center ">
          {modalType === "edit-adress" ? "Edit Adress" : "Add Adress"}
        </h3>
        <textarea
          type="text"
          value={adress?.adress}
          onChange={(e) => handleAdressChange(e)}
          className="p-3 rounded-md "
        />
        <button onClick={(e) => handleSubmitBtn(e)}>Submit</button>
      </form>
    </article>
  );
};
