import styled from "styled-components";

export const FullContainer = styled.div``;

export const TitleContainer = styled.div`
  margin: 100px auto;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 55px;
  font-family: "Inter", sans-serif;
`;
export const Subtexts = styled.h4`
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  font-family: "Inter", sans-serif;
  color: #969696;
`;
export const LoginComponent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;
export const EmailInput = styled.input`
  -webkit-appearance: none;
  height: 60px;
  width: 400px;
  font-size: 15px;
  font-weight: 600;
  background-color: #222222;
  border: none;
  color: #ffffff;
  text-align: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  ::placeholder,
  ::-webkit-input-placeholder {
    padding: 20px;
    text-align: center;
  }
  &:focus {
    outline: none;
  }
`;
export const PasswordInput = styled.input`
  -webkit-appearance: none;
  height: 60px;
  width: 400px;
  font-size: 15px;
  font-weight: 600;
  background-color: #222222;
  border: none;
  color: #ffffff;
  text-align: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  ::placeholder,
  ::-webkit-input-placeholder {
    padding: 20px;
    text-align: center;
  }
  &:focus {
    outline: none;
  }
`;
export const LoginButton = styled.button`
  height: 50px;
  width: 400px;
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
    box-shadow: teal;
  }
`;
