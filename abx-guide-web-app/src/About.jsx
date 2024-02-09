
import Navbar from "./Navbar";
import Menu from "./Menu";

function About() {
    return (
        <>
            <Navbar />
            <Menu />
            <div className="about">
                <h3>Källor</h3>
                <h3>Ansvarig utgivare</h3>
                <h3>Kontakt</h3>
                <h4>Antibiotikaval</h4>
                <h4>Synpunkter på rekommendationerna</h4>
            </div>
        </>
    )
}

export default About;
