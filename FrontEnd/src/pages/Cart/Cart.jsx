import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { CardProduct } from "../../components/CardProduct";
import PagarModal from "../../components/PagarModal";

export default function Cart() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("Carrito"));
    if (cartData && cartData.productos) {
      setCartProducts(cartData.productos);
    }
    console.log(cartData);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-end mr-52 items-center mt-14">
        <button onClick={openModal} className="bg-emerald-400  hover:bg-emerald-500 p-5 rounded-md">
          Realizar Pedido
        </button>
      </div>

      <div className="flex gap-3 m-5 flex-wrap justify-center">
        {cartProducts.map((product, index) => (
          <div key={index}>
            <CardProduct product={product} />
          </div>
        ))}
      </div>
      <PagarModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
