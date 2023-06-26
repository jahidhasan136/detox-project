import { RiSendPlaneLine } from 'react-icons/ri';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className="newsletter_bg mt-[60px] md:mt-[120px] container mx-auto rounded-[20px] w-[342px] md:w-full">
            <div className='grid justify-center py-[40px] md:py-[91px] text-center'>
                <h1 className='text-2xl md:text-[50px] font-bold mb-4 grid md:flex'>Subscribe <span>To Our Newsletter</span></h1>
                <p className='text-base md:text-lg mb-10'>Join our email list for exclusive offers and the latest news.</p>
                <form action="" className='relative flex items-center mx-auto'>
                    <input type="text" className='text-base w-[310px] md:w-[551px] h-[48px] md:h-[74px] rounded-lg md:rounded-[15px] pl-[34px] text-black' placeholder='Enter Your Email' name="" id="" />
                    <button className='hidden md:flex absolute right-[5px] z-10 text-black text-[17px] font-medium bg-[#F95B27] px-10 py-[21px] rounded-[10px]'>Subscribe</button>
                    <button className='md:hidden w-[38px] md:w-full h-[38px] md:h-full absolute right-[5px] z-10 text-white text-[17px] font-medium bg-[#F95B27] p-[9px] md:px-10 md:py-[21px] rounded-[4px] md:rounded-[10px]'>
                        <RiSendPlaneLine></RiSendPlaneLine>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;