import "./styles.css"

export default function AIFeature() {
    return(
        <div className="aiFeature">
            <h1 className="aiFeatureTitle">AI-Powered Partner <span style={{ color: "#1CA6A6" }}>Finder</span></h1>
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
                        />
                        <h2 className="catchyTitle">AI Text-Based <span style={{ color: "#1CA6A6" }}>Analysis</span></h2>
                        <p className="aiFeatureDesc">The algorithm analysis your description to find the most suitable people possible </p>
                    </div>
                    <div>
                        <img 
                        src="/icons/alghorithm.png"
                        className="alghorithmImg"
                        alt="Algorithm Icon"
                        />
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
                    />
                    <h2 className="leftCardTitle">A Tailored Partner Finder System</h2>
                    <p className="leftCardDesc">You have the potential to specify the number of partners, background knowledge, age and more...</p>
                </div>
                <div className="rightCard">
                    <img 
                        src="/icons/clock.png"
                        alt="Time Effective Icon"
                        className="clockImg"
                    />
                    <h2 className="rightCardTitle">A Seamless, Time-Efficient Solution</h2>                
                </div>
                <input type="hidden" />
            </div>
        </div>
    )
}