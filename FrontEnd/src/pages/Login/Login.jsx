import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../components/img/1.png";
import { Link } from "react-router-dom";

const Login = () => {
  
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = mandarAlUserService({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        });
        if (response.status === 200) {
          navigate("/home");
        }
      } catch (error) {
        console.log(error);
      }
 
  };


  return (
    <div className="overflow-hidden">
      <div className="bg-[#265073] w-full h-40 flex items-center justify-center">
        <img src={img1} className="mt-44 p-5 bg-white size-64" />
      </div>
      <div className="mt-52 flex flex-col items-center justify-center space-y-4">
        <input
          type="text"
          placeholder="Correo Electrónico"
          className="w-full max-w-md px-6 py-4 border border-[#656565] rounded-md"
          ref={emailRef}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full max-w-md px-6 py-4 border border-[#656565] rounded-md"
          ref={passwordRef}
        />

        <button
          className="w-full max-w-md bg-[#265073] flex items-start text-[#ffffff]  px-6 py-5 rounded-md font-bold"
          onClick={handleSubmit}
        >
          Iniciar Sesion
        </button>
        <Link to={'/signUp'}  className="w-full max-w-md bg-[#2D9596] flex items-start text-[#ffffff]  px-6 py-5 rounded-md font-bold"> 
        <button>
          Crear Cuenta
        </button>
        </Link>
      
      </div>
    </div>
  );
};

export default Login;
