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
            <div className='text-center w-[840px] mx-auto'>
                <h1 className='text-5xl font-bold capitalize leading-[60px]'>Lybell is collaborative, decentralized & efficient</h1>
                <p className='mt-8 text-lg'>Lybell provides decentralized cross-chain collaborative consensus</p>
            </div>
            <div className='mt-[68px] flex items-center gap-[116px] justify-center'>
                <div className='grid gap-9'>
                    <div className='bg-[#ffffff0d] px-[46px] rounded-[20px] w-[568px] py-8 border border-white/20'>
                        <h2 className='text-[32px] font-bold mb-6'>Graphchain</h2>
                        <p className='text-lg font-medium mb-11'>Partial ordering Real-time updates No need for mining pools Scales with demand</p>
                        <p className=''>By allowing a DAG of data instead of a rigid Blockchain we include all users in every transaction..? something about what actually happens here</p>
                    </div>
                    <div className='bg-[#ffffff0d] px-[46px] rounded-[20px] w-[568px] py-8 border border-white/20'>
                        <h2 className='text-[32px] font-bold mb-6'>Blockchain</h2>
                        <p className='text-lg font-medium mb-11'>Linear ordering Periodic updates Mining pools Scales via forks and updates</p>
                        <p>By allowing a DAG of data instead of a rigid Blockchain we include all users in every transaction..? something about whatactually happens here</p>
                    </div>
                </div>
                <div className='bg-[#ffffff0d] p-[19px] rounded-[30px]'>
                    <img className='h-[615px]' src={world} alt="" />
                </div>
            </div>
            <div className='mt-20 flex  relative justify-center gap-[70px]'>
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
        </div>
    );
};

export default LybellFeatures;