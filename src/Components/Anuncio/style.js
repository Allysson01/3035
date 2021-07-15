import styled from "styled-components";

export const AreaAnuncio = styled.section`
  height: 300px;
  background-color: #0a193c;
  padding: 20px;
  margin-top: 20px;

  @media (max-width: 760px) {
    height: 200px;
    padding: 10px;
  }
`;

export const AnuncioDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: inherit;
  border: 1px solid #c3c3c3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Barra = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex: 1;
  height: 100%;

  @media (max-width: 760px) {
    flex: none;
  }
`;

export const Texto = styled.p`
  text-align: center;
  color: #fff;
  font-size: 1.5rem;

  @media (max-width: 760px) {
    font-size: 1rem;
    word-wrap: break-word;
  }
`;

export const SaibaMaisIndicacao = styled.button`
  border: none;
  background-color: #fff;
  color: #000;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 50px;
  margin: 10px 0 10px 0;
  cursor: pointer;

  &:hover {
    background-color: #c0c0c0;
    color: #fff;
  }

  @media (max-width: 760px) {
    font-size: 1rem;
    padding: 10px;
  }
`;

export const Imagem = styled.img`
  max-width: 400px;
  max-height: 400px;
  width: auto;
  height: auto;

  @media (max-width: 760px) {
    display: none;
  }
`;
