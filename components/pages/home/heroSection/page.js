import './styles.css';

export default async function HeroSection({ lang = "en" }) {
    const messages = (await import(`@/public/locales/${lang}/landing/hero.json`)).default;
    let marginDirection = lang == 'en' ? 'marginLeft' : 'marginRight'
    let imgMarginDirection = lang == 'en' ? 'marginRight' : 'marginLeft'
    return (
        <div className="heroSection">
            <div className="leftSection" style={{ [marginDirection]: "30px" }}>
                <h1 className="catchyHeadline">
                    {messages.title}
                    <span className="f"> F</span><span className="ello">ello</span><span className="f">F</span><span className="inder">inder</span>
                </h1>
                <br /><br />
                <p className="description">{messages.desc}</p>
                <br /><br />
                <button className="getInTouchButton">{messages.getInTouch}</button>
            </div>
            <div className="rightSection" style={{ [imgMarginDirection]: "30px" }}>
                <div className="imgContainer">
                    <img
                        src="/icons/person.png"
                        alt="Person with laptop"
                        className="heroImage"
                    />
                </div>
            </div>
        </div>
    );
}
