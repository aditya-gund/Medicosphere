import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  return <div>Not Found</div>;
}

export default NotFound;

function RedirectNotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/NotFound");
  }, [navigate]);
  return <></>;
}

export { RedirectNotFound };