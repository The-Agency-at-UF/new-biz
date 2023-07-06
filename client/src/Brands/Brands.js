import { useLocation } from "react-router-dom";
import Uber from './CaseStudies/Uber'
import Bliss from './CaseStudies/Bliss'
import Monday from "./CaseStudies/Monday";

const Brands = () => {
    const location = useLocation();

    function CallBrands({brand}) {
        if (brand === "Uber") {
            return (
                <Uber />
            )
        } else if (brand === "Bliss") {
            return (
                <Bliss />
            )
        } else if (brand === "Monday") {
            return (
                <Monday />
            )
        }
    }

    return (
        <div>
             {/*call the case studies in order */}
            <CallBrands brand={location.state.brand1} />
            <CallBrands brand={location.state.brand2} />
            <CallBrands brand={location.state.brand3} />
        </div>
        
    )
}

export default Brands;