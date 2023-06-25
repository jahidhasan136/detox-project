import { useSwiper } from "swiper/react";
import right from '../../../assets/application/btn_right.png'
import left from '../../../assets/application/btn_left.png'


const ApplicationFocusButton = () => {
    const swiper = useSwiper();

    return (
        <div className="flex gap-11">
            <button onClick={() => swiper.slidePrev()}>
                <img src={right} alt="" />
            </button>
            <button onClick={() => swiper.slideNext()}>
                <img src={left} alt="" />
            </button>
        </div>
    );
};

export default ApplicationFocusButton;