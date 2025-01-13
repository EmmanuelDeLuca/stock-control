import styled from "styled-components";

export const DivCadastro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 0 15px;
  width: 100%;
`;

export const CardCadastro = styled.div`
  background-color: white;
  padding: 20px 40px;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;

export const TitleCadastro = styled.h2`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333;
`;

export const InputCadastro = styled.input`
  display: block;
  border-radius: 4px;
  width: 90%;
  height: 35px;
  margin-bottom: 15px;
  border: 2px solid #ccc;
  padding: 0 10px;
  font-size: 1rem;
  &:focus {
    border-color: #324B4B;
    outline: none;
  }
`;

export const LabelCadastro = styled.label`
  font-weight: 500;
  display: block;
  padding-bottom: 5px;
  color: #555;
`;

export const SelectCadastro = styled.select`
  display: block;
  border-radius: 4px;
  width: 90%;
  height: 35px;
  margin-bottom: 15px;
  border: 2px solid #ccc;
  padding: 0 10px;
  font-size: 1rem;
  &:focus {
    border-color: #324B4B;
    outline: none;
  }
`;

export const TextCadastro = styled.textarea`
  display: block;
  border-radius: 4px;
  width: 90%;
  height: 120px;
  margin-bottom: 15px;
  border: 2px solid #ccc;
  padding: 10px;
  font-size: 1rem;
  &:focus {
    border-color: #324B4B;
    outline: none;
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonCadastro = styled.button`
  width: 250px;
  height: 45px;
  border-radius: 5px;
  color: white;
  background-color: #324B4B;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #2a3f3f;
  }
  &:active {
    background-color: #1f2e2e;
  }
`;
