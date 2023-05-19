import Navbar from '../Navbar'

function Header() {
    return (
        <header className='flex justify-between items-center h-20'>
            <div>shop</div>
            <Navbar />
            <div>Cart</div>
        </header>
    )
}

export default Header