import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRouteLogin() {
    const [state] = useContext(UserContext)
    if (!state.isLogin){
        return <Navigate to='/' />
    }
    return <Outlet />
}

export function PrivateRoutePatient() {
    const [state] = useContext(UserContext);

    if (state.user.Role === "Patient") {
        return <Outlet />
    }
    return <Navigate to="/" />
}

export function PrivateRouteDokter() {
    const [state] = useContext(UserContext);

    if (state.user.Role === "Doctor") {
        return <Outlet />
    }
    return <Navigate to="/" />
}