import { NavLink } from "react-router";

const TopNav = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Test">Test</NavLink>
            <NavLink to="/Users">Users</NavLink>
        </nav>
    );
};

export default TopNav;