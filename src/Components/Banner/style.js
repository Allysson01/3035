import styled from "styled-components";

export const BannerFilme = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: "center";
  background-image: url(${(props) => props.backdrop});
  position: relative;
  display: flex;
  color: #000; 
  
  @media (max-width: 760px) {
    background-image: url(${(props) => props.cartaoFilme});
  }
`;

export const EfeitoSombraDeBaixo = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, #fff 5%, transparent);
`;

export const EfeitoSombra = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.3);
`;

export const DivDireita = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const DivEsquerda = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 30px;
  z-index: 20;
`;

export const Imagem = styled.img`
  border-radius: 5px;
  max-width: 300px;
  max-height: 450px;
  width: auto;
  height: auto;
  background-color: #fff;
`;

export const Nome = styled.h1`
  font-size: 50px;
  font-weight: 900;

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

  @media (max-width: 760px) {
    font-size: 1rem;
    line-height: 1.4;
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

export const SpanProgress = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border: solid 2px #ffbf00;
  border-radius: 50%;
  text-align: center;
  background-color: #ffbf0063;
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

export const BotaoPlay = styled.div`
  display: inline-block;
  font-size: 20px;
  padding: 12px 25px;
  text-decoration: none;
  margin-right: 10px;
  opacity: 1;
  transition: all ease 0.2s;
  background-color: #fff;
  color: #010101;
  cursor: pointer;

  &:hover {
    background-color: #808080;
    color: #fff;
  }

  &:before {
    content: "Veja mais";
  }

  @media (max-width: 760px) {
    padding: 10px;
    border-radius: 3px;
    font-size: 1rem;
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

  @media (max-width: 760px) {
    font-size: 1.5rem;
  }
`;
