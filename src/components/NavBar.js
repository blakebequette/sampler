import * as React from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../providers/ThemeProvider";

const links = [
  {to: '/', label: "Home"},
  {to: 'ui', label: 'UI'}
]
export default function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let theme = React.useContext(ThemeContext)

  let activeClassName = "underline";


  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: theme.background2,
    paddingTop: 12,
    paddingBottom: 8,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  }

  let activeStyle = {
      textDecoration: "none",
      textAlign: 'center',
      color: theme.textHeaders,
      fontSize: '1.5rem'
    };
  
  let inactiveStyle = {
    textAlign: 'center',
    color: theme.text,
    textDecoration: 'none',
    fontSize: '1.5rem'
  }

  return (
    <nav style={navStyle}>
       {links.map(link => {
        return <NavLink
            to={link.to}
            style={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            {link.label}
        </NavLink> 
       })}
    </nav>
  );
}
