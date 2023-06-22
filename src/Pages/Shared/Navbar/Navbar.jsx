import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { IoIosArrowDown } from 'react-icons/io';

//IoIosArrowDown
const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center p-5'>
            <div className='flex items-center gap-6'>
                <img src={logo} alt="" />
                <h2 className='text-3xl font-bold'>DETOX</h2>
            </div>
            <div className="flex gap-11">
                <Link>Home</Link>
                <Link>Features</Link>
                <Link>Research</Link>
                <Link className='flex items-center gap-2'>About <IoIosArrowDown></IoIosArrowDown></Link>
                <Link>Positions</Link>
            </div>
            <button className='btn_custom'>Contact Us</button>
        </div>
    );
};

export default Navbar;