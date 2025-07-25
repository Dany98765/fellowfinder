"use client"

import AuthFeature from "../authFeature/page";
import { useEffect, useState } from "react";
import "./styles.css"

export default function AuthSidebar({ lang, showFeatures, isSignin }){
    let locale = lang || 'en'
    const [messages, setMessages] = useState()
    useEffect(() => {
        async function getTranslation() {
            let msgs = (await import(`@/public/locales/${locale}/auth/sidebar.json`)).default;
            setMessages(msgs)
        }
        getTranslation()
    }, [locale])
    let paddingDirection = locale == 'en' ? 'paddingLeft' : 'paddingRight'
    let marginDirection = locale == 'en' ? 'marginLeft' : 'marginRight'
    let imgHeight = !showFeatures ? "60%" : "35%"
    let containerHeight = showFeatures ? "900px" : "600px"
    return(
        <div className="sidebarContainer" style={{ [marginDirection]: "30px", [paddingDirection]: "30px", height: [containerHeight] }}>
            <p className="heading">{isSignin ? messages.titleSignin : messages?.title}</p>
            <p className="desc">{messages?.desc}</p>
            {showFeatures ? (
                <div>
                    <AuthFeature feature={messages?.featureOne}/>
                    <AuthFeature feature={messages?.featureTwo}/>
                    <AuthFeature feature={messages?.featureThree}/>
                    <AuthFeature feature={messages?.featureFour}/>
                    <AuthFeature feature={messages?.featureFive}/> 
                </div>
                )
                : null
            }
            <div className="i">
                <img 
                    src="/icons/dashboard.png"
                    className="dashboardImg"
                    placeholder="Dashboard Ing"
                />
            </div>
           
        </div>
    )
}