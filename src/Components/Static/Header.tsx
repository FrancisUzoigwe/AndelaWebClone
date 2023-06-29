import React, { useState } from "react";
import styled from "styled-components";
import img from "../../Assets/LogoWhite.png";
import GlobalButton from "../reUse/GlobalButton";
import { FaAngleDown } from "react-icons/fa";
import img2 from "../../Assets/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  const [scroll, setScroll] = useState<boolean>(false);

  const onScroll = () => {
    if (window.scrollY >= 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", onScroll);

  return (
    <div>
      {scroll ? (
        <Container bg="#21453F">
          <Main>
            <Logo src={img2} />
            <NavHolder>
              <Nav to="/page1">For Technology Experts</Nav>
              <Nav to="">Business</Nav>
              <Nav to="">Enterprise</Nav>
            </NavHolder>
            <ButtonHolder>
              <Nav to="">Apply for Jobs</Nav>
              <GlobalButton
                width="130px"
                height="35px"
                brad="20px"
                bg="#56c870"
                color="white"
                title="Hire Talent"
              />
              <Nav1 onMouseEnter={onHover} >
                Login <Icon />
              </Nav1>
              {hover ? (
                <Drop onMouseLeave={onHover}>
                  <T>Client Login</T>
                  <T>Talent Login</T>
                </Drop>
              ) : null}
            </ButtonHolder>
          </Main>
        </Container>
      ) : (
        <Container bg="transperent">
          <Main>
            <Logo src={img} />
            <NavHolder>
              <Nav to="/page1">For Technology Experts</Nav>
              <Nav to="">Business</Nav>
              <Nav to="">Enterprise</Nav>
            </NavHolder>
            <ButtonHolder>
              <Nav to="">Apply for Jobs</Nav>
              <GlobalButton
                width="130px"
                height="35px"
                brad="20px"
                bg="#56c870"
                title="Hire Talent"
                color="black"
              />
              <Nav1 onMouseEnter={onHover}>
                Login <Icon />
              </Nav1>
              {hover ? (
                <Drop onMouseLeave={onHover}>
                  <T>Client Login</T>
                  <T>Talent Login</T>
                </Drop>
              ) : null}
            </ButtonHolder>
          </Main>
        </Container>
      )}
    </div>
  );
};

export default Header;

const T = styled.div`
  color: black;
  margin-top: 5px;
  margin-left: 5px;
  transition: all 350ms;

  :hover {
    background: #393939;
    color: white;
    cursor: pointer;
  }
`;

const Icon = styled(FaAngleDown)`
  color: white;
  margin-top: 7px;
`;
const Drop = styled.div`
  transition: all 450ms;
  position: absolute;
  width: 120px;
  height: 60px;
  cursor: pointer;
  background-color: white;
  margin-left: 290px;
  margin-top: 90px;
`;

const Nav1 = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
`;
const Nav = styled(Link)`
  text-decoration: none;
  color: white;
`;

const NavHolder = styled.div`
  display: flex;
  width: 450px;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 200px;
`;
const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div<{ bg: string }>`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${({ bg }) => bg};
  position: absolute;
  position: fixed;
  top: 60px;
  z-index: 10;
  text-decoration: none;
  transition: all 350ms;
`;
