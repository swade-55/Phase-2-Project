import React from "react";
import { NavLink} from "react-router-dom"

const linkStyles = {
    width: "50px",
    padding: "8px",
    margin:"0 8px 8px",
    background:"grey",
    textDecoration: "none",
    color:"white",
}

function NavBar() {
    return (
        <div>
            <NavLink style={linkStyles} to="/">Home</NavLink>
            <NavLink style={linkStyles} to="/employeeform">New Employee</NavLink>
            <NavLink style={linkStyles} to="/about">About</NavLink>
            
        </div>
    );
}

export default NavBar;