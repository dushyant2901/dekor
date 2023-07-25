import React, { useState } from "react";
import { useCart } from "../../context/cartContext";
import { CartItem } from "../../components/CartItem/CartItem";
import { useAdress } from "../../context/adressContext";
import { CartTotal } from "../../components/CartTotal/CartTotal";
import { AdressForm } from "../../components/AdressForm/AdressForm";
import { EditModal } from "../../components/EditModal/EditModal";

export const Checkout = () => {
  const { cart } = useCart();
  const [selectedAdress, setSelectedAdress] = useState(null);
  const { isEditModalOpen } = useAdress();
  const handlePlaceOrder = () => {
    if (!selectedAdress) {
      return;
    }
  };
  return (
    <main>
      <h4 className="text-center my-6 text-3xl">Your Checkout</h4>
      <section className="w-11/12 md:container mx-auto flex  justify-between">
        <div className="w-2/5">
          <AdressForm setSelectedAdress={setSelectedAdress} />
        </div>
        <div className="w-2/5">
          <h4 className="mb-5 text-2xl">Order Summary</h4>
          <section className="space-y-4">
            {cart?.map((cartItem) => (
              <CartItem cartItem={cartItem} minDetail />
            ))}
          </section>
          {cart.length > 0 && <CartTotal />}
        </div>
        {isEditModalOpen && <EditModal />}
        <button onClick={handlePlaceOrder}>Place Order</button>
      </section>
    </main>
  );
};
