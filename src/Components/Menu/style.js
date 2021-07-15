import styled from "styled-components";

export const AreaDoMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: transparent;
  padding: 5px 20px 5px 20px;
  z-index: 100;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const AreaMenuDispositivoMovel = styled.div`
  display: none;

  @media (max-width: 760px) {
    position: fixed;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    z-index: 100;
    font-size: 1.8rem;
    background-color: #010;
  }
`;

export const Menu = styled.div`
  flex: 1;
  background-color: ${(props) => props.corDeFundo};
  transition: all ease 0.6s;
  color: ${(props) => props.corTextoMenu};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 4px;
  position: relative;
`;

export const Logo = styled.div`
  color: ${(props) => props.corTextoMenu};
  letter-spacing: 0.5rem;
  cursor: pointer;
  height: 100%;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  position: relative;
  transition: all ease 0.6s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const AreaUsuario = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const Img = styled.img`
  max-width: 40px;
  max-height: 40px;
  height: auto;
  width: auto;
`;

export const Nome = styled.div`
  display: inline;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all ease 0.6s;
`;

export const OpcoesUsuario = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 5px 20px 5px 20px;
  z-index: 90;
  display: none;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  width: 200px;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  right: 50px;
  top: 90px;
  padding: 10px;
  color: #fff;
  border-radius: 4px;
`;

export const Lista = styled.div`
  flex: 1;
  border-bottom: solid 1px rgb(110 110 110 / 30%);
  display: flex;
  gap: 5px;
  width: 100%;
  padding: 15px 0 15px 10px;

  &:hover {
    background: rgb(145 145 145 / 30%);
  }
`;

export const AreaPesquisa = styled.div`
  width: 0px;
  height: 0px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 1s;
`;

export const BotaoPequisa = styled.button`
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  padding: 10px;
`;

export const EntradaPesquisa = styled.input`
  width: 90%;
  border: none;
  outline: none;
  background: transparent;
  color: #ffffff;
  padding: 5px;
  font-size: 15px;
`;

export const AreaOpcoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const MenuDispositivoMovel = styled.div`
  position: fixed;
  top: 0;
  left: -300px;
  bottom: 0;
  width: 300px;
  z-index: 90;
  background: #363636;
  transition: all 0.5s linear;
  padding-top: 60px;
`;

export const Ul = styled.ul`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;

  & li {
    margin-right: 20px;
  }
`;

export const Li = styled.li`
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: left;
  box-sizing: border-box;
  height: 70px;
  padding: 20px;
  border-bottom: 1px solid #c1c1c1;
  width: 100%;
  color: #fff;
  font-size: 1.2rem;
  gap: 10px;
`;
