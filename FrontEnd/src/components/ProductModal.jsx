import React from "react";
import { CrossIcon } from "./icons/cross-icon";

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <div className="flex justify-end">
          <button className="mb-4" onClick={onClose}>
            <CrossIcon className="stroke-black" />
          </button>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex gap-10 items-center">
            <img
              src={product.productPhotoUrl}
              alt={product.productName}
              className="rounded-full size-32 object-cover mb-4 border-gray-300 border"
            />
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.productName}</h1>
              <h1 className="text-1xl font-semibold mb-2">
                {product.productCategory}
              </h1>
              <h1 className="text-xl font-semibold text-red-600 mb-4">
                {product.productPrice}€
              </h1>
            </div>
          </div>

          <div className="">
            <p className="text-justify w-96 font-semibold">{product.productDescription}</p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default ProductModal;
