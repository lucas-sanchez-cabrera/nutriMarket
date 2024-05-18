import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/img/1.png";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/ClientService";
import { EyeIcon } from "../../components/icons/eye-icon";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  //

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(
        emailRef.current.value,
        passwordRef.current.value
      );

      if (response.status === 200) {
        localStorage.setItem("userData", JSON.stringify(response.data));
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    passwordRef.current.type = showPassword ? "password" : "text";
  };

  return (
    <div className="overflow-hidden">
      <div className="bg-[#265073] w-full h-40 flex items-center justify-center">
        <img src={img1} alt="Logo" className="mt-44 p-5 bg-white size-64" />
      </div>
      <div className="mt-52 flex flex-col items-center justify-center space-y-4">
        <input
          type="text"
          placeholder="Correo Electrónico"
          className="w-full max-w-md px-6 py-4 border border-[#656565] rounded-md focus:outline-none "
          ref={emailRef}
        />

        <div className="w-full max-w-md px-6 py-4 border border-[#656565] rounded-md flex justify-between">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            ref={passwordRef}
            className="focus:outline-none flex-grow"
          />
          <div onClick={togglePasswordVisibility}>
            <EyeIcon className={showPassword ? "opacity-100" : "opacity-50"} />
          </div>
        </div>

        <button
          className="w-full max-w-md bg-[#265073] flex items-start text-[#ffffff] px-6 py-5 rounded-md font-bold"
          onClick={handleSubmit}
        >
          Iniciar Sesion
        </button>
        <Link
          to={"/signUp"}
          className="w-full max-w-md bg-[#2D9596] flex items-start text-[#ffffff] px-6 py-5 rounded-md font-bold"
        >
          <button>Crear Cuenta</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
