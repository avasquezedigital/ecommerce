import { useState } from "react";
import Link from "./Link"

function Navbar(): JSX.Element {
  const defaultMenu: NavItem[] = [
    {
      to: "/",
      text: "Inicio",
    },
    {
      to: "/categories",
      text: "Categories",
    },
    {
      to: "/all",
      text: "All",
    },
    {
      to: "/clothes",
      text: "Clothes",
    },
    {
      to: "/electronics",
      text: "Electronics",
    },
    {
      to: "/fornitures",
      text: "Fornitures",
    },
    {
      to: "/toys",
      text: "Toys",
    },
    {
      to: "/others",
      text: "Others",
    }
  ];
  const [menu, setMenu] = useState<NavItem[]>(defaultMenu);

  return (
    <nav className="flex items-center">
      <ul className='flex gap-5 items-center'>
        {
          menu.map(({ to, text}: NavItem) => (
            <li key={to} className={`relative`} >
              <Link
                to={to}
                text={text} />
            </li>
          ))
        }

      </ul>
    </nav>
  )
}

export default Navbar