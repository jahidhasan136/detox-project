import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";

const Main = () => {
    return (
        <div className="bg-black text-white">
            <Helmet>
                <title>Home | Detox Site</title>
            </Helmet>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;