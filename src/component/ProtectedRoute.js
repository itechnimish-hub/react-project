import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ Component }) {
    const token = localStorage.getItem("token");
    return token ? <Component /> : <Navigate to="/" />;
}
