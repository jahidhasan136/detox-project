import './Token.css'

const Token = () => {
    return (
        <div className="mt-[139px] container mx-auto max-w-[1320px] token">
            <div className="flex items-center rounded-[20px] py-[86px] gap-[120px] justify-center">
                <div className="w-2/5">
                    <h2 className="text-5xl font-bold mb-8">Token Sale</h2>
                    <p className="text-lg mb-[30px]">Etiam imperdiet porttitor nisi, vitae maximus nisl porta id. Etiam ut nunc eget ligula ornare dignissim ut id mauris. Curabitur tristique eros id orci scelerisqu honcus a in metus. Aliquam erat volutpat. Duis et enim vel turpis dictum consectetur in id tortor. Mauris pulvinar eget.</p>
                    <p className="text-lg mb-[60px]">Mauris vel tortor sollicitudin, suscipit augue ut, aliquam erat. Sed varius leo id augue tempus ultricies. Integer in sapien mattis.</p>
                    <button className="btn_custom">Token-sale Document</button>
                </div>
                <ul className="grid gap-8">
                    <li className="capitalize list-disc text-lg">Overhead token distribution</li>
                    <li className="capitalize list-disc text-lg">supporting blockchain projects</li>
                    <li className="capitalize list-disc text-lg">network growth marketing stategies</li>
                    <li className="capitalize list-disc text-lg">suspendisse erat risus scelerisque</li>
                    <li className="capitalize list-disc text-lg">nam blandit fringilla tincidunt</li>
                </ul>
            </div>
        </div>
    );
};

export default Token;