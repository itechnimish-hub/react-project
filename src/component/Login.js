import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!email || !password) {
            alert("Please enter email and password");
            return;
        }

        try {
            // Check user exists
            const { data } = await axios.get(`http://localhost:3000/users`, {
                params: { email, password },
            });

            if (data.length === 0) {
                alert("Invalid email or password!");
                return;
            }

            // Simulate token
            localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30");

            alert("Login Successful");
            navigate("/home");
        } catch (error) {
            alert("Something went wrong!");
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Login</h2>

            <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            /><br /><br />

            <input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            /><br /><br />

            <button onClick={handleSubmit}>Login</button>
        </div>
    );
}
