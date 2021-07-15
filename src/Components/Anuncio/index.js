import React from "react";
import {
  AreaAnuncio,
  AnuncioDiv,
  Barra,
  Texto,
  SaibaMaisIndicacao,
  Imagem,
} from "./style";
import { infomacoes } from "../../Api/funcoes";

const Anuncio = (props) => {
  const filme1 = infomacoes(props.filme);
  const filme2 = infomacoes(props.filme2);

  return (
    <>
      <AreaAnuncio>
        <AnuncioDiv>
          <Barra>
            <Imagem src={filme1.banner} />
          </Barra>
          <Barra>
            <Texto>
              Sua indicação vale prêmios. <br />
              <SaibaMaisIndicacao>Saiba mais</SaibaMaisIndicacao> <br />
              Sempre com os melhores lançamentos
            </Texto>
          </Barra>
          <Barra>
            <Imagem src={filme2.banner} />
          </Barra>
        </AnuncioDiv>
      </AreaAnuncio>
    </>
  );
};

export default Anuncio;
