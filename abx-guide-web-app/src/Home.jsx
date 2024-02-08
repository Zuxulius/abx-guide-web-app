import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom"
import Navbar from "./Navbar";
import Menu from "./Menu";
import DraggableChecklist from './DraggableChecklist.jsx'
import DraggableAllergy from "./DraggableAllergy.jsx";
import { useDraggable } from "./DraggableContext.jsx"

function Home({ setPageNumber }) {

    const { isChecklistVisible, toggleChecklistVisibility, isAllergyVisible, toggleAllergyVisibility } = useDraggable();

    return(
        <div className="homepage-container">
            <Navbar />
            <Menu setPageNumber={setPageNumber}/>
            <Header />
            <h2>Vanliga samhällsförvärvade infektioner</h2>
            <hr />
            <div className="green-button-div">
                <Link className="green-button" to={"pdf-viewer-green"} onClick={() => setPageNumber(2)}>
                Urosepsis / Pyelonefrit / Nedre afebril UVI
                </Link>
                <Link className="green-button" to={"pdf-viewer-green"} onClick={() => setPageNumber(3)}>
                Pneumoni
                </Link>
                <Link className="green-button" to={"pdf-viewer-green"} onClick={() => setPageNumber(4)}>
                Övriga
                </Link>
            </div>
            <h2>Intensivvårdskrävande infektioner</h2>
            <hr />
            <div className="red-button-div">
                <Link className="red-button" to={"pdf-viewer-red"} onClick={() => setPageNumber(2)}>
                Sepsis med okänt fokus / Bukinfektion / Pneumoni / Akut bakteriell meningit (ABM)
                </Link>
            </div>
            <h2>Snabbresurser</h2>
            <hr />
            <div className="quick-resources">
                <button className="resource-button" onClick={toggleChecklistVisibility}>Checklista</button>
                <button className="resource-button" onClick={toggleAllergyVisibility}>Penicillin-allergi</button>
                <Link className="resource-button" to={"about"}>Källor och länkar</Link>
                <Link className="resource-button" to={"about"}>Kontakt</Link>
            </div>
            {isChecklistVisible && <DraggableChecklist />}
            {isAllergyVisible && <DraggableAllergy />}
            <Footer />
        </div>
    )
}

export default Home;
