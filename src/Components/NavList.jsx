import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Icons
import { AiOutlineShoppingCart } from "react-icons/ai";

const Nav = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 2rem;
  }
`;
const NavList = () => {
  return (
    <Nav>
      <div>
        <ul className="navbar-lists">
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
          <NavLink to="/about" className="navbar-link">
            About
          </NavLink>
          <NavLink to="/products" className="navbar-link">
            Products
          </NavLink>
          <NavLink to="/contact" className="navbar-link">
            Contact
          </NavLink>
          <NavLink to="/cart" className="navbar-link">
            <AiOutlineShoppingCart />
          </NavLink>
        </ul>
      </div>
    </Nav>
  );
};

export default NavList;
