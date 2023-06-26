import lineUnicon from '../../../assets/roadmap/lineUnicon.png'
import './LybellRoadmap.css'

const LybellRoadmap = () => {
    return (
        <div className='container mx-auto text-center mt-[132px]'>
            <h2 className='text-5xl font-bold mb-8'>Lybell <br /> Launch Roadmap</h2>
            <p className='text-lg mb-[60px] w-1/2 mx-auto'>Maecenas condimentum bibendum efficitur. Phasellus leo orci, tincidunt at eagestas ut, ultricies sit amet libero. Suspendisse vel auctor quam, accumsan feugiat arcu. In a justo magna.</p>
            <div className='flex justify-center relative'>
                <img src={lineUnicon} alt="" />
                <div>
                    <div className='absolute left-[400px] top-28'>
                        <h2 className='text-2xl font-bold w-[55%] mb-9 uppercase'>Phase 01</h2>
                        <p className='text-base w-1/3 text-justify'>Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.</p>
                    </div>
                    <div className='rightUnicon absolute top-[90px] ml-2'>
                        <p className='font-bold text-[28px] uppercase px-[66px] py-[55px]'>Jan 2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LybellRoadmap;