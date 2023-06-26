import ApplicationFocus from "../ApplicationFocus/ApplicationFocus";
import Banner from "../Banner/Banner";
import BlockchainPlatform from "../BlockchainPlatform/BlockchainPlatform";
import LybellFeatures from "../LybellFeatures/LybellFeatures";
import LybellRoadmap from "../LybellRoadmap/LybellRoadmap";
import Newsletter from "../Newsletter/Newsletter";
import Token from "../Token/Token";
import Whitepaper from "../Whitepaper/Whitepaper";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BlockchainPlatform></BlockchainPlatform>
            <LybellFeatures></LybellFeatures>
            {/* <Whitepaper></Whitepaper> */}
            {/* <Token></Token> */}
            {/* <LybellRoadmap></LybellRoadmap> */}
            {/* <ApplicationFocus></ApplicationFocus> */}
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;