import React from "react";
import * as S from "./styles";

export const Header: React.FC = () => {
  return (
    <S.StyledHeader>
      <div>
        <strong>StockControl</strong>
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
      </div>
    </S.StyledHeader>
  );
};
