import "./styles.css"

export default function AuthFeature({ feature }) {
    return(
        <div className="featureCard">
                <img src="/icons/tickWhite.png" alt="Tick" className="tickIcon" />
                <p style={{ color: "white" }}>{feature}</p>
        </div>
    )
}