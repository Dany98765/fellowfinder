import "./styles.css"

export default function AuthFeature({ feature }) {
    return(
        <div className="featureCard">
                <img src="/icons/tickWhite.png" alt="Tick" className="tickIcon" />
                <p className="featureText">{feature}</p>
        </div>
    )
}