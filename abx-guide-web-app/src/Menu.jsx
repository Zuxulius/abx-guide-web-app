import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Menu({ setPageNumber }) {

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
            to={"/pdf-viewer-red"} onClick={() => setPageNumber(0)}>
            Sepsis med okänt fokus /<br />Bukinfektion/<br /> Pneumoni /<br /> Akut bakteriell meningit (ABM)
            </Link>
            <h3>Snabbresurser</h3>
            <button className="resource-button" >Checklista</button>
            <button className="resource-button" >Penicillin-allergi</button>
            <Link to={""} className="resource-button">Källor och länkar</Link>
            <Link to={""} className="resource-button">Kontakt</Link>
        </div>
    )
}

export default Menu;
