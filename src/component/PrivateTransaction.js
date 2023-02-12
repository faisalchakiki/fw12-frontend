import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateTrans({ children }) {
  const infoBooking = useSelector((state) => state.transaction);
  if (infoBooking.idMovie) {
    return children;
  }else {
    return <Navigate to="/listMovie"/>;
  }
}

export default PrivateTrans;
