import "./styles.css"

export default function WhyUs() {
    return(
        <div className="whyUsSection">
            <div className="container">
                <h3 className="title">Why Us?</h3>
                <p className="whyUsDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="featureCards">
                <div className="firstCard">
                    <img 
                        src="/icons/free.png"
                        alt="Free Img"
                        className="freeImg"
                    />
                    <h3 className="firstCardTitle">A <span style={{ color: "#10374A" }}>Free</span> Welcome Session with your Partners</h3>
                </div>
                <div className="secondCard">
                    <img 
                        src="/icons/ebook.png"
                        alt="E-book Img"
                        className="ebookImg"
                    />
                    <h3 className="secondCardTitle"><span style={{ color: "#10374A" }}>Summarized E-book</span> as a Point of Reference</h3>
                </div>
                <div className="thirdCard">
                    <img 
                        src="/icons/language.png"
                        alt="Free Img"
                        className="langImg"
                    />
                    <h3 className="thirdCardTitle">Supporting<span style={{ color: "#10374A" }}> Multiple</span> Geographical Locations</h3>
                </div>
            </div>
        </div>
    )
}