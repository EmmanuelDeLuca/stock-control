import React from "react";
import * as S from "./styles";

export const Header: React.FC = () => {
  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.Logo>StockControl</S.Logo>
        <S.DivWraper>
          <nav>
            <S.UlList>
              <S.LiList>
                <a href="/" aria-label="Cadastrar Produtos">
                  Cadastrar
                </a>
              </S.LiList>
              <S.LiList>
                <a href="/" aria-label="Produtos">
                  Produtos
                </a>
              </S.LiList>
              <S.LiList>
                <a href="/" aria-label="Dashboard">
                  Dashboard
                </a>
              </S.LiList>
            </S.UlList>
          </nav>
        </S.DivWraper>
      </S.Wrapper>
    </S.StyledHeader>
  );
};
