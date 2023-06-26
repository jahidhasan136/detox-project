import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className="newsletter_bg mt-[120px] container mx-auto rounded-[20px]">
            <div className='grid justify-center py-[91px] text-center'>
                <h1 className='text-[50px] font-bold mb-4'>Subscribe To Our Newsletter</h1>
                <p className='text-lg mb-10'>Join our email list for exclusive offers and the latest news.</p>
                <form action="" className='relative flex items-center'>
                    <input type="text" className='text-base w-[551px] h-[74px] rounded-[15px] pl-[34px] text-black' placeholder='Enter Your Email' name="" id="" />
                    <button className='absolute right-[120px] z-10 text-black text-[17px] font-medium bg-[#F95B27] px-10 py-[21px] rounded-[10px]'>Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;