import React, { useState } from "react";
import { useCart } from "../../context/cartContext";
import { CartItem } from "../../components/CartItem/CartItem";
import { useAdress } from "../../context/adressContext";
import { CartTotal } from "../../components/CartTotal/CartTotal";
import { AdressForm } from "../../components/AdressForm/AdressForm";
import { EditModal } from "../../components/EditModal/EditModal";
import { toast } from "react-hot-toast";
import { OrderPlaced } from "../../components/OrderPlaced/OrderPlaced";

export const Checkout = () => {
  const { cart } = useCart();
  const [selectedAdress, setSelectedAdress] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { isEditModalOpen } = useAdress();
  const handlePlaceOrder = () => {
    if (!selectedAdress) {
      toast.error("Kindly Select One Adress !!!");
      return;
    }
    setOrderPlaced(true);
  };
  return (
    <main>
      <h4 className="text-center my-6 text-3xl">Your Checkout</h4>
      <section className="w-11/12 md:container mx-auto ">
        <div className="flex  justify-between gap-10 md:gap-0">
          <div className=" w-1/2 md:w-2/5">
            <AdressForm setSelectedAdress={setSelectedAdress} />
          </div>
          <div className="w-1/2 md:w-2/5">
            <h4 className="mb-5 text-2xl">Order Summary</h4>
            <section className="space-y-4">
              {cart?.map((cartItem) => (
                <CartItem cartItem={cartItem} minDetail />
              ))}
            </section>
            {cart.length > 0 && <CartTotal />}
          </div>
        </div>
        {isEditModalOpen && <EditModal />}
        <button
          onClick={handlePlaceOrder}
          className="w-max text-white bg-primary hover:opacity-90  rounded-lg text-md md:text-lg px-5 py-1.5 mt-10"
        >
          Place Order
        </button>
        {orderPlaced && <OrderPlaced setOrderPlaced={setOrderPlaced} />}
      </section>
    </main>
  );
};
