

import NavBarLineOne from "./NavBarLineOne"
import NavBarLineTwo from "./NavBarLineTwo";

import './navbar.css'

function Navbar() {

    return (
        <>
            <nav className='navbody'>
                <ul className='navulone'>
                    <NavBarLineOne />
                </ul>
                <ul className="navultwo">
                    <NavBarLineTwo />
                </ul>

            </nav>

        </>
    )
}
export default Navbar;