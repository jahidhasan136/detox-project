import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import b2b from '../../../assets/application/b2b.png'
import digital from '../../../assets/application/digital.png'
import ease from '../../../assets/application/ease.png'
import ApplicationFocusButton from "./ApplicationFocusButton";
import './applicationFocus.css'


const ApplicationFocus = () => {
    return (
        <div className="mt-[120px]">
                <div className="mb-[76px] container mx-auto">
                    <h1 className="text-5xl font-bold">Application Focus</h1>
                </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper container"
                >
                <div className="flex justify-end mt-[50px]">
                <ApplicationFocusButton></ApplicationFocusButton>
                </div>
                <SwiperSlide>
                    <div className="w-[409px] h-[459px] border border-[#eeeeee33] p-[32px] rounded-[15px] card_back">
                        <img className="mb-[23px]" src={b2b} alt="" />
                        <h2 className="mb-[26px] text-2xl font-semibold">B2B, B2C, C2C, P2P</h2>
                        <p className="mb-9 text-base font-medium">The platform is designed to allow users to transact between phone and email systems. using Legacy</p>
                        <button className="text-sm border border-[#F95B27] px-6 py-3 rounded-xl hover:bg-[#F95B27]">Read More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[409px] h-[459px] border border-[#eeeeee33] card_back p-[32px] rounded-[15px]">
                        <img className="mb-[23px]" src={digital} alt="" />
                        <h2 className="mb-[26px] text-2xl font-semibold">Digital First Focus</h2>
                        <p className="mb-9 text-base font-medium">The platform is designed to allow users to transact between phone and email systems. using Legacy</p>
                        <button className="text-sm border border-[#F95B27] px-6 py-3 rounded-xl hover:bg-[#F95B27]">Read More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[409px] h-[459px] border border-[#eeeeee33] card_back p-[32px] rounded-[15px]">
                        <img className="mb-[23px]" src={ease} alt="" />
                        <h2 className="mb-[26px] text-2xl font-semibold">Ease Of Use</h2>
                        <p className="mb-9 text-base font-medium">The platform is designed to allow users to transact between phone and email systems. using Legacy</p>
                        <button className="text-sm border border-[#F95B27] px-6 py-3 rounded-xl hover:bg-[#F95B27]">Read More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[409px] h-[459px] border border-[#eeeeee33] card_back p-[32px] rounded-[15px]">
                        <img className="mb-[23px]" src={b2b} alt="" />
                        <h2 className="mb-[26px] text-2xl font-semibold">B2B, B2C, C2C, P2P</h2>
                        <p className="mb-9 text-base font-medium">The platform is designed to allow users to transact between phone and email systems. using Legacy</p>
                        <button className="text-sm border border-[#F95B27] px-6 py-3 rounded-xl hover:bg-[#F95B27]">Read More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[409px] h-[459px] border border-[#eeeeee33] card_back p-[32px] rounded-[15px]">
                        <img className="mb-[23px]" src={digital} alt="" />
                        <h2 className="mb-[26px] text-2xl font-semibold">Digital First Focus</h2>
                        <p className="mb-9 text-base font-medium">The platform is designed to allow users to transact between phone and email systems. using Legacy</p>
                        <button className="text-sm border border-[#F95B27] px-6 py-3 rounded-xl hover:bg-[#F95B27]">Read More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[409px] h-[459px] border border-[#eeeeee33] card_back p-[32px] rounded-[15px]">
                        <img className="mb-[23px]" src={ease} alt="" />
                        <h2 className="mb-[26px] text-2xl font-semibold">Ease Of Use</h2>
                        <p className="mb-9 text-base font-medium">The platform is designed to allow users to transact between phone and email systems. using Legacy</p>
                        <button className="text-sm border border-[#F95B27] px-6 py-3 rounded-xl hover:bg-[#F95B27]">Read More</button>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default ApplicationFocus;