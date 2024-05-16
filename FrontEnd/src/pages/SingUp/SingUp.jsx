import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/img/1.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [direction, setDirection] = useState("");
  const rol = "client";

  async function signUpUser(user) {
    if (user) {
      try {
        const response = metodoUserService;
        localStorage.setItem("token", response.access_token);
        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    }
  }

  const handleSaveUser = () => {
    const user = {
      userName: userName,
      email: email,
      password: password,

      direction: direction,
      rol: rol,
    };
    signUpUser(user);
  };

  return (
    <div className="overflow-hidden">
      <div className="bg-[#265073] w-full h-40 flex items-center justify-center">
        <img src={img1} alt="logo" className="mt-44 p-5 bg-white size-64" />
      </div>
      <div className="m-44 flex justify-center ">
        <div className="flex flex-col items-center justify-center p-10">
          <input
            type="text"
            placeholder="Nombre y Apellidos"
            className="w-full max-w-md px-6 py-4 border border-[#656565] rounded-md mb-4"
            onChange={(e) => setUserName(e.target.value)}
          />

          <div className="flex max-w-md mb-4 gap-4">
           <input
            type="text"
            placeholder="Correo Electrónico"
            className=" px-6 py-4 border border-[#656565] rounded-md"
            onChange={(e) => setEmail(e.target.value)}
          />


            <input
              type="text"
              placeholder="Direccion"
              className="pl-5 py-4 border border-[#656565] rounded-md"
              onChange={(e) => setDirection(e.target.value)}
            />
          </div>


          <input
            type="password"
            placeholder="Contraseña"
            className="w-full max-w-md px-6 py-4 border border-[#656565] rounded-md mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-full max-w-md bg-[#2D9596] flex items-start text-[#ffffff] px-6 py-5 rounded-md font-bold"
            onClick={handleSaveUser}
          >
            Crear Cuenta
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
