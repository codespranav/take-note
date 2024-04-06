import { Link, useNavigate } from "react-router-dom"
import { FaUserAlt } from "react-icons/fa";
import { useAuth } from "../../context/authContext";

const Navbar = () => {
    const {auth} = useAuth();
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-4 nav-bar " data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-4 text fw-bold" to="/">Tracking Notes</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-6">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/notes">Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>
                        </ul>
                        {auth.token ? <Link to = "/profile"><FaUserAlt className="icon_profile"/></Link> : 
                        <div className="d-flex gap-2">
                            <Link to = "/login"> <button type="button" className="btn btn-light">Login</button></Link>
                            <Link to = "/register"><button type="button" className="btn btn-light">Signup</button></Link>
                        </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
