import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };
    return (
        <div style={{ padding: 20 }}>
            <h2>Welcome to Home Page</h2>

            <button onClick={logout}>Logout</button>
        </div>
    );
}