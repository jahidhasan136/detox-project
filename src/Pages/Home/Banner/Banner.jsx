import './Banner.css'

const Banner = () => {
    return (
        <div className='banner_vector'>
            <div className="text-center mx-auto mt-[80px] md:mt-28 z-50">
            <span className="text-sm md:text-lg font-medium px-5 py-2 border rounded-full capitalize">🔥 Powered by Graphchain tech</span>
            <h1 className="text-3xl md:text-6xl font-bold mt-4 md:mt-7 capitalize leading-[40px] md:leading-[90px]">Lybell gc is fast, <br /> scalable, robust, green and <br /> cross-chain</h1>
            <p className="mt-6 md:mt-9 text-base">By allowing a DAG of data istead of a rigid Blockchain we include all users in every <br /> transaction...? something about whatactually happens here</p>
            <button className="btn_custom mt-9 md:mt-10">Get Started</button>
        </div>
        </div>
    );
};

export default Banner;