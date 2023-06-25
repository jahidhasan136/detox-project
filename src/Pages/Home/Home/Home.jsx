import ApplicationFocus from "../ApplicationFocus/ApplicationFocus";
import Banner from "../Banner/Banner";
import BlockchainPlatform from "../BlockchainPlatform/BlockchainPlatform";
import LybellFeatures from "../LybellFeatures/LybellFeatures";
import Token from "../Token/Token";
import Whitepaper from "../Whitepaper/Whitepaper";
import './Home.css'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BlockchainPlatform></BlockchainPlatform>
            <LybellFeatures></LybellFeatures>
            <Whitepaper></Whitepaper>
            <Token></Token>
            <ApplicationFocus></ApplicationFocus>
        </div>
    );
};

export default Home;