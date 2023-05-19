import { NavLink} from "react-router-dom";

function Link({ to, text, state, classname }: NavItem): JSX.Element {
    return (
        <NavLink
            to={`${to}`}
            className={`${!state ? classname.active : classname.default}`}
        >
            {text}
        </NavLink>
    )
}

export default Link