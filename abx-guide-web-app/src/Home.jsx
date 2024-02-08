import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom"
import Navbar from "./Navbar";
import Menu from "./Menu";

function Home({ setPageNumber }) {

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
                <Link className="red-button" to={"pdf-viewer-red"} onClick={() => setPageNumber(0)}>
                Sepsis med okänt fokus / Bukinfektion / Pneumoni / Akut bakteriell meningit (ABM)
                </Link>
            </div>
            <h2>Snabbresurser</h2>
            <hr />
            <div className="quick-resources">
                <button className="resource-button">Checklista</button>
                <button className="resource-button">Penicillin-allergi</button>
                <Link className="resource-button" to={""}>Källor och länkar</Link>
                <Link className="resource-button" to={""}>Kontakt</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
