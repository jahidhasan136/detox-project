import transaction from '../../../assets/banner/transactions.png'
import energy from '../../../assets/banner/energy.png'
import PercentagePlatform from './PercentagePlatform';

const BlockchainPlatform = () => {
    return (
        <>
            <div className='flex container mx-auto justify-center gap-12 mt-80'>
                <div className='p-7 border rounded-3xl w-[634px]'>
                    <img src={transaction} alt="" />
                    <h2 className='text-3xl mb-10 mt-6 font-semibold'>Transactions per second</h2>
                    <p className='text-lg mb-4'>“10-20% of global infrastructure will run on blockchain based systems by 2030”</p>
                    <h2 className='font-bold text-2xl italic'>pwc</h2>
                </div>
                <div className='p-7 border rounded-3xl w-[634px]'>
                    <p className='text-lg mb-11'>“90% of current enterprise blockchain platform implementations will require replacement by 2021.”</p>
                    <h2 className='mb-10 font-bold text-2xl'>Gartner</h2>
                    <h2 className='text-3xl mb-6 font-semibold'>Energy Consumption</h2>
                    <img src={energy} alt=""/>
                </div>
            </div>
            <PercentagePlatform></PercentagePlatform>
        </>
    );
};

export default BlockchainPlatform;