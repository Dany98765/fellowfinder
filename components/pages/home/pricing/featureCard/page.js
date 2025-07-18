import "./styles.css"

export default function FeatureCard({ feature, isRecommended }) {
    return(
        <div className="featureCard">
            {isRecommended ? <img src="/icons/tickWhite.png" alt="Tick" className="tickIcon" /> : <img src="/icons/tick.png" alt="Tick" className="tickIcon" />}
            {isRecommended ? <p style={{ color: "white" }}>{feature.title}</p> : <p className="featureTitle">{feature.title}</p>}
        </div>
    )
}