import AuthSidebar from "@/components/sidebar/page"
import "./styles.css"
import SignupForm from "@/components/forms/signup/page"

export default function Signup({ lang }){
    return(
        <div className="signupContainer">
            <AuthSidebar lang={lang}/>
            <SignupForm lang={lang}/>
        </div>
    )
}