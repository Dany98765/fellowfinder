import FreeTrialBooking from "./form/page"
import "./styles.css"

export default function FreeTrial() {
    return(
        <div className="freeTrialSection">
            <div className="contentContainer">
                <h3 className="riskFreeTitle">Risk-Free Now!</h3>
                <p className="desc">If you are willing to explore more details or have a deeper explanation of our services, don’t hesitate! You can schedule a free-trial session to gain a deeper insight of who we are, what we do, help you choose the most suitable plan for your needs and gain pro tips.
                </p>
                <FreeTrialBooking />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}