import styled from "styled-components";

export const CarregamentoLayout = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #1c222f;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const CarregamentoBanner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #1c222f;
  min-height: 100vh;
`;

export const CarregamentoListaFilmes = styled.div`
  background-size: cover;
  background-position: "center";
  background-color: #1c222f;
  display: flex;
  justify-content: space-around;
  padding: 20px;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const DivDireita = styled.div`
  width: 40%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 760px) {
    display: none;
  }
`;

export const DivEsquerda = styled.div`
  flex: 1;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 30px;
  gap: 10px;

  @media (max-width: 760px) {
    padding: 10px;
    gap: 5px;

    align-items: center;

    &::after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #e50914;
      border-color: #73050a transparent #73050a transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const ItemCartaoImg = styled.div`
  border-radius: 5px;
  width: 300px;
  height: 450px;
  background: linear-gradient(100deg, #6c6c6d, #e8ebee, #6c6c6d);
  background-size: 300% 300%;
  animation: colors 2s ease infinite;

  @keyframes colors {
    0% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }
`;

export const ItemTexto = styled.div`
  border-radius: 2px;
  width: 300px;
  height: 15px;
  background: linear-gradient(100deg, #6c6c6d, #e8ebee, #6c6c6d);
  background-size: 300% 300%;
  animation: colors 2s ease infinite;

  @keyframes colors {
    0% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const ItemOpcoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const ItemAvaliacaoTexto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 10px;
  margin-left: 15px;
`;

export const ItemFilme = styled.div`
  display: inline-block;
  width: 230px;
  height: 120px;
  border-radius: 4px;
  cursor: pointer;
  background: linear-gradient(100deg, #6c6c6d, #e8ebee, #6c6c6d);
  background-size: 300% 300%;
  animation: colors 0.8s ease infinite;

  @keyframes colors {
    0% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }
`;
