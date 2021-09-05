import React from "react";
import {
  EmailInput,
  FullContainer,
  LoginButton,
  LoginComponent,
  PasswordInput,
  Subtexts,
  Title,
  TitleContainer,
} from "./styled-components/LoginContent";

const LoginContent = () => {
  return (
    <FullContainer>
      <TitleContainer>
        <Title>Login to Your Account</Title>
        <Subtexts>
          Manage your contents through Endless, a Nodecandy product. <br />{" "}
          Publish your contents with ease.
        </Subtexts>
      </TitleContainer>
      <LoginComponent>
        <EmailInput type="name" placeholder="Enter your Email"></EmailInput>
        <PasswordInput
          type="password"
          placeholder="Enter your Password"
        ></PasswordInput>
        <LoginButton type="text">Proceed</LoginButton>
      </LoginComponent>
    </FullContainer>
  );
};

export default LoginContent;
