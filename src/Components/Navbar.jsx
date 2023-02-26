import { Badge} from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
// import Badge from "@mui/material/Badge";
// import MailIcon from "@mui/icons-material/Mail";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1; // 1 unit
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  /* text-align: center; */ 
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color:"gray",fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>E-Shop.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary" overlap="rectangular">
                <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;