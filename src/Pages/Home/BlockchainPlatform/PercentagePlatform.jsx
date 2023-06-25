

const PercentagePlatform = () => {
    return (
        <div className="mt-12 md:flex gap-11 justify-center">
            <div className="flex gap-11">
                <div className="w-[410px] bg-[#ffffff1a] rounded-lg">
                    <p className="flex items-center px-10 py-8 h-[100px]"><span className="text-5xl font-bold text_color">4.6+</span> <span className="text-2xl font-medium">Blockchain</span></p>
                </div>
                <div className="w-[410px] bg-[#ffffff1a] rounded-lg">
                    <p className="flex items-center px-10 py-8 h-[100px]"><span className="text-5xl font-bold text_color">1700+</span> <span className="text-2xl font-medium">Visa</span></p>
                </div>
            </div>
            <div className="w-[410px] bg-[#ffffff1a] rounded-lg">
                <p className="flex items-center px-10 py-8 h-[100px]"><span className="text-5xl font-bold text_color">07+</span> <span className="text-2xl font-medium">Gigawatts</span></p>
            </div>
        </div>
    );
};

export default PercentagePlatform;