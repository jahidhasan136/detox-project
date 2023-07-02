import lineUnicon from '../../../assets/roadmap/lineUnicon.png'
import lineUnicornMobile from '../../../assets/roadmap/lineUnicornMobile.png'
import './LybellRoadmap.css'

const LybellRoadmap = () => {
    return (
        <div className='container mx-auto text-center mt-[61px] md:mt-[132px]'>
            <h2 className='text-2xl md:text-5xl font-bold mb-4 md:mb-8 md:leading-[65px]'>Lybell <br /> Launch Roadmap</h2>
            <p className='md:text-lg mb-[60px] md:w-1/2 mx-auto'>Maecenas condimentum bibendum efficitur. Phasellus leo orci, tincidunt at eagestas ut, ultricies sit amet libero. Suspendisse vel auctor quam, accumsan feugiat arcu. In a justo magna.</p>

            {/* desktop version */}

            <div className='hidden md:flex justify-center relative'>
                <img src={lineUnicon} alt="" />

                {/* phase 1 */}

                <div className='absolute top-[96px] flex'>
                    <div className='absolute right-12 w-[400px]'>
                        <h2 className='text-2xl font-bold ml-72 mb-9 uppercase'>Phase 01</h2>
                        <p className='text-base text-justify'>Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.</p>
                    </div>
                    <div className='rightUnicon absolute ml-10'>
                        <p className='font-bold text-[28px] uppercase px-[89px] pt-[25px] pb-[30px]'>Jan 2023</p>
                    </div>
                </div>

                {/* phase 2 */}

                <div className='absolute flex mt-[324px]'>
                    <div className='leftUnicon absolute right-10'>
                        <p className='font-bold text-[28px] uppercase pr-[95px] pl-[40px] pt-[25px] pb-[30px]'>Feb 2023</p>
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
                        <p className='font-bold text-[28px] uppercase px-[89px] pt-[25px] pb-[30px]'>Mar 2023</p>
                    </div>
                </div>

                {/* phase 4 */}

                <div className='absolute flex mt-[788px]'>
                    <div className='leftUnicon absolute right-10'>
                        <p className='font-bold text-[28px] uppercase pr-[95px] pl-[40px] pt-[25px] pb-[30px]'>Apr 2023</p>
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
                        <p className='font-bold text-[28px] uppercase px-[89px] pt-[25px] pb-[30px]'>May 2023</p>
                    </div>
                </div>

                {/* phase 6 */}

                <div className='absolute flex mt-[1252px]'>
                    <div className='leftUnicon absolute right-10'>
                        <p className='font-bold text-[28px] uppercase pr-[95px] pl-[40px] pt-[25px] pb-[30px]'>Jun 2023</p>
                    </div>
                    <div className='absolute ml-10 w-[400px] '>
                        <h2 className='text-2xl font-bold -ml-72 mb-9 uppercase'>Phase 06</h2>
                        <p className='text-base text-justify'>Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.</p>
                    </div>
                </div>
            </div>

            {/* mobile device responsive */}

            <div className='md:hidden flex justify-center relative'>
                <img src={lineUnicornMobile} alt="" />

                {/* phase 1 */}

                <div className='absolute top-[3px] flex'>
                    <div className='leftUnicon absolute -right-2'>
                        <p className='font-bold text-[10px] uppercase pr-[95px] pl-[40px] pt-[25px] pb-[30px]'>Jan 2023</p>
                    </div>
                    <div className='absolute ml-7 w-[160px]'>
                        <h2 className='text-base font-bold -ml-[90px] mb-2 uppercase'>Phase 01</h2>
                        <p className='text-[14px] text-justify'>Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.</p>
                    </div>
                </div>

                
                {/* phase 2 */}

                <div className='absolute flex mt-[183px]'>
                    <div className='leftUnicon absolute -right-2'>
                        <p className='font-bold text-[10px] uppercase pr-[95px] pl-[40px] pt-[25px] pb-[30px]'>Feb 2023</p>
                    </div>
                    <div className='absolute ml-7 w-[160px] '>
                        <h2 className='text-base font-bold -ml-[90px] mb-2 uppercase'>Phase 02</h2>
                        <p className='text-[14px] text-justify'>Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.</p>
                    </div>
                </div>

                {/* phase 3 */}

                <div className='absolute top-[96px] mt-[270px] flex'>
                    <div className='leftUnicon absolute -right-2'>
                        <p className='font-bold text-[10px] uppercase pr-[95px] pl-[40px] pt-[25px] pb-[30px]'>Mar 2023</p>
                    </div>
                    <div className='absolute ml-7 w-[160px] '>
                    <h2 className='text-base font-bold -ml-[90px] mb-4 uppercase'>Phase 03</h2>
                        <p className='text-[14px] text-justify'>Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.</p>
                    </div>
                </div>

                {/* phase 4 */}

                <div className='absolute flex mt-[558px]'>
                    <div className='leftUnicon absolute -right-2'>
                        <p className='font-bold text-[10px] uppercase pr-[95px] pl-[40px] pt-[25px] pb-[30px]'>Apr 2023</p>
                    </div>
                    <div className='absolute ml-7 w-[160px] '>
                    <h2 className='text-base font-bold -ml-[90px] mb-4 uppercase'>Phase 04</h2>
                        <p className='text-[14px] text-justify'>Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.</p>
                    </div>
                </div>

                {/* phase 5 */}

                <div className='absolute mt-[725px] flex'>
                    <div className='leftUnicon absolute -right-2'>
                        <p className='font-bold text-[10px] uppercase pr-[95px] pl-[40px] pt-[25px] pb-[30px]'>May 2023</p>
                    </div>
                    <div className='absolute ml-7 w-[160px] '>
                    <h2 className='text-base font-bold -ml-[90px] mb-4 uppercase'>Phase 05</h2>
                        <p className='text-[14px] text-justify'>Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.</p>
                    </div>
                </div>

                {/* phase 6 */}

                <div className='absolute flex mt-[908px]'>
                    <div className='leftUnicon absolute -right-2'>
                        <p className='font-bold text-[10px] uppercase pr-[95px] pl-[40px] pt-[25px] pb-[30px]'>Jun 2023</p>
                    </div>
                    <div className='absolute ml-7 w-[160px] '>
                    <h2 className='text-base font-bold -ml-[90px] mb-4 uppercase'>Phase 06</h2>
                        <p className='text-[14px] text-justify'>Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LybellRoadmap;