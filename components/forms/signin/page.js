"use client"

import "./styles.css"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function SigninForm({ lang }){
    const router = useRouter()
    let locale = lang || 'en'
    let paddingDirection = locale == 'en' ? 'paddingLeft' : 'paddingRight'
    let marginDirection = locale == 'en' ? 'marginLeft' : 'marginRight'
    const [messages, setMessages] = useState(null);
    useEffect(() => {
        async function retrieveTranslation() {
            const messages = (await import(`@/public/locales/${locale}/auth/signin.json`)).default;
            setMessages(messages);
        }
           retrieveTranslation();
    }, [locale]);
    return(
        <div className="signinFormContainer" style={{ [marginDirection]: "40px", [paddingDirection]: "40px", marginTop: "100px" }}>
            <form>
                <h2 className="title">{messages?.title}</h2>
                <hr className="separationLine"/>
                <div className="fieldContainer">
                    <p className="fieldText">{messages?.email}</p>
                    <input 
                        type="email"
                        name="email"
                        className="formInput"
                    />
                </div>
                <div className="fieldContainer">
                    <p className="fieldText">{messages?.password}</p>
                    <input 
                        type="password"
                        name="password"
                        className="formInput"
                    />
                </div>
                <button type="submit" className="signinButton">{messages?.signin}</button>
                <p style={{ cursor: "help" }}>{messages?.noAccount} <Link href="/signup" style={{ color: "#127373", cursor: "pointer" }}>{messages?.italicWord}</Link></p>
            </form>
        </div>
    )
}