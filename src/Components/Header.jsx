import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavList from "./NavList";

// Components

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img
          src={require("../Assets/mainlogo.PNG")}
          alt="Store Logo"
          style={{ width: "200px" }}
        />
      </NavLink>
      <NavList />
    </MainHeader>
  );
};

export default Header;
