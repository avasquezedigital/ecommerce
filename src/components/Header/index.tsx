import Navbar from '../Navbar'
import AccountCart from './AccountCart/AccountCart';

function Header() {
    return (
        <header className='flex justify-between items-center fixed z-50 h-24 w-full top-0 px-10 left-0 text-slate-400 font-regular text-sm bg-slate-900 border-b-2 border-slate-700/20 drop-shadow-2xl drop'>
            <h1 className='font-bold text-2xl text-slate-100'>Shopi</h1>
            <Navbar />
            <AccountCart />
        </header>
    )
}

export default Header