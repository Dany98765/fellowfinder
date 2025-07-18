import "./styles.css"

export default async function WhyUs({ lang = "en" }) {
    const messages = (await import(`@/public/locales/${lang}/landing/whyUs.json`)).default;
    let marginDirection = lang == 'en' ? 'marginLeft' : 'marginRight'
    return(
        <div className="whyUsSection">
            <div className="container">
                <h3 style={{ [marginDirection]: "15px"}} className="title">{messages.title}</h3>
                <p style={{ [marginDirection]: "15px"}} className="whyUsDesc">{messages.desc}
                </p>
            </div>
            <div className="featureCards">
                <div className="firstCard">
                    <img 
                        src="/icons/free.png"
                        alt="Free Img"
                        className="freeImg"
                        style={{ [marginDirection]: "15px"}}
                    />
                    {lang == 'ar' ? <h3 style={{ [marginDirection]: "15px"}} className="firstCardTitle">{messages.titleOne} <span style={{ color: "#10374A" }}>{messages.titleOneImp}</span></h3> : <h3 style={{ [marginDirection]: "15px"}} className="firstCardTitle"><span style={{ color: "#10374A" }}>{messages.titleOneImp} </span>{messages.titleOne}</h3> }
                </div>
                <div className="secondCard">
                    <img 
                        src="/icons/ebook.png"
                        alt="E-book Img"
                        className="ebookImg"
                        style={{ [marginDirection]: "15px"}}
                    />
                   {lang == 'ar' ? <h3 style={{ [marginDirection]: "15px"}} className="secondCardTitle">{messages.titleTwo} <span style={{ color: "#10374A" }}>{messages.titleTwoImp}</span></h3> : <h3 style={{ [marginDirection]: "15px"}} className="secondCardTitle"><span style={{ color: "#10374A" }}>{messages.titleTwoImp} </span>{messages.titleTwo}</h3> }
                </div>
                <div className="thirdCard">
                    <img 
                        src="/icons/language.png"
                        alt="Free Img"
                        className="langImg"
                        style={{ [marginDirection]: "15px"}}
                    />
                   {lang == 'ar' ? <h3 style={{ [marginDirection]: "15px"}} className="secondCardTitle">{messages.titleThree} <span style={{ color: "#10374A" }}>{messages.titleThreeImp}</span></h3> : <h3 style={{ [marginDirection]: "15px"}} className="secondCardTitle"><span style={{ color: "#10374A" }}>{messages.titleThreeImp} </span>{messages.titleThree}</h3> }
                </div>
            </div>
        </div>
    )
}