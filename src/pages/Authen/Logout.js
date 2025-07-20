import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.removeItem("account");
    window.dispatchEvent(new Event("accountChange"));
    navigate("/login");
  }, []);
  return <></>;
};
