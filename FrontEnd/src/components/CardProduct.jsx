import React, { useState } from "react";
import { PlusIcon } from "../components/icons/plus-icon";
import { InfoIcon } from "../components/icons/info-icon";
import ProductModal from "./ProductModal";

export const CardProduct = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col m-5 border border-black rounded-t-[10px] rounded-b-[10px]">
      <div className="justify-between rounded-t-[10px] w-64">
        <img src={product.productImage} alt={product.productName} className="rounded-t-[10px] w-full h-52" />
      </div>
      <div className="bg-[#307ebe8f] p-4 rounded-b-[10px]">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-2xl text-red-600">
            {product.productPrice}€
          </h1>
          <div className="flex gap-3 justify-center items-center">
            <div>
              <PlusIcon className="fill-black size-4" />
            </div>
          
            <div onClick={handleOpenModal} className="cursor-pointer">
              <InfoIcon className="size-54" />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <h1 className="font-bold text-xl">{product.productName}</h1>
        </div>
      </div>
      <ProductModal product={product} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};
