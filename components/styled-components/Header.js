import Link from "next/link";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: #1d1d1d;
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #1d1d1d;
`;
export const LogoContainer = styled.div``;
export const NavContainer = styled.div``;
export const ActionContainer = styled.div``;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const TextContainer = styled.div`
  font-weight: 700;
  margin-left: 10px;
  margin-top: -2px;
  span {
    font-weight: 400;
  }
`;
export const NavLinks = styled(Link)``;
export const NavTexts = styled.a`
  margin: 0 20px;
  cursor: pointer;
  font-style: normal;
  height: 25px;
  color: #969696;

  &:hover {
    color: #ffffff;
  }
`;
export const SignupButton = styled.button`
  height: 55px;
  width: 150px;
  font-size: 15px;
  color: #ffffff;
  font-weight: 600;
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(
    35deg,
    rgba(153, 60, 149, 1) 0%,
    rgba(208, 49, 87, 1) 50%,
    rgba(250, 131, 70, 1) 100%
  );
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: transparent;
    border: 1px solid;
    transition: all 0.3s ease-in-out;
  }
`;
