import transaction from '../../../assets/banner/transactions.png'
import energy from '../../../assets/banner/energy.png'
import PercentagePlatform from './PercentagePlatform';

const BlockchainPlatform = () => {
    return (
        <>
            <div className='md:flex container mx-auto justify-center md:gap-12 mt-[128px] md:mt-80 grid gap-6'>
                <div className='p-4 md:p-7 border border-[#ffffff33] rounded-3xl w-[342px] md:w-[634px] bg-[#ffffff0d]'>
                    <img src={transaction} alt="" />
                    <h2 className='text-xl md:text-3xl mb-3 md:mb-10 mt-4 md:mt-6 font-semibold'>Transactions per second</h2>
                    <p className='text-base md:text-lg mb-3 md:mb-4'>“10-20% of global infrastructure will run on blockchain based systems by 2030”</p>
                    <h2 className='font-bold text-2xl italic'>pwc</h2>
                </div>
                <div className='hidden md:grid p-7 border rounded-3xl w-[342px] md:w-[634px] border-[#ffffff33] bg-[#ffffff0d]'>
                    <p className='text-lg mb-11'>“90% of current enterprise blockchain platform implementations will require replacement by 2021.”</p>
                    <h2 className='mb-10 font-bold text-2xl'>Gartner</h2>
                    <h2 className='text-3xl mb-6 font-semibold'>Energy Consumption</h2>
                    <img src={energy} alt=""/>
                </div>
                <div className='p-4 md:p-7 md:hidden border border-[#ffffff33] rounded-3xl w-[342px] md:w-[634px] bg-[#ffffff0d]'>
                    <img src={energy} alt="" />
                    <h2 className='text-xl md:text-3xl mb-3 md:mb-10 mt-4 md:mt-6 font-semibold'>Energy Consumption</h2>
                    <p className='text-base md:text-lg mb-3 md:mb-4'>“90% of current enterprise blockchain platform implementations will require replacement by 2021.”</p>
                    <h2 className='font-bold text-2xl italic'>Gartner</h2>
                </div>
            </div>
            <PercentagePlatform></PercentagePlatform>
        </>
    );
};

export default BlockchainPlatform;