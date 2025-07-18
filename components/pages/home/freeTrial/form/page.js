import "./styles.css"

export default function FreeTrialBooking() {
    return(
        <div className="bookingForm">
            <div className="formHeader">
                <input type="text" placeholder="Enter your name" className="nameField" />
                <input type="date" placeholder="Select a Date" className="dateField" />
            </div>
            <button className="bookButton">Book Now</button>
        </div>
    )
}