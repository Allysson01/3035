import React from "react";
import { infomacoes } from "../../Api/funcoes";
import {
  BannerFilme,
  EfeitoSombraDeBaixo,
  EfeitoSombra,
  DivDireita,
  DivEsquerda,
  Imagem,
  Nome,
  Ul,
  Li,
  Sinopse,
  DivProgrees,
  Span,
  SpanProgress,
  BotaoPlay,
  SmallProgress,
  SpanPontos,
} from "./style";
const Banner = (props) => {
  const filme = infomacoes(props.filme);

  return (
    <>
      <span id="topo"></span>
      <BannerFilme
        backdrop={filme.banner}
        id="Banner"
        cartaoFilme={filme.cartaoFilme}
      >
        <EfeitoSombraDeBaixo></EfeitoSombraDeBaixo>
        <EfeitoSombra></EfeitoSombra>
        <DivEsquerda>
          <Nome>
            {filme.nome}
            <span>({filme.anoLançamento})</span>
          </Nome>
          <Ul>
            <Li>
              <DivProgrees>
                <SpanProgress>
                  <SpanPontos>{filme.mediaVotos}</SpanPontos>
                  <SmallProgress>tmdb</SmallProgress>
                </SpanProgress>
                <Span>Avaliação dos usuários</Span>
              </DivProgrees>
            </Li>
            <Li>
              <BotaoPlay onClick={() => window.open(filme.paginaPadrao)} />
            </Li>
          </Ul>
          <Sinopse>{filme.sinopse}</Sinopse>
        </DivEsquerda>
        <DivDireita>
          <Imagem src={filme.cartaoFilme} />
        </DivDireita>
      </BannerFilme>
    </>
  );
};

export default Banner;
