import React, { useState } from "react";
import { CrossIcon } from "./icons/cross-icon";
import TicketModal from "./TicketModal";

const PagarModal = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePay = () => {
    setIsModalOpen(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <div className="flex justify-end">
          <button className="mb-4" onClick={onClose}>
            <CrossIcon className="stroke-black" />
          </button>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Numero de Tarjeta</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength="16"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre del Titular</label>
            <input
              type="text"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4 flex items-end space-x-4">
            <div className="w-1/4">
              <label className="block text-gray-700">CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                maxLength="3"
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="w-2/4">
              <label className="block text-gray-700 ">Fecha de Expiración</label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/AA"
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <button
              type="button"
              onClick={handlePay}
              className="w-1/4 bg-blue-500 text-white p-2 rounded-lg"
            >
              Pagar
            </button>
          </div>
        </form>
        <TicketModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default PagarModal;
