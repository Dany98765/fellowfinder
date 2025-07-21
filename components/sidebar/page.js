import AuthFeature from "../authFeature/page";
import FeatureCard from "../featureCard/page";
import "./styles.css"

export default async function AuthSidebar({ lang }){
    let locale = lang || 'en'
    const messages = (await import(`@/public/locales/${locale}/auth/sidebar.json`)).default;
    let paddingDirection = locale == 'en' ? 'paddingLeft' : 'paddingRight'
    let marginDirection = locale == 'en' ? 'marginLeft' : 'marginRight'
    return(
        <div className="sidebarContainer" style={{ [marginDirection]: "30px", [paddingDirection]: "30px" }}>
            <p className="heading">{messages.title}</p>
            <p className="desc">{messages.desc}</p>
            <AuthFeature feature={messages.featureOne}/>
            <AuthFeature feature={messages.featureTwo}/>
            <AuthFeature feature={messages.featureThree}/>
            <AuthFeature feature={messages.featureFour}/>
            <AuthFeature feature={messages.featureFive}/>
            <img 
                src="/icons/dashboard.png"
                className="dashboardImg"
                placeholder="Dashboard Ing"
            />
        </div>
    )
}