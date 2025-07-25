"use client"

import Link from "next/link";
import './styles.css';
import { useRouter, useSearchParams } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const lang = searchParams.get("lang") || "en";
  console.log(searchParams + "............");

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";

    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", newLang);

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="navbar">
      <Link href="/">
        <img
            src="/icons/logo.png"
            alt="Logo"
            width={200}
            height={60}
            className="logo"
        />
      </Link>
      <div className="navLinks">
        <Link className="pricingLink" href="#">Pricing</Link>
        <Link className="partnerFindLink" href="#">Find Partner</Link>
      </div>
      <div className="authButtons">
        <Link className="signinLink" href="/signin">Sign in</Link>
        <button className="signupButton" onClick={() => router.push("/signup")}>Get Started</button>
        <button onClick={toggleLanguage}>
          Change Language
        </button>
      </div>
    </div>
  );
}
