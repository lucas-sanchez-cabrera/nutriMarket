export const Modal = ({ children, open }) => {
  return (
    <dialog
      className={`absolute z-50 size-full bg-black/60 backdrop-blur-sm ${
        open ? "flex" : ""
      } justify-center items-center`}
    >
      {children}
    </dialog>
  );
};
