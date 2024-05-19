import React, { useState } from "react";
import { CrossIcon } from "./icons/cross-icon";
import ProductService from "../services/ProductService";

const NewProductModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    categoria: "",
    nombre: "",
    precio: "",
    stock: "",
    descripcion: "",
    url: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const producto = {
      productName: formData.nombre,
      productCategory: formData.categoria,
      productPrice: formData.precio,
      productStock: formData.stock,
      productDescription: formData.descripcion,
      productPhotoUrl: formData.url
    };

    try {
      const response =  ProductService.createProduct(producto);
      
    
    } catch (error) {
      console.log(error);
    }

    


    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <div className="flex justify-end">
          <button className="mb-4" onClick={onClose}>
            <CrossIcon className="stroke-black" />
          </button>
        </div>
        <h1 className="font-bold text-2xl mb-4">Añadir Nuevo Producto</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className="block mb-2 font-bold" htmlFor="nombre">Nombre del Producto</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="w-full p-2 border border-gray-300 rounded"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 font-bold" htmlFor="categoria">Categoría</label>
              <input
                type="text"
                id="categoria"
                name="categoria"
                className="w-full p-2 border border-gray-300 rounded"
                value={formData.categoria}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-bold" htmlFor="url">URL Foto del producto</label>
            <input
              type="text"
              id="url"
              name="url"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.url}
              onChange={handleChange}
            />
          </div>

          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className="block mb-2 font-bold" htmlFor="precio">Precio</label>
              <input
                type="number"
                id="precio"
                name="precio"
                className="w-full p-2 border border-gray-300 rounded"
                value={formData.precio}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 font-bold" htmlFor="stock">Stock</label>
              <input
                type="number"
                id="stock"
                name="stock"
                className="w-full p-2 border border-gray-300 rounded"
                value={formData.stock}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold" htmlFor="descripcion">Descripción</label>
            <textarea
              id="descripcion"
              name="descripcion"
              className="w-full p-2 border border-gray-300 rounded resize-none"
              rows="4"
              value={formData.descripcion}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Añadir Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProductModal;
