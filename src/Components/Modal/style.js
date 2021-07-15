import styled from "styled-components";

export const Areamodal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 100;
  background: rgba(0,0,0,0.6);

  @media (max-width: 760px) {
  }
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 500px;
  border-radius: 4px;
  position: absolute;
  left: 25%;

  @media (max-width: 760px) {
    width: 0;
    height: 0;
    border-radius: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
