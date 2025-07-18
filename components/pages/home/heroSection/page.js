import './styles.css';

export default function HeroSection() {
    return (
        <div className="heroSection">
            <div className="leftSection">
                <h1 className="catchyHeadline">
                    Hop Onboard the Business Market with
                    <span className="f"> F</span><span className="ello">ello</span><span className="f">F</span><span className="inder">inder</span>
                </h1>
                <br /><br />
                <p className="description">A fully-fledged service empowering young entrepreneurs to boost off to the business market with a lucrative startup"</p>
                <br /><br />
                <button className="getInTouchButton">Get in Touch</button>
            </div>
            <div className="rightSection">
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
