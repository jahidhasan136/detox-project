import lineUnicon from '../../../assets/roadmap/lineUnicon.png'
import './LybellRoadmap.css'

const LybellRoadmap = () => {
    return (
        <div className='container mx-auto text-center mt-[132px]'>
            <h2 className='text-2xl md:text-5xl font-bold mb-4 md:mb-8 md:leading-[65px]'>Lybell <br /> Launch Roadmap</h2>
            <p className='md:text-lg mb-[60px] w-1/2 mx-auto'>Maecenas condimentum bibendum efficitur. Phasellus leo orci, tincidunt at eagestas ut, ultricies sit amet libero. Suspendisse vel auctor quam, accumsan feugiat arcu. In a justo magna.</p>
            <div className='flex justify-center relative'>
                <img src={lineUnicon} alt="" />

                {/* phase 1 */}

                <div className='absolute top-[96px] flex'>
                    <div className='absolute right-12 w-[400px]'>
                        <h2 className='text-2xl font-bold ml-72 mb-9 uppercase'>Phase 01</h2>
                        <p className='text-base text-justify'>Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.</p>
                    </div>
                    <div className='rightUnicon absolute ml-10'>
                        <p className='font-bold text-[28px] uppercase px-[66px] py-[55px]'>Jan 2023</p>
                    </div>
                </div>

                {/* phase 2 */}

                <div className='absolute flex mt-[324px]'>
                    <div className='leftUnicon absolute right-12'>
                        <p className='font-bold text-[28px] uppercase px-[66px] py-[55px]'>Feb 2023</p>
                    </div>
                    <div className='absolute ml-10 w-[400px] '>
                        <h2 className='text-2xl font-bold -ml-72 mb-9 uppercase'>Phase 02</h2>
                        <p className='text-base text-justify'>Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.</p>
                    </div>
                </div>

                {/* phase 3 */}

                <div className='absolute top-[96px] mt-[465px] flex'>
                    <div className='absolute right-12 w-[400px]'>
                        <h2 className='text-2xl font-bold ml-72 mb-9 uppercase'>Phase 03</h2>
                        <p className='text-base text-justify'>Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.</p>
                    </div>
                    <div className='rightUnicon absolute ml-10'>
                        <p className='font-bold text-[28px] uppercase px-[66px] py-[55px]'>Mar 2023</p>
                    </div>
                </div>

                {/* phase 4 */}

                <div className='absolute flex mt-[788px]'>
                    <div className='leftUnicon absolute right-12'>
                        <p className='font-bold text-[28px] uppercase px-[66px] py-[55px]'>Apr 2023</p>
                    </div>
                    <div className='absolute ml-10 w-[400px] '>
                        <h2 className='text-2xl font-bold -ml-72 mb-9 uppercase'>Phase 04</h2>
                        <p className='text-base text-justify'>Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.</p>
                    </div>
                </div>

                {/* phase 5 */}

                <div className='absolute top-[96px] mt-[930px] flex'>
                    <div className='absolute right-12 w-[400px]'>
                        <h2 className='text-2xl font-bold ml-72 mb-9 uppercase'>Phase 05</h2>
                        <p className='text-base text-justify'>Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.</p>
                    </div>
                    <div className='rightUnicon absolute ml-10'>
                        <p className='font-bold text-[28px] uppercase px-[66px] py-[55px]'>May 2023</p>
                    </div>
                </div>

                {/* phase 6 */}

                <div className='absolute flex mt-[1252px]'>
                    <div className='leftUnicon absolute right-12'>
                        <p className='font-bold text-[28px] uppercase px-[66px] py-[55px]'>Jun 2023</p>
                    </div>
                    <div className='absolute ml-10 w-[400px] '>
                        <h2 className='text-2xl font-bold -ml-72 mb-9 uppercase'>Phase 06</h2>
                        <p className='text-base text-justify'>Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LybellRoadmap;