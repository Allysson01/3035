import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { infomacoes } from "../../Api/funcoes";
import {
  ItemFilme,
  LinhaFilmes,
  SpanProgress,
  SmallProgress,
  AbsolutePontos,
  AbsoluteNome,
  SpanPontos,
  Imagem,
  AreaLinha,
  BotaoEsquerda,
  BotaoDireita,
  Tipo,
  FundoModal,
  ImagemModal,
  ImagemModalMobile,
  Detalhes,
  Nome,
  FecharModal,
  FecharModalMobile,
  Sinopse,
  CoberturaBrancaMobile,
} from "./style";
import Modal from "../Modal/index";

const TodosFilmes = (props) => {
  const [listaHorizontal, setListaHorizontal] = useState(0);
  const [detalheFilme, setDetalheFilme] = useState({});
  const [mostrarModal, setMostrarModal] = useState(false);

  const ordenarMaisVotado = () => {
    return props.listaDeFilmes.filmes.results.sort(
      (a, b) => parseFloat(b.vote_average) - parseFloat(a.vote_average)
    );
  };

  const tipo = props.listaDeFilmes.tipo;
  const Filmes = ordenarMaisVotado();
  const LarguraDaLista = Filmes.length * 300;

  const moverParaEsquerda = () => {
    let x = listaHorizontal + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setListaHorizontal(x);
  };

  const moverParaDireita = (e) => {
    let x = listaHorizontal - Math.round(window.innerWidth / 2);
    let listW = LarguraDaLista;

    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setListaHorizontal(x);
  };

  const mostrarDetalhes = (k) => {
    const filme = infomacoes(Filmes[k]);
    console.log(Filmes[k]);
    setDetalheFilme(filme);
    setMostrarModal((prevState) => !prevState);
  };

  const fecharModal = () => {
    setDetalheFilme({});
    setMostrarModal((prevState) => !prevState);
  };

  return (
    <>
      {mostrarModal && (
        <Modal>
          <FundoModal>
            <FecharModal onClick={fecharModal}>
              <svg
                viewBox="0 0 24 24"
                data-uia="previewModal-closebtn"
                role="button"
                aria-label="close"
                tabIndex="0"
              >
                <path
                  d="M12 10.586l7.293-7.293 1.414 1.414L13.414 12l7.293 7.293-1.414 1.414L12 13.414l-7.293 7.293-1.414-1.414L10.586 12 3.293 4.707l1.414-1.414L12 10.586z"
                  fill="currentColor"
                ></path>
              </svg>
            </FecharModal>

            <ImagemModal src={detalheFilme.cartaoFilme} />

            <Detalhes>
              <Nome>
                {detalheFilme.nome}
                <span>({detalheFilme.anoLançamento})</span>
              </Nome>
              <div>
                {detalheFilme.mediaVotos}{" "}
                <span style={{ color: "#3c2" }}>tmdb</span>
              </div>
              <Sinopse style={{ overflowX: "auto", maxHeight: 300 }}>
                <p>{detalheFilme.sinopse}</p>
              </Sinopse>
            </Detalhes>

            {/* Mobile */}
            <ImagemModalMobile cartaoFilme={detalheFilme.cartaoFilme}>
              <CoberturaBrancaMobile>
                <Nome style={{ maxWidth: 350 }}>
                  {detalheFilme.nome}
                  <span>({detalheFilme.anoLançamento})</span>
                </Nome>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: " 1.4rem",
                    fontWeight:800,
                  }}
                >
                  {detalheFilme.mediaVotos}
                  <span style={{ color: "#3c2", marginLeft: 10 }}>tmdb</span>
                </div>
                <Sinopse
                  style={{
                    overflowX: "auto",
                    maxWidth: "100vw",
                    fontSize: "1.2rem",
                  }}
                >
                  <p>{detalheFilme.sinopse}</p>
                </Sinopse>
                <FecharModalMobile onClick={fecharModal}>
                  Voltar
                </FecharModalMobile>
              </CoberturaBrancaMobile>
            </ImagemModalMobile>
          </FundoModal>
        </Modal>
      )}

      <AreaLinha>
        <BotaoEsquerda onClick={moverParaEsquerda}>
          <ArrowBackIosIcon />
        </BotaoEsquerda>
        <BotaoDireita onClick={(e) => moverParaDireita(e)}>
          <ArrowForwardIosIcon />
        </BotaoDireita>
        <Tipo>{tipo}</Tipo>
        <LinhaFilmes
          margemEsquerda={`${listaHorizontal}px`}
          largura={`${LarguraDaLista}px`}
        >
          {Filmes.length > 0 &&
            Filmes.map((item, k) => (
              <ItemFilme key={k} onClick={() => mostrarDetalhes(k)}>
                <AbsolutePontos>
                  <SpanProgress>
                    <SpanPontos>{item.vote_average}</SpanPontos>
                    <SmallProgress>tmdb</SmallProgress>
                  </SpanProgress>
                </AbsolutePontos>
                <AbsoluteNome>{item.title}</AbsoluteNome>
                <Imagem
                  src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`}
                  alt=""
                />
              </ItemFilme>
            ))}
        </LinhaFilmes>
      </AreaLinha>
    </>
  );
};

export default TodosFilmes;
