import React, { useEffect, useState } from "react";
import { CrossIcon } from "./icons/cross-icon";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const TicketModal = ({ isOpen, onClose }) => {
  const [cart, setCart] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryOption, setDeliveryOption] = useState("recogida"); // "recogida" or "domicilio"
  const [storeLocation, setStoreLocation] = useState("");
  const [userAddress, setUserAddress] = useState("");

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

    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserAddress(userData.userAddress);
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
      <div className="bg-white p-8 rounded-lg m-10">
        <div className="flex justify-end">
          <button className="mb-4" onClick={onClose}>
            <CrossIcon className="stroke-black" />
          </button>
        </div>
        <div className="flex flex-col items-start">
          <div
            className="flex flex-col justify-center border border-black bg-white p-10"
            id="ticket"
          >
            <h1 className="font-bold text-xl mb-4">Factura</h1>
            {cart && cart.productos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 gap-4">
                {cart.productos.map((product, index) => (
                  <div key={index} className="mb-4">
                    <h1 className="font-bold">{product.productName}</h1>
                    <p>Precio: {product.productPrice}€</p>
                    <p>Cantidad: {product.productAmount}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No hay productos en el carrito</p>
            )}
            {cart && cart.productos.length > 0 && (
              <div className="mt-4">
                <h2 className="font-bold text-lg">Total: {totalPrice}€</h2>
              </div>
            )}
            <div className="mt-4">
              <h2 className="font-bold text-lg">Método de entrega:</h2>
              <button
                className="bg-slate-700 p-2 rounded text-white mt-2"
                onClick={() =>
                  setDeliveryOption(
                    deliveryOption === "recogida" ? "domicilio" : "recogida"
                  )
                }
              >
                {deliveryOption === "recogida"
                  ? "Recogida en tienda"
                  : "Pedido a domicilio"}
              </button>
              {deliveryOption === "recogida" ? (
                <div className="mt-4">
                  <label htmlFor="storeLocation" className="block font-bold">
                    Selecciona la tienda:
                  </label>
                  <select
                    id="storeLocation"
                    className="border rounded p-2 mt-2"
                    value={storeLocation}
                    onChange={(e) => setStoreLocation(e.target.value)}
                  >
                    <option value="" disabled>
                      Selecciona una tienda
                    </option>
                    <option value="Tienda 1">Tienda 1</option>
                    <option value="Tienda 2">Tienda 2</option>
                    <option value="Tienda 3">Tienda 3</option>
                  </select>
                </div>
              ) : (
                <div className="mt-4">
                  <h2 className="font-bold">Dirección de entrega:</h2>
                  <p>{userAddress}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <button
          className="bg-slate-700 p-2 rounded text-white mt-4"
          onClick={downloadTicketImage}
        >
          Descargar Factura
        </button>
      </div>
    </div>
  );
};

export default TicketModal;
