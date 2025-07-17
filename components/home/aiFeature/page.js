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
                        src="/reporting.png"
                        alt="Reporting Icon"
                        className="aiFeatureIcon"
                        />
                        <h2 className="catchyTitle">AI Text-Based <span style={{ color: "#1CA6A6" }}>Analysis</span></h2>
                        <p className="aiFeatureDesc">The algorithm analysis your description to find the most suitable people possible </p>
                    </div>
                    <div>
                        <img 
                        src="/alghorithm.png"
                        className="alghorithmImg"
                        alt="Algorithm Icon"
                        />
                    </div>
                </div>
                <input type="hidden" />
            </div>
        </div>
    )
}