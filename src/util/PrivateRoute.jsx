import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

export default ({ Component }) => {
    const user = useSelector(state => state.user.user);
    return user ? <Component/> : <Navigate to="login" />;

}