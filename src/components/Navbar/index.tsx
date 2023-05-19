import { menuItems } from "../../utils/menu"
import Link from "./Link"

function Navbar(): JSX.Element {
  return (
    <nav className="flex items-center">
      <ul className='flex gap-5 items-center'>
        {
          menuItems.map(({ to, text, state, classname }: NavItem) => (
            <li key={to}>
              <Link
                to={to}
                text={text}
                state={state}
                classname={{ default: classname.default, active: classname.active }} />
            </li>
          ))
        }

      </ul>
    </nav>
  )
}

export default Navbar