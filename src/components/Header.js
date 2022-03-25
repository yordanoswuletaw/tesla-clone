import React, { useState } from "react";
import styled from "styled-components";
//import { Menu } from "@mui/icons-material";
import { selectCar } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [openNavBar, setOpenNavBar] = useState(false);
  const cars = useSelector(selectCar);

  return (
    <Container>
      <a href="#">
        <img src="images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={(ev) => setOpenNavBar(true)}>
          <CustomBar len="17px" />
          <CustomBar len="13px" />
          <CustomBar len="9px" />
        </CustomMenu>
      </RightMenu>
      <BurgerNav show={openNavBar}>
        <CustomClose onClick={(ev) => setOpenNavBar(false)}>
          <span>X</span>
        </CustomClose>
        {cars &&
          cars.map((car, index) => (
            <li>
              <a key={index} href="#">
                {car}
              </a>
            </li>
          ))}
        <li>
          <a href="#">Exsiting Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Exsiting Inventory</a>
        </li>
        <li>
          <a href="#">Exsiting Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 14px;
    flex-wrap: nowrap;
  }
  @media (max-width: 764px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 6px;
  }
`;

const CustomMenu = styled.div`
  cursor: pointer;
  margin: 0 4px;
`;

const CustomBar = styled.div`
  border-bottom: 2.3px solid black;
  border-radius: 1.1px;
  width: ${(props) => props.len};
  margin-bottom: 3px;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 250px;
  list-style-type: none;
  text-align: start;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-align: end;
  cursor: pointer;
  span {
    padding: 10px 15px;
  }
  span:hover {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 10px 15px;
    border-radius: 50px;
  }
`;
