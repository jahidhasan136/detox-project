import { useSwiper } from "swiper/react";
import right from '../../../assets/application/btn_right.png'
import left from '../../../assets/application/btn_left.png'


const ApplicationFocusButton = () => {
    const swiper = useSwiper();

    return (
        <div className="flex gap-11 pr-16">
            <button onClick={() => swiper.slidePrev()}>
                <img src={left} alt="" />
            </button>
            <button onClick={() => swiper.slideNext()}>
                <img src={right} alt="" />
            </button>
        </div>
    );
};

export default ApplicationFocusButton;