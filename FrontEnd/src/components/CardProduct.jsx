import { PlusIcon } from "../components/icons/plus-icon";

export const CardProduct = ({ product }) => {
  return (
    <div className="flex flex-col m-10 border border-black rounded-t-[10px] rounded-b-[10px] ">
      <div className="justify-between rounded-t-[10px] w-64 ">
        <img src={product.image} className="rounded-t-[10px] w-full h-52" />
      </div>

      <div className="bg-[#307ebec0] p-4 rounded-b-[10px]">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold">{product.name}</h1>
          <div>
            <PlusIcon className="fill-black size-3" />
          </div>
        </div>

        <h1>{product.descripcion}</h1>
      </div>
    </div>
  );
};
