const Navitem = (props) => {
    return(
        <li className="nav-item">{props.children}</li>

    )
}
const NavItemDropdown = (props) => {
    return(
        <li className="nav-item dropdown">{props.children}</li>
    )
}
export default Navitem
export {NavItemDropdown}