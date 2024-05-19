import { useState } from "react";
import { UserIcon } from "./icons/user-icon";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook
import { CartIcon } from "./icons/cart-icon";
import img1 from "../assets/img/1.2-removebg-preview.png";
import { isLoggedIn } from "../services/ClientService";

export const Navbar = ({ onSearch }) => {
  const isSearchVisible =
    location.pathname === "/home" || location.pathname === "/" || location.pathname === "/clientes";

  const user = JSON.parse(localStorage.getItem("userData"));

  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  const handleSearch = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div className="bg-[#265073] w-full h-20 flex items-center justify-center">
      <div className="w-[90%] flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <div className="rounded-full bg-white m-2 p-2">
            <Link to={`/home`}>
              <img src={img1} className="size-10" alt="Logo" />
            </Link>
          </div>

          {isSearchVisible && (
            <div>
              <input
                className="rounded h-8  w-72 p-2 bg-[#265073] border-b-2 border-[#307ebe] text-white placeholder-white focus:outline-none focus:border-[#ffffff]"
                type="search"
                placeholder="Buscar"
                onChange={handleSearch}
              />
            </div>
          )}
        </div>

        <div className="mr-4 flex gap-5 items-center text-white/95 font-semibold">
          {loggedIn && (
            <div className="bg-gray-50 p-2 rounded-full">
              <Link to={`/userProfile`}>
                <UserIcon className="fill-[#EFF1F999] stroke-black " />
              </Link>
            </div>
          )}
          {loggedIn  && (
            <div>
              <Link to={`/cart`}>
                <CartIcon className="size-9" />
              </Link>
            </div>
          )}
          {!loggedIn && (
            <Link to={`/login`}>
              <button className="bg-white text-black rounded p-2">
                Iniciar Sesion
              </button>
            </Link>
          )}

          {loggedIn && user.userRol === "admin" && (
            <Link to={`/clientes`}>
              <button className="bg-white text-black rounded p-2">
                Ver Usuarios
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
