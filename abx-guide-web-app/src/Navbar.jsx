import { Link } from 'react-router-dom';
import { MdMenu, MdHome } from "react-icons/md";
import { useDraggable } from './DraggableContext';

function Navbar() {

    const { toggleChecklistVisibility, isChecklistVisible, toggleAllergyVisibility, isAllergyVisible } = useDraggable();

    function handleClick1() {
        const popup = document.getElementsByClassName('popup-menu')[0];

        if (popup.classList.contains("visible")) {
            popup.style.transform = "translateX(-500px)";
            popup.classList.remove("visible");
        } else {
            popup.style.transform = "translateX(0)";
            popup.classList.add("visible");
        }}

    function handleClick2() {
        if (isAllergyVisible) {
            toggleAllergyVisibility();
        }
        if (isChecklistVisible) {
            toggleChecklistVisibility();
        }
    }

    return (
    <div className='navbar'>
        <Link to={"/"} className='home' onClick={handleClick2}><MdHome /></Link>
        <button className='menu' onClick={handleClick1}><MdMenu /></button>
    </div>
    )
}

export default Navbar;
