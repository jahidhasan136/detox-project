

const Footer = () => {
    return (
        <div className="container mx-auto">
            <div className="mt-[150px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            <div>
                <h2 className="text-2xl uppercase font-semibold mb-10">Ecosystem</h2>
                <p className="text-xl mb-3">Community</p>
                <p className="text-xl mb-3">Treasury</p>
                <p className="text-xl mb-3">Telemetry</p>
                <p className="text-xl mb-3">Brand Hub</p>
                <p className="text-xl mb-3">Jobs</p>
            </div>
            <div>
                <h2 className="text-2xl uppercase font-semibold mb-10">Features</h2>
                <p className="text-xl mb-3">Technology</p>
                <p className="text-xl mb-3">Token</p>
                <p className="text-xl mb-3">Para chains</p>
                <p className="text-xl mb-3">Staking</p>
                <p className="text-xl mb-3">XCM</p>
            </div>
            <div>
                <h2 className="text-2xl uppercase font-semibold mb-10">Development</h2>
                <p className="text-xl mb-3">Documentation</p>
                <p className="text-xl mb-3">Grants</p>
                <p className="text-xl mb-3">Bounties</p>
                <p className="text-xl mb-3">Academy</p>
                <p className="text-xl mb-3">Build</p>
            </div>
            <div>
                <h2 className="text-2xl uppercase font-semibold mb-10">About</h2>
                <p className="text-xl mb-3">Blog</p>
                <p className="text-xl mb-3">Roadmap</p>
                <p className="text-xl mb-3">Whitepaper</p>
                <p className="text-xl mb-3">FAQ</p>
                <p className="text-xl mb-3">Support</p>
                <p className="text-xl">Contact</p>
            </div>
            <div>
                <h2 className="text-2xl uppercase font-semibold mb-10">Newsletter</h2>
                <p>Subscribe to the newsletter to hear about Lybell updates and events</p>
                <button className="bg-[#F95B27] px-10 py-[21px] rounded-2xl text-white font-medium mt-[50px]">Subscribe</button>
            </div>
        </div>
        <div className="mt-[140px] border"></div>
        <div className="flex justify-between items-center mt-[45px] pb-10">
            <h2 className="text-[35px] font-bold">Lybell</h2>
            <p className="text-lg">&copy; 2023. All Rights Reserved</p>
        </div>
        </div>
    );
};

export default Footer;