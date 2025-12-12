import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoute";

function Navbar() {

    return (

        <div>

            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<ProtectedRoute Component={Home} />} />
                </Routes>
            </Router>

        </div>
    );
}

export default Navbar;
