import FreeTrialBooking from "./form/page"
import "./styles.css"

export default async function FreeTrial({ lang = "en" }) {
    const messages = (await import(`@/public/locales/${lang}/landing/riskFree.json`)).default;
    let marginDirection = lang == 'en' ? 'marginLeft' : 'marginRight'
    return(
        <div className="freeTrialSection" style={{ [marginDirection]: "15px"}}>
            <div className="contentContainer" style={{ [marginDirection]: "15px"}}>
                <h3 className="riskFreeTitle" style={{ [marginDirection]: "15px"}}>{messages.title}!</h3>
                <p className="desc" style={{ [marginDirection]: "15px"}}>{messages.desc}</p>
                <FreeTrialBooking lang={lang}/>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}