import styled from "styled-components";

export const FilmesLouyt = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinhaFilmes = styled.div`
  transition: all ease 0.5s;
  margin-left: ${(props) => props.margemEsquerda};
  width: ${(props) => props.largura};
`;

export const AbsolutePontos = styled.span`
  position: absolute;
  z-index: 3;
  top: 15px;
  left: 20px;
  transition: all ease 0.2s;
  transform: scale(0.9);

  @media (max-width: 760px) {
    display: none;
  }
`;

export const AbsoluteNome = styled.span`
  position: absolute;
  z-index: 3;
  bottom: -2px;
  left: 0;
  right: 0;
  transform: scale(0.9);
  padding: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #fff;
  transition: all ease 0.2s;
  border-left: solid 1px #c3c3c3;
  border-right: solid 1px #c3c3c3;
  border-bottom: solid 1px #c3c3c3;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  word-wrap: none;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const Imagem = styled.img`
  min-width: 230px;
  min-height: 120px;
  width: auto;
  height: auto;
  border-radius: 4px;
  position: relative;
  transform: scale(0.9);
  transition: all ease 0.2s;

  @media (max-width: 760px) {
    transform: scale(1);
    border-radius: 0;
  }
`;

export const ItemFilme = styled.div`
  display: inline-block;
  width: 300px;
  cursor: pointer;
  position: relative;

  &:hover ${AbsolutePontos} {
    transform: scale(1);
  }

  &:hover ${AbsoluteNome} {
    transform: scale(1);
  }

  &:hover ${Imagem} {
    transform: scale(1);
  }
`;

export const SpanProgress = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border: solid 2px #ffbf00;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  background-color: #ffbf0099;
  position: relative;

  @media (max-width: 760px) {
    border: none;
    border-radius: none;
    background-color: inherit;
    flex-direction: row;
    align-items: left;
    justify-content: left;
    gap: 5px;
    padding: 0px;
  }
`;

export const SmallProgress = styled.small`
  color: #46d369;

  @media (max-width: 760px) {
    font-size: 1.2rem;
  }
`;

export const SpanPontos = styled.span`
  position: relative;
  font-size: 1.2rem;
  color: #fff;

  @media (max-width: 760px) {
    font-size: 1.5rem;
  }
`;

export const AreaLinha = styled.div`
  overflow-x: hidden;
  padding-left: 20px;
  position: relative;
  margin: 20px 0 0 0;
`;

export const BotaoEsquerda = styled.button`
  position: absolute;
  left: 0;
  margin-top: 80px;
  border: solid 2px #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  z-index: 5;
  background: rgba(255, 255, 255);
  color: #000;
  cursor: pointer;
  transition: all ease 0.2s;

  & svg {
    transition: all ease 0.2s;
  }

  &:hover svg {
    font-size: 30px;
  }

  &:hover {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 760px) {
    margin-top: 0;
    top: 0;
    bottom: 0;
    width: auto;
    height: auto;
    border-radius: 0;
    background: rgba(255, 255, 255, 0.8);

    &:hover {
      width: auto;
      height: auto;
    }
  }
`;

export const BotaoDireita = styled.button`
  position: absolute;
  right: 0;
  margin-top: 80px;
  border: solid 2px #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  z-index: 5;
  background: rgba(255, 255, 255);
  color: #000;
  cursor: pointer;
  transition: all ease 0.2s;

  & svg {
    transition: all ease 0.2s;
  }

  &:hover svg {
    font-size: 30px;
  }

  &:hover {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 760px) {
    margin-top: 0;
    top: 0;
    bottom: 0;
    width: auto;
    height: auto;
    border-radius: 0;
    background: rgba(255, 255, 255, 0.8);

    &:hover {
      width: auto;
      height: auto;
    }
  }
`;

export const Tipo = styled.div`
  margin-left: 20px;
  font-size: 1.2rem;
  display: inline-block;
  border-bottom: solid 1px #c3c3c3;
  width: 100%;
`;

export const FundoModal = styled.div`
  height: 500px;
  width: 800px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 1em #c3c3c3;
  display: flex;
  position: relative;

  @media (max-width: 760px) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
  }
`;

export const ImagemModal = styled.img`
  border-radius: 5px 0 0 5px;
  max-width: 500px;
  max-height: 500px;
  width: auto;
  height: auto;
  background-color: #fff;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const Detalhes = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const Nome = styled.h1`
  font-size: 30px;
  font-weight: 900;
  text-align: left;
  padding: 0 0 0 10px;

  & span {
    font-weight: 300;
  }

  @media (max-width: 760px) {
    font-size: 1.8rem;
    font-weight: 900;
  }
`;

export const Sinopse = styled.section`
  text-align: left;
  position: relative;
  line-height: 1.4;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 10px;

  & p {
    text-align: justify;
  }

  & {
    ::-webkit-scrollbar-track {
      background-color: #f4f4f4;
    }
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      background: #000;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to top, #000, #c4c4c4);
    }
  }

  @media (max-width: 760px) {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

export const FecharModal = styled.div`
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 50%;
  background: #c1c1c1;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: absolute;
  top: 3px;
  right: 3px;
  cursor: pointer;

  &:hover {
    background: #d3d3d3;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const FecharModalMobile = styled.button`
  display: none;

  @media (max-width: 760px) {
    position: fixed;
    bottom: 5px;
    width: 100vw;
    background: #c3c3c3;
    z-index: 20;
    display: block;
    font-size: 1.5rem;
    padding: 15px;
    border: solid 1px rgb(92, 92, 92);
    color: #fff;
  }
`;

export const Ul = styled.ul`
  margin-bottom: 20px;
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & li {
    margin-right: 20px;
  }
`;

export const Li = styled.li`
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 68px;
`;

export const DivProgrees = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 141px;
  height: 68px;
  gap: 10px;

  @media (max-width: 760px) {
    justify-content: left;
    gap: 5px;
    width: auto;
  }
`;

export const Span = styled.span`
  display: inline-block;
  text-align: left;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const CoberturaBrancaMobile = styled.div`
  display: none;

  @media (max-width: 760px) {
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background: linear-gradient(to top, #fff, 80%, transparent);

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ImagemModalMobile = styled.div`
  display: none;

  @media (max-width: 760px) {
    width: 100vw;
    height: 100vh;
    background: blue;
    display: block;
    background-image: url(${(props) => props.cartaoFilme});
    background-size: cover;
    background-position: "center";
  }
`;
