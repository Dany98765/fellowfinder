"use client";

import { useEffect, useState } from "react";
import AuthSidebar from "@/components/sidebar/page";
import "./styles.css";
import SignupForm from "@/components/forms/signup/page";

export default function Signup({ lang }) {
    let windowHi = 9999
    const [showSidebar, setShowSidebar] = useState(false);
    useEffect(() => {
        if (windowHi >= 520) {
            setShowSidebar(true);
        }
    }, [
        
    ]);

    return (
        <div className="signupContainer">
        {showSidebar == true ? (
            <AuthSidebar lang={lang} showFeatures={true} isSignin={false} />
        ) : null }
        <SignupForm lang={lang} />
        </div>
    );
}
