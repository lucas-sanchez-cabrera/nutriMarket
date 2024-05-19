import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PlusIcon } from "../components/icons/plus-icon";
import { InfoIcon } from "../components/icons/info-icon";
import { LessIcon } from "../components/icons/less-icon";
import ProductModal from "./ProductModal";
import { isLoggedIn } from "../services/ClientService";

export const CardProduct = ({ product }) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const location = useLocation();

  // State to hold the product amount
  const [productAmount, setProductAmount] = useState(0);

  useEffect(() => {
    // Update the product amount from the cart when the component mounts
    setProductAmount(getProductAmount(product.productId));
  }, [product.productId]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (selectedProductId) => {
    const existingCart = JSON.parse(localStorage.getItem("Carrito")) || {
      userID: user.userID,
      carritoID: "67890",
      productos: [],
    };

    const productIndex = existingCart.productos.findIndex(
      (item) => item.productId === selectedProductId
    );
    let updatedCart;
    if (productIndex !== -1) {
      updatedCart = addMore(existingCart, selectedProductId);
    } else {
      updatedCart = {
        ...existingCart,
        productos: [
          ...existingCart.productos,
          {
            productId: selectedProductId,
            productName: product.productName,
            productStock: product.productStock,
            productPrice: product.productPrice,
            productPhotoUrl: product.productPhotoUrl,
            productDescription: product.productDescription,
            productAmount: 1,
          },
        ],
      };
    }

    localStorage.setItem("Carrito", JSON.stringify(updatedCart));
    setProductAmount(getProductAmount(selectedProductId)); // Update the state
  };

  const addMore = (carrito, idProducto) => {
    const producto = carrito.productos.find(
      (producto) => producto.productId === idProducto
    );

    if (producto && producto.productAmount < producto.productStock) {
      producto.productAmount += 1;
      console.log(
        `Se ha añadido una unidad del producto ${producto.productName}`
      );
    } else {
      console.log(
        "No se puede agregar más unidades del producto. La cantidad solicitada supera el stock disponible."
      );
    }

    return carrito;
  };

  const handleRemoveProduct = (productId) => {
    let existingCart = JSON.parse(localStorage.getItem("Carrito")) || {};

    const updatedCart = JSON.parse(JSON.stringify(existingCart));

    const productIndex = updatedCart.productos.findIndex(
      (item) => item.productId === productId
    );

    if (productIndex !== -1) {
      if (updatedCart.productos[productIndex].productAmount > 1) {
        updatedCart.productos[productIndex].productAmount -= 1;
        console.log(
          `Se ha eliminado el producto con ID ${productId} del carrito.`
        );
      } else {
        updatedCart.productos.splice(productIndex, 1);
        console.log("El producto ha sido eliminado del carrito.");
        window.location.reload();
      }

      localStorage.setItem("Carrito", JSON.stringify(updatedCart));
      setProductAmount(getProductAmount(productId)); // Update the state
    }
  };

  const getProductAmount = (productId) => {
    const existingCart = JSON.parse(localStorage.getItem("Carrito")) || {
      productos: [],
    };
    const productInCart = existingCart.productos.find(
      (item) => item.productId === productId
    );
    return productInCart ? productInCart.productAmount : 0;
  };

  return (
    <div className="flex flex-col m-10 border border-gray-200 rounded-t-[10px] rounded-b-[10px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] ">
      <div className="justify-between rounded-t-[10px] w-64">
        <img
          src={product.productPhotoUrl}
          alt={product.productName}
          className="rounded-t-[10px] w-full h-52"
        />
      </div>
      <div className="bg-[#307ebe8f] p-4 rounded-b-[10px]">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-2xl text-red-600">
            {product.productPrice}€
          </h1>
          <div className="flex gap-3 justify-center items-center">
            {product.productStock > 0 ? (
              loggedIn && (
                <>
                  <div
                    onClick={() => {
                      handleAddToCart(product.productId);
                    }}
                    className="cursor-pointer"
                  >
                    <PlusIcon className="size-3" />
                  </div>

                  <input
                    type="text"
                    value={productAmount}
                    readOnly
                    className="w-12 text-center bg-gray-200 rounded"
                  />

                  {location.pathname === "/cart" && (
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        handleRemoveProduct(product.productId);
                      }}
                    >
                      <LessIcon className="stroke-black" />
                    </div>
                  )}
                </>
              )
            ) : (
              <span className="text-red-600 font-bold uppercase">
                Sin Stock
              </span>
            )}
            <div onClick={handleOpenModal} className="cursor-pointer">
              <InfoIcon className="size-54" />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <h1 className="font-bold text-xl w-full">{product.productName}</h1>
        </div>
      </div>
      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
