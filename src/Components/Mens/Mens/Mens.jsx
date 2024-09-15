import MensCard from "../MensCard/MensCard";
import MensSlider from "../MensSlider/MensSlider";
import SliderTwo from "../SliderTwo/SliderTwo";
import ThirdBanner from "../ThirdBanner/ThirdBanner";

const Mens = () => {
    return (
        <div className="min-h-screen">
            <MensSlider></MensSlider>
            <SliderTwo></SliderTwo>
            <MensCard></MensCard>
            <ThirdBanner></ThirdBanner>
        </div>
    );
};

export default Mens;