import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/img/1.png";
import { EyeIcon } from "../../components/icons/eye-icon";
import { createClient } from "../../services/ClientService";
import { loginUser } from "../../services/ClientService";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [direction, setDirection] = useState("");
  const rol = "cliente";
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef(null); 

  async function signUpUser(user) {
    if (user) {
      try {
        const response = await createClient(user);

        const response2 = await loginUser(email, password);
  
        if (response2.status === 200) {
          localStorage.setItem("userData", JSON.stringify(response2.data));
          navigate("/home");
        }

      } catch (error) {
        console.log(error);
      }
    }
  }

  const handleSaveUser = () => {
    const user = {
      userName: userName,
      userEmail: email,
      userPassword: password,
      userAddress: direction,
      userRol: rol,
    };
    signUpUser(user);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    passwordRef.current.type = showPassword ? "password" : "text";
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
              className="px-6 py-4 border border-[#656565] rounded-md"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Direccion"
              className="pl-5 py-4 border border-[#656565] rounded-md"
              onChange={(e) => setDirection(e.target.value)}
            />
          </div>
          <div className="w-full max-w-md px-6 py-4 border border-[#656565] rounded-md flex justify-between mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              ref={passwordRef} // Assign the ref to the password input
              className="focus:outline-none flex-grow"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div onClick={togglePasswordVisibility}>
              <EyeIcon
                className={showPassword ? "opacity-100" : "opacity-50"}
              />
            </div>
          </div>
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
