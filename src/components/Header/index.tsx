import Navbar from '../Navbar'

function Header() {
    return (
        <header className='flex justify-between items-center fixed z-10 h-24 w-full top-0 px-10 left-0 text-slate-400 font-regular text-sm bg-slate-900 border-b-2 border-slate-700/20 drop-shadow-2xl drop'>
            <h1 className='font-bold text-2xl text-slate-100'>Shopi</h1>
            <Navbar />
            <div className='flex flex-row gap-2 items-center'>
                <span className='w-8 h-8 bg-slate-400 rounded-full text-slate-800 grid place-content-center drop-shadow-xl'>A</span>
                <span className='w-8 h-8 bg-lime-400 rounded-full text-slate-800 grid place-content-center drop-shadow-xl'>C</span>
            </div>
        </header>
    )
}

export default Header