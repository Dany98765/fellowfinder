import "./styles.css"

export default async function AIFeature({ lang = "en" }) {
    const messages = (await import(`@/public/locales/${lang}/landing/ai.json`)).default;
    let marginDirection = lang == 'en' ? 'marginLeft' : 'marginRight'
    let imgMarginDirection = lang == 'en' ? 'marginRight' : 'marginLeft'
    return(
        <div className="aiFeature">
            <h1 className="aiFeatureTitle"> {messages.introTitle} <span style={{ color: "#1CA6A6" }}> {messages.introTitleImp} </span></h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="aiFeatureContent">
                <input type="hidden" />
                <div className="aiFeatureOne">
                    <div className="leftContent">
                        <img 
                            src="/icons/reporting.png"
                            alt="Reporting Icon"
                            className="aiFeatureIcon"
                            style={{ [marginDirection]: "15px"}}
                        />
                        <h2 style={{ [marginDirection]: "15px"}} className="catchyTitle"><span style={{ color: "#1CA6A6" }}> {messages.featureOneWord} </span> {messages.featureOneTitle} </h2>
                        <p style={{ [marginDirection]: "15px"}} className="aiFeatureDesc">{messages.featureOneDescription}</p>
                    </div>
                    <div>
                        {lang == 'en' ?
                            <img 
                                src="/icons/alghorithm.png"
                                className="alghorithmImg"
                                alt="Algorithm Icon"
                                style={{ [imgMarginDirection]: "30px"}}
                            /> : 
                            <img 
                                src="/icons/alghorithm-ar.png"
                                className="alghorithmImg"
                                alt="Algorithm Icon"
                                style={{ [imgMarginDirection]: "30px"}}
                            />
                        }
                    </div>
                </div>
                <input type="hidden" />
            </div>
            <div className="horizontalCards">
                <input type="hidden" />
                <div className="leftCard">
                    <img 
                        src="/icons/customisation.png"
                        alt="Customisation Icon"
                        className="customisationImg"
                        style={{ [marginDirection]: "30px"}}
                    />
                    <h2 style={{ [marginDirection]: "30px"}} className="leftCardTitle">{messages.featureTwoTitle}</h2>
                    <p style={{ [marginDirection]: "30px"}} className="leftCardDesc">{messages.featureTwoDescription}</p>
                </div>
                <div className="rightCard">
                    <img 
                        src="/icons/clock.png"
                        alt="Time Effective Icon"
                        className="clockImg"
                        style={{ [marginDirection]: "30px"}}
                    />
                    <h2 style={{ [marginDirection]: "30px"}} className="rightCardTitle">{messages.featureThreeTitle}</h2>                
                </div>
                <input type="hidden" />
            </div>
        </div>
    )
}