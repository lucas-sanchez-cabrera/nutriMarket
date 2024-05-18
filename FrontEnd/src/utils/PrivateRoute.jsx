import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function PrivateRoute({ onlylogged, allowedRoles }) {
  const [changePage, setChangePage] = useState();
  const navigate = useNavigate();
  

  useEffect(() => {
    const user = localStorage.getItem("userData");
    if (!user) {
      navigate("/");
      return;
    }

    const userData = JSON.parse(localStorage.getItem("userData"));

    const isAllowed = allowedRoles.includes(userData.userRol);

    if (!isAllowed) {
      navigate("/");
      return;
    }

    setChangePage(true);
    
  }, [onlylogged, allowedRoles, navigate]);

  if (changePage) {
    return <Outlet />;
  }

  return null;
}
