import Image from "next/image";
import Link from "next/link";
import './styles.css';

export default function Navbar() {
    return(
        <div className="navbar">
            <img
                src="/icons/logo.png"
                alt="Logo"
                width={200}
                height={60}
                className="logo"
            />
            <div className="navLinks">
                <Link className="pricingLink" href="#">Pricing</Link>
                <Link className="partnerFindLink" href="#">Find Partner</Link>
            </div>
            <div className="authButtons">
                <Link className="signinLink" href="#">Sign in</Link>
                <button className="signupButton">Get Started</button>
            </div>
        </div>
    )
}