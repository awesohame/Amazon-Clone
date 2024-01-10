import amazon from '../assets/amazon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCaretDown, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <div className="bg-[#131921] h-[8vh] w-[100%] flex items-center justify-evenly text-[#fff] sticky top-0 z-50">
            <img src={amazon} alt="" className='w-24 mx-2' />

            <div className='flex items-center mx-2'>
                <FontAwesomeIcon icon={faLocationDot} className='m-2' />
                <div className='text-[14px]/[14px]'>
                    <p className='font-thin'>Delivering to Mumbai 420069</p>
                    <p className='font-bold'>Update location</p>
                </div>
            </div>

            <div className='w-1/2 h-[70%] rounded-md text-black flex items-center'>
                <div className='h-full w-[7%] bg-slate-400 text-[13px]/[13px] p-2 rounded-l-md'>
                    <select name="All" className='h-full w-full bg-slate-400 rounded-l-md'>
                        <option value="All">All</option>
                        <option value="Devices">Devices</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Fresh">Fresh</option>
                        <option value="Pharmacy">Pharmacy</option>
                        <option value="Audiobooks">Audiobooks</option>
                    </select>
                </div>
                <div className='h-full w-[86%] text-[15px]/[15px]'>
                    <form className='h-full w-full'>
                        <input className='h-full w-full px-2' type="text" placeholder='Search Amazon Clone' />
                    </form>
                </div>
                <div className='flex items-center justify-center bg-amber-400 h-full w-[7%] rounded-r-md'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>

            <div className='mx-2 flex items-center'>
                <p className='font-semibold text-[15px] mr-2'>Lang</p>
                <FontAwesomeIcon icon={faCaretDown} />
            </div>

            <div className='mx-2'>
                <p className='text-[13px]/[13px]'>Hello, User</p>
                <div className='flex'>
                    <p className='text-[14px]/[14px] font-bold mr-2'>Accounts & lists</p>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
            </div>

            <div className='mx-2'>
                <p className='text-[13px]/[13px]'>Returns</p>
                <p className='text-[14px]/[14px] font-bold'>& Orders</p>
            </div>

            <div className='mx-2 flex items-center'>
                <FontAwesomeIcon icon={faCartShopping} className='h-8 mr-2' />
                <p className='text-[16px]/[16px] font-bold'>Cart</p>
            </div>
        </div>
    )
}