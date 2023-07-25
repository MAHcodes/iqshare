import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FC, ReactNode, useEffect, useState } from "react";
import { RootState } from "../redux/store";
import Loading from "./Loading";

interface IProtectedRoutesProps {
  Route: ReactNode;
}

const ProtectedRoute: FC<IProtectedRoutesProps> = ({ Route }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { name, email } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (!name || !email) {
      navigate("/signin", { replace: true });
    }
    setLoading(false);
  }, [name, email, navigate]);

  return loading ? <Loading /> : Route;
};

export default ProtectedRoute;
