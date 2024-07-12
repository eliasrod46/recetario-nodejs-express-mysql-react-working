import "./NavBar.css";
import { NavLink as NavLinkReactRouter } from "react-router-dom";

// vitaminando el navlink para agregarle funcionalidades
export const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkReactRouter
      {...props}
      className={({ isActive }) => (isActive ? "is-active" : undefined)}
      to={to}
    >
      {children}
    </NavLinkReactRouter>
  );
};
