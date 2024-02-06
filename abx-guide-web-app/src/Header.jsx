import logo from "./assets/abx-guide-logo.png"

function Header() {

    return (
        <header>
            <img src={logo} alt="Logo, Region Østergötland"
            height={75}
            width={300}
            />
            <h1>ANTIBIOTIKA PÅ AKUTEN</h1>
        </header>
    )
}

export default Header;
