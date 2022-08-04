import { isUserAuthenticated }   from "../../utils/authUtils";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({ children }) => isUserAuthenticated() ? children : <Navigate to="/login" />;

export default PrivateRoute