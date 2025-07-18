import "./styles.css"
import PricingCard from "./pricingCard/page";

export default function Pricing() {
    return(
        <div>
            <div className="pricingPlanContainer">
                <h2 className="partnerPricingTitle">Partner Finder Pricing Plans</h2>
                <div className="partnerFindPricingPlanContainer">
                    <PricingCard 
                        price="100"
                        type="Standard"
                        desc="For those who are just starting out and want to explore the platform"
                        features={["Limited access to features", "Basic partner search", "Community support"]}
                        isRecommended={false}
                    />
                    <PricingCard 
                        price="150"
                        type="Pro"
                        desc="For young entrepreneurs or kick-starters who already have partners"
                        features={["Access to all features", "Unlimited partner search", "24/7 support"]}
                        isRecommended={true}
                    />
                    <PricingCard 
                        price="200"
                        type="Premium"
                        desc="For established businesses looking to expand their partner network"
                        features={["All Standard features", "Priority support", "Advanced analytics"]}
                        isRecommended={false}
                    />
                </div>
            </div>
            <div className="sessionsPlanContainer">
                <h2 className="sessionsTitle">Sessions Pricing Plans</h2>
                <div className="sessionsPricingPlanContainer">
                    <PricingCard 
                        price="100"
                        type="Standard"
                        desc="For those who are just starting out and want to explore the platform"
                        features={["Limited access to features", "Basic partner search", "Community support"]}
                        isRecommended={false}
                    />
                    <PricingCard 
                        price="150"
                        type="Pro"
                        desc="For young entrepreneurs or kick-starters who already have partners"
                        features={["Access to all features", "Unlimited partner search", "24/7 support"]}
                        isRecommended={false}
                    />
                    <PricingCard 
                        price="200"
                        type="Premium"
                        desc="For established businesses looking to expand their partner network"
                        features={["All Standard features", "Priority support", "Advanced analytics"]}
                        isRecommended={true}
                    />
                </div>
            </div>
           
        </div>
    )
}