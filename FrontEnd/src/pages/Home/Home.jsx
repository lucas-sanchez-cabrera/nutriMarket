import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { CardProduct } from "../../components/CardProduct";
import ProductService from "../../services/ProductService";
import { PlusIcon } from "../../components/icons/plus-icon";
import NewProductModal from "../../components/NewProductModal";
import { isLoggedIn } from "../../services/ClientService";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("userData"));
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); //Estado para controlar la apertura/cierre del modal
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await ProductService.getProducts();
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <main className="flex flex-col justify-center mt-10">
        {loggedIn && user.userRol === "admin" && (
          <div className="flex justify-end mr-36">
            <button
              className="bg-emerald-400  hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded flex gap-4 items-center"
              onClick={openModal}
            >
              <PlusIcon className="fill-white size-4" />
              Nuevo producto
            </button>
          </div>
        )}
        <div className="flex-wrap flex justify-center items-center">
          {filteredProducts.map((product, index) => (
            <div key={index}> 
              <CardProduct product={product} />
            </div>
          ))}
        </div>
      </main>

      <NewProductModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
