import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

// Here flex: 1 divides the Navbar in Portions 33.33%.
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.span`
  border: 0.5px solid lightgray;
  border-radius: 15px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 3px;
`;

const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  margin-left: 25px;
  font-size: 14px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shopper Store.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
