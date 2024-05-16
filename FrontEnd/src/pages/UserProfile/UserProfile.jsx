import React, { useEffect, useState, useRef } from "react";
import { Navbar } from "../../components/Navbar";
import { UserIcon } from "../../components/icons/user-icon";
import { MailIcon } from "../../components/icons/mail-icon";
import { PadLockIcon } from "../../components/icons/padlock-icon";
import { EyeIcon } from "../../components/icons/eye-icon";
import { HomeIcon } from "../../components/icons/home-icon";
import imgProfile from "../../assets/img/default-img.webp";

export default function UserProfile() {
  const [changeInfo, setChangeInfo] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputPassword, setInputPassword] = useState("felixmaricon");
  const [inputEmail, setInputEmail] = useState("lucas.elzardo@gmail.com");
  const [inputDireccion, setInputDireccion] = useState(
    "Las Palmas de Gran Canaria, Tindaya, 12"
  );

  const inputPasswordRef = useRef("");
  const inputEmailRef = useRef("");
  const inputDireccionRef = useRef("");

  const togglePasswordVisibility = (ref, showPassword, setShowPassword) => {
    setShowPassword(!showPassword);
    ref.current.type = showPassword ? "password" : "text";
  };

  const handleActiveFormToChangeUserData = () => {
    setChangeInfo(!changeInfo);
    const inputPassword = inputPasswordRef.current;
    const inputEmail = inputEmailRef.current;
    const inputDireccion = inputDireccionRef.current;

    if (!changeInfo) {
      inputEmail.removeAttribute("disabled");
      inputPassword.removeAttribute("disabled");
      inputDireccion.removeAttribute("disabled");
    } else {
      document.querySelectorAll("input").forEach((input) => {
        if (input !== inputPassword || showPassword) {
          input.setAttribute("disabled", "disabled");
        }
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex m-10 justify-center ">
        <section className="bg-[#a7a9b14b] w-[60%] flex flex-col mt-24 h-[87%] rounded-md p-6">
          <header className="flex justify-between w-full">
            <h4 className="text-2xl font-semibold">Configuración</h4>
            <div>
              {changeInfo ? (
                <button
                  className="flex items-center py-4 px-12 text-base-50 bg-emerald-400 h-12 w-12  gap-3 rounded-lg text-lg justify-center"
                  onClick={handleActiveFormToChangeUserData}
                >
                  Aceptar
                </button>
              ) : (
                <button
                  className="flex items-center py-4 px-12 text-base-50 bg-[#307ebec0] h-12 w-12 gap-3 rounded-lg text-lg justify-center"
                  onClick={handleActiveFormToChangeUserData}
                >
                  Editar
                </button>
              )}
            </div>
          </header>
          <section className="h-full  w-full mt-10">
            <form className="flex gap-x-40">
              <section className="flex flex-col gap-y-4">
                <label className="flex flex-col gap-y-2 ">
                  <span className="text-sm cursor-pointer">
                    Nombre Y Apellidos
                  </span>
                  <div className="relative">
                    <div className="absolute top-3 left-2 z-10">
                      <UserIcon className="fill-[#EFF1F999] stroke-black " />
                    </div>
                    <input
                      className="px-2 py-3 pl-10 w-96 bg-[#ffffff] rounded-md"
                      disabled
                      value="Lucas Sanchez Cabrera"
                    />
                  </div>
                </label>
                <label className="flex flex-col gap-y-2">
                  <span className="text-sm cursor-pointer">
                    Correo electónico
                  </span>
                  <div className="relative">
                    <div className="absolute top-3 left-2 z-10">
                      <MailIcon className="fill-[#00000000] stroke-black " />
                    </div>
                    <input
                      className="px-2 py-3 pl-10 w-96 bg-[#ffffff] rounded-md"
                      disabled={!changeInfo}
                      value={inputEmail}
                      ref={inputEmailRef}
                      onChange={(e) => setInputEmail(e.target.value)}
                    />
                  </div>
                </label>
                <label className="flex flex-col gap-y-2">
                  <span className="text-sm cursor-pointer">Direccion</span>
                  <div className="relative">
                    <div className="absolute top-3 left-2 z-10">
                      <HomeIcon />
                    </div>
                    <input
                      className="px-2 py-3 pl-10 w-96 bg-[#ffffff] rounded-md"
                      disabled={!changeInfo}
                      value={inputDireccion}
                      ref={inputDireccionRef}
                      onChange={(e) => setInputDireccion(e.target.value)}
                    />
                  </div>
                </label>

                <label className="flex flex-col gap-y-2">
                  <span className="text-sm cursor-pointer">
                    Contraseña Nueva
                  </span>
                  <div className="relative">
                    <div className="absolute top-3 left-2 z-10">
                      <PadLockIcon className="fill-[#EFF1F999] stroke-black " />
                    </div>
                    <input
                      className="px-2 py-3 pl-10 w-96 bg-[#ffffff] rounded-md"
                      value={inputPassword}
                      type={showPassword ? "text" : "password"}
                      ref={inputPasswordRef}
                      id="password"
                      disabled={!changeInfo}
                      onChange={(e) => setInputPassword(e.target.value)}
                    />
                    <div
                      className="absolute top-3 right-5 z-10 cursor-pointer"
                      onClick={() =>
                        togglePasswordVisibility(
                          inputPasswordRef,
                          showPassword,
                          setShowPassword
                        )
                      }
                    >
                      {showPassword ? (
                        <EyeIcon className="opacity-100" />
                      ) : (
                        <EyeIcon className="opacity-50" />
                      )}
                    </div>
                  </div>
                </label>
              </section>
              <section className="size-44 object-cover relative">
                <img src={imgProfile} className="shadow-md rounded-md" />
              </section>
            </form>
          </section>
        </section>
      </main>
    </>
  );
}
