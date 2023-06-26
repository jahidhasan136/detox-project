

const PercentagePlatform = () => {
    return (
        <div className="mt-12 md:flex grid gap-6 md:gap-11 justify-center text-center">
            <div className="flex gap-11">
                <div className="w-[159px] md:w-[410px] bg-[#ffffff1a] rounded-lg">
                    <p className="md:flex grid place-content-center items-center px-10 py-8 h-[116px] md:h-[100px]"><span className="text-[32px] md:text-5xl font-bold text_color">4.6+</span> <span className="text-xl md:text-2xl font-medium">Blockchain</span></p>
                </div>
                <div className="w-[159px] md:w-[410px] bg-[#ffffff1a] rounded-lg">
                    <p className="md:flex grid place-content-center items-center px-10 py-8 h-[116px] md:h-[100px]"><span className="text-[32px] md:text-5xl font-bold text_color">1700+</span> <span className="text-xl md:text-2xl font-medium">Visa</span></p>
                </div>
            </div>
            <div className="w-[159px] md:w-[410px] bg-[#ffffff1a] rounded-lg mx-auto md:mx-0">
                <p className="md:flex grid place-content-center items-center px-10 py-8 h-[116px] md:h-[100px]"><span className="text-[32px] md:text-5xl font-bold text_color">07+</span> <span className="text-xl md:text-2xl font-medium">Gigawatts</span></p>
            </div>
        </div>
    );
};

export default PercentagePlatform;