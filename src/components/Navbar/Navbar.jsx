import React from "react";
import {Link} from "react-router-dom";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  return (
    <div data-cy="navbar" style={{display:"flex",justifyContent:"space-between"}}>
     <div> <Link to="#" data-cy="navbar-home-link">Logo</Link></div>
     <div>
     <span data-cy="navbar-cart-items-count">count:0</span> &nbsp;
      <button data-cy="navbar-login-logout-button">Login</button>
     </div>
    </div>
  );
};

export default Navbar;
