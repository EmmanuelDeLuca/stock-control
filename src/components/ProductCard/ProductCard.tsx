import React from "react";
import * as S from "./styles";

export const ProductCard: React.FC = () => {
  return (
    <S.DivCadastro>
      <S.CardCadastro>
        <S.TitleCadastro>Cadastrar Produtos</S.TitleCadastro>
        <form action="">
          <S.LabelCadastro htmlFor="nome">Nome *</S.LabelCadastro>
          <S.InputCadastro id="nome" type="text" placeholder="Nome do produto" required />

          <S.LabelCadastro htmlFor="codigo">Código *</S.LabelCadastro>
          <S.InputCadastro id="codigo" type="text" placeholder="Código do produto" required />

          <S.LabelCadastro htmlFor="categoria">Categoria *</S.LabelCadastro>
          <S.SelectCadastro id="categoria" required>
            <option value="">Selecione uma categoria</option>
            <option value="tecnologia">Eletrônicos</option>
            <option value="teste1">Roupas</option>
            <option value="teste2">Alimentos</option>
            <option value="teste3">Outros</option>
          </S.SelectCadastro>

          <S.LabelCadastro htmlFor="fornecedor">Fornecedor *</S.LabelCadastro>
          <S.SelectCadastro id="fornecedor" required>
            <option value="">Selecione um fornecedor</option>
            <option value="amazon">Amazon</option>
            <option value="mercadolivre">Mercado Livre</option>
            <option value="outros">Outros</option>
          </S.SelectCadastro>

          <S.LabelCadastro htmlFor="quantidade">Quantidade Inicial *</S.LabelCadastro>
          <S.InputCadastro id="quantidade" type="number" placeholder="Quantidade inicial" required />

          <S.LabelCadastro htmlFor="estoque-minimo">Estoque Mínimo *</S.LabelCadastro>
          <S.InputCadastro id="estoque-minimo" type="number" placeholder="Estoque mínimo" required />

          <S.LabelCadastro htmlFor="preco-custo">Preço de Custo *</S.LabelCadastro>
          <S.InputCadastro id="preco-custo" type="number" step="0.01" placeholder="Preço de custo" required />

          <S.LabelCadastro htmlFor="preco-venda">Preço de Venda *</S.LabelCadastro>
          <S.InputCadastro id="preco-venda" type="number" step="0.01" placeholder="Preço de venda" required />

          <S.LabelCadastro htmlFor="descricao">Descrição</S.LabelCadastro>
          <S.TextCadastro id="descricao" placeholder="Descreva o produto" />

          <S.DivButton>
            <S.ButtonCadastro type="submit">Cadastrar</S.ButtonCadastro>
          </S.DivButton>
        </form>
      </S.CardCadastro>
    </S.DivCadastro>
  );
};
