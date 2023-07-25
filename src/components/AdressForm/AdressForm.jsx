import React from "react";
import { useAdress } from "../../context/adressContext";

export const AdressForm = ({ setSelectedAdress }) => {
  const { adresses, removeAdress, openEditModal, setEditAdressId } =
    useAdress();

  const handleEditClick = (id) => {
    setEditAdressId(id);
    openEditModal({ type: "edit-adress" });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h4 className="text-2xl mb-4">Adress Details</h4>
      {adresses.map((adress) => (
        <article className="bg-lightPrimary border border-primary rounded-md p-3 shadow-sm my-5 hover:shadow-md cursor-pointer">
          <input
            type="radio"
            name="adress"
            onChange={() => setSelectedAdress(adress.adress)}
            id={`adress-${adress._id}`}
          />
          <label htmlFor={`adress-${adress._id}`}>
            <h3> {adress.adress}</h3>
            <div className="">
              <button
                onClick={() => handleEditClick(adress._id)}
                className="w-max text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-5 py-1.5  "
              >
                Edit
              </button>
              <button
                onClick={() => removeAdress(adress._id)}
                className="w-max text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-5 py-1.5  "
              >
                Remove
              </button>
            </div>
          </label>
        </article>
      ))}
      <button
        onClick={() => openEditModal({ type: "add-adress" })}
        className="w-max text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-5 py-1.5  "
      >
        Add Adress
      </button>
    </form>
  );
};
