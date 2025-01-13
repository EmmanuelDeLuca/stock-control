import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #4a7b7b;
  color: white;
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  margin: auto;
  padding: 0 3rem;
  height: 75px;
  box-sizing: border-box;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    justify-content: space-between;
  }
`;

export const Logo = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  margin-left: -1rem;
  flex-shrink: 0;
`;

export const DivWraper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

export const UlList = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

export const LiList = styled.li`
  cursor: pointer;
  list-style: none;

  a {
    text-decoration: none;
    color: white;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #d2d2d2;
  }

  a:focus {
    outline: 2px solid #d2d2d2;
  }
`;

