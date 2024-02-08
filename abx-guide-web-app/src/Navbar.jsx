import { Link } from 'react-router-dom';
import { MdMenu, MdHome } from "react-icons/md";

function Navbar() {

    function handleClick() {
        const popup = document.getElementsByClassName('popup-menu')[0];

        if (popup.classList.contains("visible")) {
            popup.style.transform = "translateX(-500px)";
            popup.classList.remove("visible");
        } else {
            popup.style.transform = "translateX(0)";
            popup.classList.add("visible");
        }}

    return (
    <div className='navbar'>
        <Link to={"/"} className='home'><MdHome /></Link>
        <button className='menu' onClick={handleClick}><MdMenu /></button>
    </div>
    )
}

export default Navbar;
