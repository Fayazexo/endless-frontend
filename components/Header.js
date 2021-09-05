import React from "react";
import { IoInfinite } from "react-icons/io5";
import {
  ActionContainer,
  HeaderContainer,
  HeaderWrapper,
  IconContainer,
  LogoContainer,
  NavContainer,
  NavLinks,
  NavTexts,
  SignupButton,
  TextContainer,
} from "./styled-components/Header";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer>
          <IconContainer>
            <IoInfinite style={{ fontSize: 25 }} />
            <TextContainer>
              Endless <span>by</span> Nodecandy
            </TextContainer>
          </IconContainer>
        </LogoContainer>
        <NavContainer>
          <NavLinks href="/">
            <NavTexts className="hvr-underline-from-left">Home</NavTexts>
          </NavLinks>
          <NavLinks href="/support">
            <NavTexts className="hvr-underline-from-left">Support</NavTexts>
          </NavLinks>
          <NavLinks href="/contactus">
            <NavTexts className="hvr-underline-from-left">Contact Us</NavTexts>
          </NavLinks>
        </NavContainer>
        <ActionContainer>
          <SignupButton>Request Access</SignupButton>
        </ActionContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
