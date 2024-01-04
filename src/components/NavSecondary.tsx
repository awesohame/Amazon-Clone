import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const navItems: string[] = [
    'Fresh',
    'Sell',
    'Mobile',
    'Electronics',
    'Computers',
    'Books',
    `Today's Deals`,
    'Customer Service',
    'Gift Ideas',
    'Fashion',
    'Amazon Pay'
]

export default function NavSecondary() {
    return (
        <div className="h-[5vh] w-[100%] bg-[#232f3e] text-[14px] text-white flex items-center">
            <div className='px-2 flex items-center font-bold'>
                <FontAwesomeIcon icon={faBars} />
                <p className='m-2'>All</p>
            </div>
            <ul className='flex items-center h-full'>
                {navItems.map((text, index) => (
                    <li className='px-3 font-semibold' key={index}>{text}</li>
                )
                )}
            </ul>
        </div>
    )
}