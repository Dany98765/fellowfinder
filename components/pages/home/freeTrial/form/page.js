import "./styles.css"

export default async function FreeTrialBooking({ lang = "en" }) {
    const messages = (await import(`@/public/locales/${lang}/landing/riskFree.json`)).default;
    let marginDirection = lang == 'en' ? 'marginLeft' : 'marginRight'
    return(
        <div className="bookingForm">
            <div className="formHeader">
                <input type="text" placeholder={messages.nameField} className="nameField" />
                <input type="date" placeholder={messages.dateField} className="dateField" />
            </div>
            <button className="bookButton">{messages.bookNow}</button>
        </div>
    )
}