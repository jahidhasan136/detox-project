import Banner from "../Banner/Banner";
import BlockchainPlatform from "../BlockchainPlatform/BlockchainPlatform";
import LybellFeatures from "../LybellFeatures/LybellFeatures";
import Whitepaper from "../Whitepaper/Whitepaper";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BlockchainPlatform></BlockchainPlatform>
            <LybellFeatures></LybellFeatures>
            <Whitepaper></Whitepaper>
        </div>
    );
};

export default Home;