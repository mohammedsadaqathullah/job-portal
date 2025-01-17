import { useContext } from "react";
import logoicon from "../Images/logo.png"
import DataContext from "../DataContext";

function NavBarLineOne() {
    const { setJobAddingBox } = useContext(DataContext)
    const handleRefresh = () => {
        window.location.href = "/"; // Redirect to home and refresh the page
    };

    return (
        <>
            <li className="logoicon">
                <img
                    src={logoicon}
                    alt="logo"
                    className="logoicon"
                    onClick={handleRefresh} />
            </li>
            <span className="navuloneitems">
                <li className="liItems" onClick={handleRefresh}>Home</li>
                <li className="liItems">Find Jobs</li>
                <li className="liItems">Find Talents</li>
                <li className="liItems">About us</li>
                <li className="liItems">Testimonials</li>
            </span>
            <li>
                <button
                    onClick={() => setJobAddingBox('ShowBox')}
                    className="createjobstext">
                    Create Jobs </button>
                {/* <button className="logintext">
                    Login
                </button> */}
            </li>
        </>

    )
}
export default NavBarLineOne;