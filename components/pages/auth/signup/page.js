"use client";

import { useEffect, useState } from "react";
import AuthSidebar from "@/components/sidebar/page";
import "./styles.css";
import SignupForm from "@/components/forms/signup/page";

export default function Signup({ lang }) {
    const [showSidebar, setShowSidebar] = useState(false);
    useEffect(() => {
        if (window.innerWidth >= 520) {
            setShowSidebar(true);
        }
        console.log(window.innerWidth)
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
