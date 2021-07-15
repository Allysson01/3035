import React, { useState, useEffect } from "react";
import {
  AreaDoMenu,
  Menu,
  Logo,
  AreaUsuario,
  Img,
  Nome,
  OpcoesUsuario,
  Div,
  Lista,
  AreaPesquisa,
  BotaoPequisa,
  EntradaPesquisa,
  AreaOpcoes,
  AreaMenuDispositivoMovel,
  MenuDispositivoMovel,
  Ul,
  Li,
} from "./style";
import Avatar from "../../image/avatar.png";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import LaunchRoundedIcon from "@material-ui/icons/LaunchRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import MenuIcon from "@material-ui/icons/Menu";
import TMDB from "../../tmdb";
import { sorteio } from "../../Api/funcoes";

const MenuNav = (props) => {
  const [rotacionar, setRotacionar] = useState(false);
  const [abrirMenu, setAbrirMenu] = useState(false);
  const [pesquisa, setPesquisa] = useState("");

  const corDeFundo = props.corDeFundo || "transparent";
  const corTextoMenu = corDeFundo !== "transparent" ? "#fff" : "#000";

  useEffect(() => {
    const filtro = async () => {
      if (pesquisa !== undefined && pesquisa.length > 1) {
        const resultado = await TMDB.pesquisaFilmes(pesquisa);

        if (resultado[0].filmes.results.length > 0) {
          let numeroSorteado = await sorteio(resultado);
          console.log(numeroSorteado);

          let FilmeEscolhido = resultado[0].filmes.results[numeroSorteado];
          if (FilmeEscolhido !== undefined) {
            let InformacoesFilme = await TMDB.buscaDetalhes(FilmeEscolhido.id);

            props.setDestaqueParaBanner(InformacoesFilme);
          }
          props.setListaDeFilmes(resultado);
          return;
        }

        const semDados = [{ filmes: { page: 1, results: [{ erro: true }] } }];

        props.setListaDeFilmes(semDados);
        return;
      }
    };

    filtro();
    // eslint-disable-next-line
  }, [pesquisa]);

  useEffect(() => {
    document
      .getElementById("modalOptions")
      .addEventListener("click", function (e) {
        // eslint-disable-next-line
        if (e.target == this) fechar(this.id);
      });

    const fechar = (id) => {
      setRotacionar((prevState) => !prevState);
      let modal = document.getElementById(id);
      modal.style.display = "none";
    };

    return () => {
      let modal = document.getElementById("modalOptions");
      modal.style.display = "none";
    };
  }, []);

  const open = (id) => {
    setRotacionar((prevState) => !prevState);
    let modal = document.getElementById(id);
    if (rotacionar) {
      modal.style.display = "none";
    }
    if (!rotacionar) {
      modal.style.display = "block";
    }
  };

  const abrirMenuDispositivoModel = () => {
    let menuLateral = document.getElementById("menuDispModvel");

    if (!abrirMenu) menuLateral.style.left = "0px";

    if (abrirMenu) menuLateral.style.left = "-300px";

    setAbrirMenu((prevState) => !prevState);
  };

  let mostrarPesquisa = false;
  const abrirPesquisa = () => {
    const areaPesquisa = document.querySelector("#areaPesquisa");
    const iconePesquisa = document.querySelector("#iconePesquisa");

    mostrarPesquisa = !mostrarPesquisa;
    if (mostrarPesquisa) {
      iconePesquisa.style.color =
        corTextoMenu === "#000" ? "#fff" : corTextoMenu;
      areaPesquisa.style.border = "solid 1px #fff";
      areaPesquisa.style.backgroundColor = "rgba(0,0,0,.8)";
      areaPesquisa.style.height = "30px";
      areaPesquisa.style.width = "300px";

      setTimeout(function () {
        areaPesquisa.removeAttribute("style");
      }, 5000);
      return;
    }
    
    areaPesquisa.removeAttribute("style");
    return;
  };

  return (
    <>
      <AreaMenuDispositivoMovel>
        <MenuIcon
          style={{ color: "#fff", fontSize: 50, padding: 10 }}
          onClick={abrirMenuDispositivoModel}
        />
        <Logo>3035Flix</Logo>
      </AreaMenuDispositivoMovel>

      <AreaDoMenu id="AreaDoMenu">
        <Menu corDeFundo={corDeFundo} corTextoMenu={corTextoMenu}>
          <Logo>3035Flix</Logo>
          <AreaOpcoes id="AreaOpcoes">
            <AreaPesquisa id="areaPesquisa">
              <BotaoPequisa onClick={abrirPesquisa}>
                <SearchRoundedIcon
                  id="iconePesquisa"
                  style={{
                    transition: "all ease .2s",
                    color: `${corTextoMenu}`,
                  }}
                />
              </BotaoPequisa>
              <EntradaPesquisa
                type="text"
                placeholder="Pesquise por: Titulos"
                onChange={(e) => setPesquisa(e.target.value)}
              ></EntradaPesquisa>
            </AreaPesquisa>

            <AreaUsuario onClick={() => open("modalOptions")}>
              <Img src={Avatar} alt="" />
              <Nome>Pedro Armado</Nome>
              <ArrowRightRoundedIcon
                style={{
                  transition: "all ease 0.6s",
                  transform: rotacionar ? "rotate(90deg)" : "rotate(0deg)",
                }}
                fontSize="large"
              />
            </AreaUsuario>
          </AreaOpcoes>
        </Menu>
      </AreaDoMenu>
      <OpcoesUsuario id="modalOptions">
        <Div>
          <Lista>
            <AccountCircleRoundedIcon />
            Pedro Armando
          </Lista>
          <Lista>
            <SettingsRoundedIcon />
            Configurações
          </Lista>
          <Lista>
            <LaunchRoundedIcon />
            Sair
          </Lista>
        </Div>
      </OpcoesUsuario>

      <MenuDispositivoMovel id="menuDispModvel">
        <Ul>
          <Li>
            <Logo>3035Flix</Logo>
          </Li>
          <Li>
            <Nome>Pedro Armado</Nome>
            <Img src={Avatar} alt="" />
          </Li>
          <Li>
            Configurações
            <SettingsRoundedIcon />
          </Li>
        </Ul>
      </MenuDispositivoMovel>
    </>
  );
};

export default MenuNav;
