"use client"

import { useRouter } from "next/navigation";
import "./styles.css"
import { useState, useEffect, use } from "react"
import PhoneInput from 'react-phone-number-input';
import MultipleSelectCheckmarks from "@/components/inputs/fieldSelection/page";
import CountryInput from "@/components/inputs/countryInput/page";
import Link from "next/link";
import { proceedValidation } from "@/utils/validation/proceed";
import AlertMessage from "@/components/alert/page";
import { signupValidation } from "@/utils/validation/signup";
import { createUser } from "@/utils/actions/user.action";

export default function SignupForm({ lang }){
    const router = useRouter()
    let locale = lang || 'en'
    let paddingDirection = locale == 'en' ? 'paddingLeft' : 'paddingRight'
    let marginDirection = locale == 'en' ? 'marginLeft' : 'marginRight'
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [country, setCountry] = useState("")
    const [money, setMoney] = useState(0)
    const [messages, setMessages] = useState(null);
    const [otherField, setOtherField] = useState("");
    const [onBoardMessages, setOnBoardMessages] = useState(null);
    const [expertiseFields, setExpertiseFields] = useState([]);
    const [selectedButton, setSelectedButton] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [desc, setDesc] = useState("")
    const [onBoard, setOnBoard] = useState(false)
    let onBoardVar = false
    const [errorMessage, setErrorMessage] = useState()
    //const [countryTags, setCountryTags] = useState([])
    useEffect(() => {
        async function retrieveTranslation() {
            const msgs = (await import(`@/public/locales/${locale}/auth/signup.json`)).default;
            const messages = (await import(`@/public/locales/${locale}/auth/onBoard.json`)).default;
            setMessages(msgs);
            setOnBoardMessages(messages)
        }

        retrieveTranslation();
    }, [locale]);
    const [selected, setSelected] = useState([]);

    const handleChange = (e) => {
      const values = Array.from(e.target.selectedOptions, option => option.value);
      setSelected(values);
    };
    if (!messages) {
        return <div>Loading...</div>; 
    }
    async function proceed(){
        const formData = {
            name,
            email,
            password,
            country,
            phoneNumber,
            locale
        }
        let result = await proceedValidation(formData)
        setErrorMessage(result.message)
        console.log(errorMessage)
        if (result.success){
            onBoardVar = true
            setOnBoard(true)
        }
    }
    async function signup() {
        const formData = {
            expertiseFields,
            otherField,
            money,
            selectedButton,
            desc,
            locale
        }
        const allFormData = {
            name,
            email,
            password,
            country,
            phoneNumber,
            expertiseFields,
            otherField,
            money,
            selectedButton,
            desc
        }
        const result = await signupValidation(formData)
    
        setErrorMessage(result.success ? null : result.message)
        onBoardVar = true
        setOnBoard(true)
        if (result.success) {
            console.log("SUCCESS!!!")
            // Maybe redirect or show success message
        }

        await createUser(allFormData)
    }
    
    let lawyerBgColor = selectedButton == 'lawyer' ? "#1CA6A6" : "#FFFFFF"
    let funderBgColor = selectedButton == 'funder' ? "#1CA6A6" : "#FFFFFF"
    let kickStarterBgColor = selectedButton == 'kickStarter' ? "#1CA6A6" : "#FFFFFF"
    console.log(expertiseFields)
    return(
        <>
            {!onBoard ? (
                <div className="signupFormContainer" style={{ [marginDirection]: "20px", [paddingDirection]: "20px" }}>
                    {errorMessage ?
                        <AlertMessage 
                            message={errorMessage}
                            status="error"
                        /> :
                        null
                    }
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
                        <div className="fieldContainer">
                            <p className="fieldText">{messages.name}</p>
                            <input 
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="formInput"
                            />
                        </div>
                        <div className="fieldContainer">
                            <p className="fieldText">{messages.email}</p>
                            <input 
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="formInput"
                            />
                        </div>
                        <div className="fieldContainer">
                            <p className="fieldText">{messages.password}</p>
                            <input 
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="formInput"
                            />
                        </div>
                        <div className="fieldContainer">
                            <p className="fieldText">{messages.country}</p>
                            <input 
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
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
                            <input type="hidden" name="phoneNumber" />
                        </div>
                        <button onClick={(e) => {
                            e.preventDefault()
                            proceed()
                        }} className="proceedButton">{messages.proceed} {locale == 'en' ? '→' : '←'}</button>
                        <p style={{ cursor: "help" }}>{messages.haveAccount} <Link href="/signin" className="altAuth">{messages.alt}</Link></p>
                </div>
            ) : (
                <div className="signupFormContainer" style={{ [marginDirection]: "40px", [paddingDirection]: "40px" }}>
                    {onBoard ?
                        <AlertMessage 
                            message="Successfully proceeded to next stage of signup!"
                            status="success"
                        /> :
                        null
                    }
                    {errorMessage ?
                        <AlertMessage 
                            message={errorMessage}
                            status="error"
                        /> :
                        null
                    }
                   <div className="titleContainer">
                        <h2>{onBoardMessages.title}</h2>
                        <i className="italicWord">{selectedButton == 'funder' ? onBoardMessages.italicPhraseFunder : selectedButton == 'kickStarter' ? onBoardMessages.italicPhraseKickStarter : onBoardMessages.italicPhraseLawyer}</i>
                    </div>
                    <form className="onBoardForm" action={(e) => {
                            e.preventDefault()
                            signup()
                        }}>
                        <p className="fieldText">{onBoardMessages.investementFields}</p>
                        <MultipleSelectCheckmarks expertiseFields={expertiseFields} setExpertiseFields={setExpertiseFields} alt={selectedButton == 'funder' ? onBoardMessages.altOneFunder : selectedButton == 'kickStarter' ? onBoardMessages.altOneKickStarter : selectedButton == 'lawyer' ? onBoardMessages.altOneLawyer : 'Select Fields of Expertise'} options={onBoardMessages.options} />
                        {expertiseFields.includes("Other") || expertiseFields.includes("أخرى") ? (
                            <div className="fieldContainer">
                                <p className="fieldText">{onBoardMessages.specifyOther}</p>
                                <input 
                                    type="text"
                                    name="otherField"
                                    value={otherField}
                                    onChange={(e) => setOtherField(e.target.value)}
                                    className="formInput"
                                />
                            </div>
                        ) :
                        null
                        }
                        <input type="hidden" name="expertiseFields" value={expertiseFields.join(',')} />
                        {/* <div className="fieldContainer">
                            <p className="fieldText">{onBoardMessages.countries}</p>
                            <CountryInput countryTags={countryTags} setCountryTags={setCountryTags} alt={selectedButton == 'funder' ? onBoardMessages.altTwoFunder : selectedButton == 'kickStarter' ? onBoardMessages.altTwoKickStarter : selectedButton == 'lawyer' ? onBoardMessages.altTwoLawyer : 'Select Fields of Expertise'} options={onBoardMessages.options}/> 
                            <input type="hidden" name="countryTags" />
                        </div> */}
                        {selectedButton == 'funder' ? (
                            <div className="fieldContainer">
                                <p className="fieldText">{onBoardMessages.money}</p>
                                <div className="moneyInputWrapper">
                                        <span className="dollarSign">$</span>
                                        <input 
                                            type="number"
                                            name="otherField"
                                            value={money}
                                            onChange={(e) => setMoney(e.target.value)}
                                            className="moneyInput"
                                        />
                                </div>
                            </div>
                        ) :  null}
                        <input type="hidden" name="money" />
                        <div className="fieldContainer">
                            <p className="fieldText">{messages.description}</p>
                            <textarea
                                placeholder={onBoardMessages.altThree}
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                className="descInput"
                            />
                        </div>
                        <input type="hidden" name="desc" />
                        <div className="termsAndPrivacyContainer">
                            <input type="checkbox" className="checkbox"/>
                            <p>{onBoardMessages.agreement} <u style={{ cursor: "pointer" }}>{onBoardMessages.agreementUnderlined}</u></p>
                        </div>
                        <button type="submit" className="signupButton">{onBoardMessages.signup}</button>
                        <p style={{ cursor: "help" }}>{onBoardMessages.haveAccount} <Link href="/signin" style={{ color: "#127373", cursor: "pointer" }}>{onBoardMessages.alt}</Link></p>
                    </form>
                </div>
            )
            }
        </>
    )
}