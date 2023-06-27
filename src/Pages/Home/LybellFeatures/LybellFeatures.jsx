import world from '../../../assets/features/world.png'
import fast from '../../../assets/features/fast.svg'
import scalable from '../../../assets/features/scalable.svg'
import robust from '../../../assets/features/robust.svg'
import green from '../../../assets/features/green.svg'
import cross_chain from '../../../assets/features/cross_chain.svg'
import accessible from '../../../assets/features/accessible.svg'
// import elli from '../../../assets/features/Ellipse 25.png'
import './LybellFeatures.css'

const LybellFeatures = () => {
    return (
        <div className="container mx-auto mt-[140px]">
            <div className='text-center md:w-[840px] mx-auto grid justify-center'>
                <h1 className='text-2xl md:text-5xl font-bold capitalize md:leading-[60px] w-[342px] md:w-full'>Lybell is collaborative, decentralized & efficient</h1>
                <p className='mt-4 md:mt-8 text-base md:text-lg w-[342px] md:w-full'>Lybell provides decentralized cross-chain collaborative consensus</p>
            </div>
            <div className='mt-[30px] md:mt-[68px] md:flex items-center md:gap-[116px] mx-auto grid justify-center'>
                <div className='grid gap-4 md:gap-9'>
                    <div className='bg-[#ffffff0d] px-[46px] rounded-[20px] w-[343px] md:w-[568px] py-8 border border-white/20'>
                        <h2 className='text-xl md:text-[32px] font-bold mb-6'>Graphchain</h2>
                        <p className='text-sm md:text-lg font-medium mb-6 md:mb-11'>Partial ordering Real-time updates No need for mining pools Scales with demand</p>
                        <p className='text-sm md:text-base'>By allowing a DAG of data instead of a rigid Blockchain we include all users in every transaction..? something about what actually happens here</p>
                    </div>
                    <div className='bg-[#ffffff0d] px-[46px] rounded-[20px] w-[343px] md:w-[568px] py-8 border border-white/20'>
                        <h2 className='text-xl md:text-[32px] font-bold mb-6'>Blockchain</h2>
                        <p className='text-sm md:text-lg font-medium mb-6 md:mb-11'>Linear ordering Periodic updates Mining pools Scales via forks and updates</p>
                        <p className='text-sm md:text-base'>By allowing a DAG of data instead of a rigid Blockchain we include all users in every transaction..? something about whatactually happens here</p>
                    </div>
                </div>
                <div className='bg-[#ffffff0d] p-[19px] rounded-[30px] mt-6 md:mt-0 w-[343px] md:w-[673px] '>
                    <img className='md:h-[615px] h-[330px]' src={world} alt="" />
                </div>
            </div>
            <div className='hidden mt-20 md:flex  relative justify-center gap-[70px]'>
                <div>
                    <div className='bg'>
                        <img className='' src={fast} alt="" />
                    </div>
                    <h2 className='text-[32px] font-semibold mt-6 flex justify-center'>Fast</h2>
                </div>
                <div>
                    <div className='bg'>
                        <img src={scalable} alt="" />
                    </div>
                    <h2 className='text-[32px] font-semibold mt-6 flex justify-center'>Scalable</h2>
                </div>
                <div>
                <div className='bg'>
                        <img src={robust} alt="" />
                    </div>
                    <h2 className='text-[32px] font-semibold mt-6 flex justify-center'>Robust</h2>
                </div>
                <div>
                <div className='bg'>
                        <img src={green} alt="" />
                    </div>
                    <h2 className='text-[32px] font-semibold mt-6 flex justify-center'>Green</h2>
                </div>
                <div>
                <div className='bg'>
                        <img src={cross_chain} alt="" />
                    </div>
                    <h2 className='text-[32px] font-semibold mt-6 flex justify-center'>Cross Chain</h2>
                </div>
                <div>
                <div className='bg'>
                        <img src={accessible} alt="" />
                    </div>
                    <h2 className='text-[32px] font-semibold mt-6 flex justify-center'>Accessible</h2>
                </div>
            </div>
            <div className='md:hidden container grid gap-8 pl-10 mt-[60px]'>
                <div className='flex items-center gap-6'>
                    <div className='w-[14px] h-[14px] bg-[#F95B27] rounded-full'>
                    </div>
                    <h2 className='text-2xl font-semibold'>Fast</h2>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='w-[14px] h-[14px] bg-[#F95B27] rounded-full'>
                    </div>
                    <h2 className='text-2xl font-semibold'>Scalable</h2>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='w-[14px] h-[14px] bg-[#F95B27] rounded-full'>
                    </div>
                    <h2 className='text-2xl font-semibold'>Robust</h2>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='w-[14px] h-[14px] bg-[#F95B27] rounded-full'>
                    </div>
                    <h2 className='text-2xl font-semibold'>Green</h2>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='w-[14px] h-[14px] bg-[#F95B27] rounded-full'>
                    </div>
                    <h2 className='text-2xl font-semibold'>Cross-Chain</h2>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='w-[14px] h-[14px] bg-[#F95B27] rounded-full'>
                    </div>
                    <h2 className='text-2xl font-semibold'>Accessible</h2>
                </div>
            </div>
        </div>
    );
};

export default LybellFeatures;