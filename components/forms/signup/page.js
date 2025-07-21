"use client"

import { useRouter } from "next/navigation";
import "./styles.css"
import { useState, useEffect } from "react"
import PhoneInput from 'react-phone-number-input';

export default function SignupForm({ lang }){
    const router = useRouter()
    let locale = lang || 'en'
    let paddingDirection = locale == 'en' ? 'paddingLeft' : 'paddingRight'
    let marginDirection = locale == 'en' ? 'marginLeft' : 'marginRight'
    const [messages, setMessages] = useState(null);
    const [selectedButton, setSelectedButton] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    useEffect(() => {
        async function retrieveTranslation() {
            const msgs = (await import(`@/public/locales/${locale}/auth/signup.json`)).default;
            setMessages(msgs);
        }

        retrieveTranslation();
    }, [locale]);

    if (!messages) {
        return <div>Loading...</div>; 
    }
    let lawyerBgColor = selectedButton == 'lawyer' ? "#1CA6A6" : "#FFFFFF"
    let funderBgColor = selectedButton == 'funder' ? "#1CA6A6" : "#FFFFFF"
    let kickStarterBgColor = selectedButton == 'kickStarter' ? "#1CA6A6" : "#FFFFFF"
    return(
        <div className="signupFormContainer" style={{ [marginDirection]: "40px", [paddingDirection]: "40px" }}>
            <div className="titleContainer">
                <h2>{messages.title}</h2>
                <i className="italicWord">{messages.italicWord}</i>
            </div>
            <div className="signupOptionsContainer">
                <button className="signupOption" style={{ backgroundColor: kickStarterBgColor }} onClick={() => {
                    setSelectedButton("kickStarter")

                }}>{messages.kickStarter}</button>
                <button className="signupOption" style={{ backgroundColor: funderBgColor }} onClick={() => {
                    setSelectedButton("funder")

                }}>{messages.funder}</button>
                <button className="signupOption" style={{ backgroundColor: lawyerBgColor }} onClick={() => {
                    setSelectedButton("lawyer")
                }}>{messages.lawyer}</button>
            </div>
            <hr className="separationLine"/>
            <form className="formContainer" onSubmit={() => router.push('/')}>
                <div className="fieldContainer">
                    <p className="fieldText">{messages.name}</p>
                    <input 
                        type="text"
                        name="name"
                        className="formInput"
                    />
                </div>
                <div className="fieldContainer">
                    <p className="fieldText">{messages.email}</p>
                    <input 
                        type="email"
                        name="email"
                        className="formInput"
                    />
                </div>
                <div className="fieldContainer">
                    <p className="fieldText">{messages.password}</p>
                    <input 
                        type="password"
                        name="password"
                        className="formInput"
                    />
                </div>
                <div className="fieldContainer">
                    <p className="fieldText">{messages.country}</p>
                    <input 
                        type="text"
                        className="formInput"
                    />
                </div>
                <div className="fieldContainer">
                    <p className="fieldText">{messages.phoneNumber}</p>
                    <PhoneInput
                        international
                        defaultCountry="US"
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        className="p"
                    />
                </div>
                <button type="submit" className="proceedButton">{messages.proceed} {lang == 'en' ? '→' : '←'}</button>
            </form>
        </div>
    )
}