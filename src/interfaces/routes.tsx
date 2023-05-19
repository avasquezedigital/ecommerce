interface Route {
    path: string,
    element: JSX.Element,
    children?: Route[]
}

interface NavItem {
    to: string,
    text: string,
    state: boolean,
    classname: {
        default: string,
        active: string
    }
}