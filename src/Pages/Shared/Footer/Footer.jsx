import './Footer.css'

const Footer = () => {
    return (
        <div className='text-center md:text-start'>
            <div className="container mx-auto">
                <div className="mt-[60px] md:mt-[150px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                    <div>
                        <h2 className="text-xl md:text-2xl uppercase font-semibold mb-[30px] md:mb-10 text_color">Ecosystem</h2>
                        <p className="text-xl mb-3">Community</p>
                        <p className="text-xl mb-3">Treasury</p>
                        <p className="text-xl mb-3">Telemetry</p>
                        <p className="text-xl mb-3">Brand Hub</p>
                        <p className="text-xl mb-3">Jobs</p>
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl uppercase font-semibold mb-[30px] md:mb-10 text_color">Features</h2>
                        <p className="text-xl mb-3">Technology</p>
                        <p className="text-xl mb-3">Token</p>
                        <p className="text-xl mb-3">Para chains</p>
                        <p className="text-xl mb-3">Staking</p>
                        <p className="text-xl mb-3">XCM</p>
                    </div>
                    <div className='mt-[60px] md:mt-0'>
                        <h2 className="text-xl md:text-2xl uppercase font-semibold mb-[30px] md:mb-10 text_color">Development</h2>
                        <p className="text-xl mb-3">Documentation</p>
                        <p className="text-xl mb-3">Grants</p>
                        <p className="text-xl mb-3">Bounties</p>
                        <p className="text-xl mb-3">Academy</p>
                        <p className="text-xl mb-3">Build</p>
                    </div>
                    <div className='mt-[60px] md:mt-0'>
                        <h2 className="text-xl md:text-2xl uppercase font-semibold mb-[30px] md:mb-10 text_color">About</h2>
                        <p className="text-xl mb-3">Blog</p>
                        <p className="text-xl mb-3">Roadmap</p>
                        <p className="text-xl mb-3">Whitepaper</p>
                        <p className="text-xl mb-3">FAQ</p>
                        <p className="text-xl mb-3">Support</p>
                        <p className="text-xl">Contact</p>
                    </div>
                    <div className='mt-[60px] md:mt-0 ml-8 md:ml-0'>
                        <h2 className="text-xl md:text-2xl uppercase font-semibold mb-6 md:mb-10 text_color">Newsletter</h2>
                        <p className=''>Subscribe to the newsletter to hear about Lybell updates and events</p>
                        <button className="bg-[#F95B27] px-10 py-[21px] rounded-2xl text-white font-medium mt-[32px] md:mt-[50px]">Subscribe</button>
                    </div>
                </div>
                <div className="mt-10 md:mt-[140px] w-[342px] md:w-full mx-auto border_custom"></div>
                <div className="flex justify-between items-center mt-[24px] md:mt-[45px] pb-10">
                    <h2 className="text-[35px] font-bold hidden md:flex">Lybell</h2>
                    <p className="text-lg mx-auto md:mx-0">&copy; 2023. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;