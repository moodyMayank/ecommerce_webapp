import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
  <MainHeader>
    <NavLink to="/contact" >contact</NavLink>
    <NavLink to="/contact" >contact</NavLink>
    <NavLink to="/contact" >contact</NavLink>
    <NavLink to="/contact" >contact</NavLink>
  </MainHeader>
  )
}

const MainHeader = styled.header`
   display : flex;
   flex-direction : row;
   align-items : center;
   justify-content : space-between;
`;

export default Header;