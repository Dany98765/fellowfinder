import "./styles.css";
import Navbar from "../navbar/page";
import HeroSection from "./heroSection/page";
import AIFeature from "./aiFeature/page";
import WhyUs from "./whyUs/page";
import Pricing from "./pricing/page";
import FreeTrial from "./freeTrial/page";

export default function HomePage({ lang }) {
    console.log("Language:", lang);
    return(
        <div>
            <HeroSection lang={lang}/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <AIFeature lang={lang} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <WhyUs lang={lang}/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Pricing lang={lang} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <FreeTrial lang={lang}/>
        </div>
    )
}