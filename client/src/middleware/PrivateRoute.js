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

    if (state.user.role === "") {
        return <Navigate to="/" />
    }
    return <Outlet />
}

export function PrivateRouteDokter() {
    const [state] = useContext(UserContext);

    if (state.user.role === "dokter") {
        return <Navigate to="/" />
    }
    return <Outlet />
}