import logo from '../../../assets/logo.png'
import { IoIosArrowDown } from 'react-icons/io';
import ActiveLink from '../../../components/ActiveLink/ActiveLink';
import { PiSquaresFour } from 'react-icons/pi';


//IoIosArrowDown
const Navbar = () => {
    return (
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
            <div className='bg-[#EB5934] p-3 rounded-full'>
                <PiSquaresFour className='text-4xl'></PiSquaresFour>
            </div>
        </div>
    );
};

export default Navbar;