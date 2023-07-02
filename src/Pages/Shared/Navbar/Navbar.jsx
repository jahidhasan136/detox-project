import logo from '../../../assets/logo.png'
import { IoIosArrowDown } from 'react-icons/io';
import { BsThreeDots } from 'react-icons/bs';
import ActiveLink from '../../../components/ActiveLink/ActiveLink';
import { PiSquaresFour } from 'react-icons/pi';
import { useEffect, useState } from 'react';


//IoIosArrowDown
const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [navState, setNavState] = useState(false);
    const onNavScroll = () => {
        if (window.scrollY > 40) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", onNavScroll);
    }, []);

    return (
        <div className={`w-full z-40 p-3 transition-all duration-200 ease-in-out ${navState ? 'bg-[#00000070] text-white' : 'rounded-lg bg-base-200 z-10 w-full'}`}>

            {/* Desktop version */}

            <div className='container mx-auto flex justify-between items-center p-6'>
                <div className='flex items-center gap-6'>
                    <img src={logo} alt="" />
                    <h2 className='text-[32px] font-bold'>DETOX</h2>
                </div>
                <div className="md:flex gap-11 text-lg hidden">
                    <div className="flex items-center gap-11 text-lg">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/features'>Features</ActiveLink>
                        <ActiveLink to='/research'>Research</ActiveLink>
                        <ActiveLink to='/about' className='flex gap-2'>About <IoIosArrowDown className='inline-block'></IoIosArrowDown></ActiveLink>
                        <ActiveLink to='/positions'>Positions</ActiveLink>
                    </div>
                </div>
                <button className='hidden md:flex btn_custom'>Contact Us</button>
                <div className='md:hidden text-2xl bg-[#EB5934] p-3 rounded-full' onClick={() => setOpen(!open)}>
                    <span>
                        {
                            open === true
                                ?
                                <BsThreeDots className='text-4xl'></BsThreeDots>
                                :
                                <PiSquaresFour className='text-4xl'></PiSquaresFour>
                        }
                    </span>
                </div>
            </div>

            {/* Mobile responsive */}

            <div className={`flex-col gap-5 absolute  bg-[#000000a5] top-0 px-8 items-center pt-10 w-64 h-screen text-white flex md:hidden transition-all duration-300 ease-in-out ${open ? 'left-0' : '-left-64'}`}>
                <div className='flex items-center gap-6'>
                    <img src={logo} alt="" />
                    <h2 className='text-[32px] font-bold'>DETOX</h2>
                </div>
                <div className="flex gap-11 text-lg md:hidden">
                    <div className="grid items-center gap-11 text-lg">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/features'>Features</ActiveLink>
                        <ActiveLink to='/research'>Research</ActiveLink>
                        <ActiveLink to='/about' className='flex gap-2'>About <IoIosArrowDown className='inline-block'></IoIosArrowDown></ActiveLink>
                        <ActiveLink to='/positions'>Positions</ActiveLink>
                    </div>
                </div>
                <button className='md:hidden btn_custom'>Contact Us</button>
            </div>

        </div>
    );
};

export default Navbar;