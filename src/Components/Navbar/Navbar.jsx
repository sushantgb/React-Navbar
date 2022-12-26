import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const activeClass = ({isActive}) => ((isActive ? "active-class" : "links"))
  return (
    <>
      {/* earlier we had Link but Navlink also give possibility to add additional css when loading the page for active class - exact is used so that style is implemented only on the active link however, this activeClassName feature is depreciated so we can use callback function
      <NavLink exact activeClassName='active-class' to="/" className="links">Home</NavLink>
      */}
      <nav className="navigator">
        <div className="site-identity">
        <NavLink className="links branding" to='/'>
          <span className="title">Blaster</span>
          <span className="profession">Rescue Rangers</span>
        </NavLink>
        </div>
        <div className="site-links">
        <NavLink exact to="/" className={activeClass}>Home</NavLink>
        <NavLink exact to="/about" className={activeClass}>About</NavLink>
        <NavLink exact to="/contact" className={activeClass}>Contact</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
