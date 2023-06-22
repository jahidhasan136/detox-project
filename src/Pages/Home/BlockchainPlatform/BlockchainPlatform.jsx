import transaction from '../../../assets/banner/transactions.png'
import energy from '../../../assets/banner/energy.png'

const BlockchainPlatform = () => {
    return (
        <div className='flex container mx-auto justify-center gap-12 mt-80'>
            <div className='p-7 border rounded-3xl w-[634px] h-[612px]'>
                <img src={transaction} alt="" />
                <h2 className='text-3xl mb-10 mt-6 font-semibold'>Transactions per second</h2>
                <p className='text-lg mb-4'>“10-20% of global infrastructure will run on blockchain based systems by 2030”</p>
                <h2 className='font-bold text-2xl italic'>pwc</h2>
            </div>
            <div className='p-7 border rounded-3xl w-[634px] h-[612px]'>
                <p className='text-lg mb-4'>“90% of current enterprise blockchain platform implementations will require replacement by 2021.”</p>
                <h2 className='mt-11 font-bold text-2xl'>Gartner</h2>
                <h2 className='text-3xl mb-10 mt-10 font-semibold'>Energy Consumption</h2>
                <img className='mt-6' src={energy} alt="" />
            </div>
        </div>
    );
};

export default BlockchainPlatform;