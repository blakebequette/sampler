import * as React from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../providers/ThemeProvider";

export default function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let theme = React.useContext(ThemeContext)

  let activeClassName = "underline";


  const navStyle = {
    display: 'flex',
    backgroundColor: theme.background2,
    paddingTop: 10,
    paddingBottom: 10,
  }
  const linkDivStyle = {
    flex: 1,
    textAlign: 'center'
  } 
  let activeStyle = {
      textDecoration: "underline",
      flex: 1,
      color: theme.accent,
    };

  return (
    <nav style={navStyle}>
      <div style={linkDivStyle}>
        <NavLink
          to="ui"
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
        >
          UI
        </NavLink>
      </div>
      <div style={linkDivStyle}>
        <NavLink
          to="Widgets"
          className={({ isActive }) =>
            isActive ? activeClassName : undefined
          }
        >
          Widgets
        </NavLink>
        </div>
      <div style={linkDivStyle}>
        <NavLink to="Network">
          {({ isActive }) => (
            <span
              className={
                isActive ? activeClassName : undefined
              }
            >
              Network
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}
