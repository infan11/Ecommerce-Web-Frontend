import MensCard from "../MensCard/MensCard";
import MensSlider from "../MensSlider/MensSlider";
import SliderTwo from "../SliderTwo/SliderTwo";

const Mens = () => {
    return (
        <div className="min-h-screen">
            <MensSlider></MensSlider>
            <SliderTwo></SliderTwo>
            <MensCard></MensCard>
        </div>
    );
};

export default Mens;