import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const { data } = await axios.post("http://localhost:5000/api/auth/login", {
                email, password,
            });
            localStorage.setItem("token", data.token);
            alert("Login Success");
            navigate("/profile");
        } catch (error) {
            alert(error?.response?.data?.message || "Something went wrong!");

        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Login</h2>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
            <input placeholder="Password" type="password"
                onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
}
