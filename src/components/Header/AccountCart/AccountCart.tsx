import Cart from "./Cart/Cart"
import { UserIcon } from '@heroicons/react/24/outline'

function AccountCart() {
    return (
        <div className='relative flex flex-row gap-2 items-center z-30'>
            <span className='w-8 h-8 cursor-pointer bg-slate-400 rounded-full text-slate-800 grid place-content-center drop-shadow-xl'>
                <UserIcon className="h-4 w-4 text-slate-800"/>
            </span>
            <Cart />
        </div>
    )
}

export default AccountCart