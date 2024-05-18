import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { getClients } from "../../services/ClientService";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage] = useState(11);
  const [searchTerm, setSearchTerm] = useState("");

  const getAllClients = async () => {
    try {
      const response = await getClients();
      setClientes(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllClients();
  }, []);

  // Función para buscar clientes por nombre o correo electrónico
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  // Filtrar clientes según el término de búsqueda
  const filteredClients = clientes.filter(
    (cliente) =>
      cliente.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cliente.userEmail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Obtener índices de los clientes a mostrar en la página actual
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = filteredClients.slice(
    indexOfFirstClient,
    indexOfLastClient
  );

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar onSearch={handleSearch} /> {/* Pasar la función de búsqueda como prop */}
      <main className="flex justify-center items-center min-h-screen bg-gray-100 pb-8">
        <div className="flex flex-col items-center w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 m-10">
          <div className="shadow-lg rounded-lg overflow-hidden w-full bg-white">
            <table className="table-auto w-full divide-y divide-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Dirección
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Rol
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentClients.map((cliente) => (
                  <tr key={cliente.userId}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {cliente.userName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {cliente.userEmail}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {cliente.userAddress}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {cliente.userRol}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center mt-4 border border-t-2 p-3 ">
              {[
                ...Array(Math.ceil(filteredClients.length / clientsPerPage)).keys(),
              ].map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number + 1)}
                  className="mx-1 px-3 py-1 bg-gray-200 text-gray-700 rounded-md focus:outline-none focus:bg-gray-400"
                >
                  {number + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
