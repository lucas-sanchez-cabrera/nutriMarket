import { useState } from "react";
import { UserIcon } from "./icons/user-icon";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook
import { CartIcon } from "./icons/cart-icon";
import img1 from "./img/1.2-removebg-preview.png";

export const Navbar = ({}) => {

  const isSearchVisible =
    location.pathname === "/home" || location.pathname === "/cart" || location.pathname === "/";

  return (
    <div className="bg-[#265073] w-full h-20 flex items-center justify-center">
      <div className="w-[90%] flex justify-between items-center">
        <div className="rounded-full bg-white m-2 p-2">
          <Link to={`/home`}>
            <img src={img1} className="size-10" alt="Logo" />
          </Link>
        </div>

        {isSearchVisible && (
          <div>
            <input
              className="rounded h-8 w-52 p-2"
              type="search"
              placeholder="Buscar"
              
            />
          </div>
        )}

        <div className="mr-4 flex gap-5 items-center text-white/95 font-semibold">
   
            <div className="bg-gray-50 p-2 rounded-full">
              <Link to={`/userProfile`}>
                <UserIcon className="size-4" />
              </Link>
            </div>
    

    
            <div>
              <Link to={`/cart`}>
                <CartIcon className="size-9" />
              </Link>
            </div>
      

   
            <Link to={`/login`}>
              <button className="bg-white text-black rounded p-2">
                Iniciar Sesion
              </button>
            </Link>
        
        </div>
      </div>
    </div>
  );
};
