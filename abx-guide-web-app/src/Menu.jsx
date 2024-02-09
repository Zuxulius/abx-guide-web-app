import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useDraggable } from "./DraggableContext.jsx"

function Menu({ setPageNumber }) {

    const { toggleChecklistVisibility, toggleAllergyVisibility } = useDraggable();

    return (
        <div className="popup-menu">
            <Navbar />
            <h3>Vanliga samhällsförvärvade infektioner</h3>
            <Link className="green-button"
                to={'/pdf-viewer-green'} onClick={() => setPageNumber(2)}>
                Urosepsis / Pyelonefrit / Nedre afebril UVI
            </Link>
            <Link className="green-button"
            to={"/pdf-viewer-green"} onClick={() => setPageNumber(3)}>
            Pneumoni
            </Link>
            <Link className="green-button"
            to={"/pdf-viewer-green"} onClick={() => setPageNumber(4)}>
            Övriga
            </Link>
            <h3>Intensivvårdskrävande infektioner</h3>
            <Link className="red-button"
            to={"/pdf-viewer-red"} onClick={() => setPageNumber(2)}>
            Sepsis med okänt fokus /<br />Bukinfektion/<br /> Pneumoni /<br /> Akut bakteriell meningit (ABM)
            </Link>
            <h3>Snabbresurser</h3>
            <button className="resource-button" onClick={toggleChecklistVisibility}>Checklista</button>
            <button className="resource-button" onClick={toggleAllergyVisibility}>Penicillin-allergi</button>
            <Link to={"/about"}
            target="_blank" rel="noopener noreferrer"
            className="resource-button">Källor och länkar</Link>
            <Link to={"/about"}
            target="_blank" rel="noopener noreferrer"
             className="resource-button">Kontakt</Link>
        </div>
    )
}

export default Menu;
