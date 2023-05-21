import { NavLink } from "react-router-dom";

function Link({ to, text }: NavItem): JSX.Element {

    const defaultClassname = `transition-all ease-in-out text-slate-400 relative after-content[''] after:absolute after:bottom after:top-8 after:right-1/2 after:translate-x-1/2 after:h-px after:w-0 after:opacity-100 after:bg-slate-200 after:transition-all after:ease-in-out`

    const activeClassname = `transition-all ease-in-out text-slate-100 font-semibold relative after-content[''] after:absolute after:bottom after:top-14 after:right-1/2 after:translate-x-1/2 after:h-px after:w-full after:opacity-100 after:bg-lime-400 after:transition-all after:ease-in-out`;

    return (
        <NavLink
            to={`${to}`}
            className={
                ({ isActive }) => isActive ? activeClassname : defaultClassname
            }
        >
            {text}
        </NavLink >
    )
}

export default Link