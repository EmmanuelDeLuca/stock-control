import React from "react";
import * as S from "./styles";

export const Header: React.FC = () => {
  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.Logo>StockControl</S.Logo>
        <S.ImgLog></S.ImgLog>
        <ul>
          <li>
            <a href="/"> Cadastrar </a>
          </li>
          <li>
            <a href="/"> Produtos</a>
          </li>
          <li>
            <a href="/"> Dashboard</a>
          </li>
        </ul>
      </S.Wrapper>
    </S.StyledHeader>
  );
};
