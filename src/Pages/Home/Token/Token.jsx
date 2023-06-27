import './Token.css'

const Token = () => {
    return (
        <div className="mt-[60px] md:mt-[139px] container mx-auto max-w-[342px] md:max-w-[1320px]">
            <div className="md:flex items-center rounded-2xl md:rounded-[20px] py-10 px-6 md:px-0 md:py-[86px] md:gap-[120px] justify-center token">
                <div className="md:w-2/5">
                    <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8">Token Sale</h2>
                    <p className="text-base md:text-lg mb-6 md:mb-[30px]">Etiam imperdiet porttitor nisi, vitae maximus nisl porta id. Etiam ut nunc eget ligula ornare dignissim ut id mauris. Curabitur tristique eros id orci scelerisqu honcus a in metus. Aliquam erat volutpat. Duis et enim vel turpis dictum consectetur in id tortor. Mauris pulvinar eget.</p>
                    <p className="text-lg mb-[60px]">Mauris vel tortor sollicitudin, suscipit augue ut, aliquam erat. Sed varius leo id augue tempus ultricies. Integer in sapien mattis.</p>
                    <button className="hidden md:flex btn_custom">Token-sale Document</button>
                </div>
                <ul className="grid gap-6 md:gap-8 p-5 md:p-0">
                    <li className="capitalize list-disc text-lg">Overhead token distribution</li>
                    <li className="capitalize list-disc text-lg">supporting blockchain projects</li>
                    <li className="capitalize list-disc text-lg">network growth marketing stategies</li>
                    <li className="capitalize list-disc text-lg">suspendisse erat risus scelerisque</li>
                    <li className="capitalize list-disc text-lg">nam blandit fringilla tincidunt</li>
                    <div>
                        <button className="md:hidden btn_custom">Token-sale Document</button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Token;