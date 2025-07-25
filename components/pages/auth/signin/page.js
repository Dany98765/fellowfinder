import "./styles.css"

import AuthSidebar from "@/components/sidebar/page"
import "./styles.css"
import SigninForm from "@/components/forms/signin/page"

export default function Signin({ lang }){
    return(
        <div className="signinContainer">
            <AuthSidebar lang={lang} showFeatures={false} isSignin={true}/>
            <SigninForm lang={lang} />
        </div>
    )
}