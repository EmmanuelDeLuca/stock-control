import styled from "styled-components";
import producaoImage from "../../assets/images/producao.png";

export const StyledHeader = styled.header`
  background-color: #4a7b7b;
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1240px;
  margin: auto 0;
  padding: 0 2rem;
  height: 75px;
`;
export const Logo = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const ImgLog = styled.div`
  width: 45px;
  height: 45px;
  background-image: url(${producaoImage});
  background-size: cover;
`;
