import React from "react";
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin:"0 6px 6px",
    background:"blue",
    textDecoration: "none",
    color:"white",
}

function NavBar() {
    return (
        <div>
            <NavLink style={linkStyles} to="/">Home</NavLink>
            <NavLink style={linkStyles} to="/about">About</NavLink>
            <NavLink style={linkStyles} to="/employeeform">New Employee</NavLink>
        </div>
    );
}

export default NavBar;