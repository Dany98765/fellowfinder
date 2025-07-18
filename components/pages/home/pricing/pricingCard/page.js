import FeatureCard from "../featureCard/page"
import "./styles.css"

// style={{ [marginDirection]: "15px"}}
// const messages = (await import(`@/public/locales/${lang}/landing/ai.json`)).default;
// let marginDirection = lang == 'en' ? 'marginLeft' : 'marginRight'

export default async function PricingCard({ price, type, desc, features, isRecommended }) {
    let textColor = isRecommended ? "white" : "black";
    return(
        <div className="pricingCard" style={{ backgroundColor: isRecommended ? "#1CA6A6" : "#FFFFFF" }}>
            <div className="pricingCardDetails" >
                {isRecommended && 
                    <div className="recommendedBadge">
                        <p>Most Recommended</p>
                    </div>
                }
                <h1 className="price" style={{ color: textColor }}>${price}/<span><h6 style={{ marginTop: "8px", color: textColor }}>one time payement</h6></span></h1>
                <p className="type" style={{ color: textColor }}>{type}</p>
                <p className="desc" style={{ color: textColor }}>{desc}</p>
                <div className="features">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={{ title: feature }} isRecommended={isRecommended}/>
                    ))}
                </div>
                <br />
                <button className="registerButton" style={{ color: isRecommended ? "black" : "white" , backgroundColor: isRecommended ? "white" : "#1CA6A6"}}>Register Plan</button>
            </div>
        </div>
    )
}