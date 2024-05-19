import React, { useEffect, useState } from "react";
import { CrossIcon } from "./icons/cross-icon";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const TicketModal = ({ isOpen, onClose }) => {
  const [cart, setCart] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("Carrito"));
    setCart(cartData);

    if (cartData && cartData.productos.length > 0) {
      const total = cartData.productos.reduce(
        (acc, product) => acc + product.productPrice * product.productAmount,
        0
      );
      setTotalPrice(total);
    }
  }, []);

  if (!isOpen) return null;

  const downloadTicketImage = () => {
    const cardElement = document.getElementById("ticket");
    domtoimage.toBlob(cardElement).then((blob) => {
      saveAs(blob, "factura.png");
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <div className="flex justify-end">
          <button className="mb-4" onClick={onClose}>
            <CrossIcon className="stroke-black" />
          </button>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex flex-col justify-center border border-black bg-white p-10" id="ticket">
            <h1 className="font-bold text-xl mb-4">Factura</h1>
            {cart && cart.productos.length > 0 ? (
              cart.productos.map((product, index) => (
                <div key={index} className="mb-4">
                  <h1 className="font-bold">{product.productName}</h1>
                  <p>Precio: {product.productPrice}€</p>
                  <p>Cantidad: {product.productAmount}</p>
                  <p>Descripción: {product.productDescription}</p>
                </div>
              ))
            ) : (
              <p>No hay productos en el carrito</p>
            )}
            {cart && cart.productos.length > 0 && (
              <div className="mt-4">
                <h2 className="font-bold text-lg">Total: {totalPrice}€</h2>
              </div>
            )}
          </div>
        </div>
        <button className="bg-slate-700 p-2 rounded text-white mt-4" onClick={downloadTicketImage}>
          Descargar Factura
        </button>
      </div>
    </div>
  );
};

export default TicketModal;
