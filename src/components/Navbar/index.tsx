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
      to: "/shoes",
      text: "Shoes",
    },
    {
      to: "/electronics",
      text: "Electronics",
    },
    {
      to: "/furniture",
      text: "Furnitures",
    },
    {
      to: "/toy",
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