import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function PrivateRoute({ onlylogged }) {
  const [changePage, setChangePage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const logged = localStorage.getItem("userData") ? true : false;

    const chechIsLogged = () => {
      if (!logged) {
        navigate("/");
        return false;
      }
      return true;
    };

    if (onlylogged) {
      const accessGranted = chechIsLogged();
      setChangePage(accessGranted);
    }
  }, [onlylogged, navigate]);

  if (changePage) {
    return <Outlet />;
  }
}
