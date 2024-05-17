import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { CardProduct } from "../../components/CardProduct";
import ProductService from "../../services/ProductService";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
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
      <main className="flex gap-3 flex-wrap w-full justify-center ">
        {filteredProducts.map((product, index) => (
         
          <div key={index}>
            <CardProduct product={product} />
            
          </div> 
          
        ))}
      
      </main>
    </>
  );
}

