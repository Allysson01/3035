import React from "react";
import {
  CarregamentoLayout,
  CarregamentoBanner,
  CarregamentoListaFilmes,
  DivEsquerda,
  DivDireita,
  ItemCartaoImg,
  ItemTexto,
  ItemOpcoes,
  ItemAvaliacaoTexto,
  ItemFilme,
} from "./style";

const Carregamento = () => {
  return (
    <>
      <CarregamentoLayout>
        <CarregamentoBanner>
          <DivEsquerda>
            <ItemTexto style={{ height: 40, width: 500, marginBottom: 15 }} />
            <ItemOpcoes>
              <ItemTexto
                style={{ height: 80, width: 80, borderRadius: "50%" }}
              />
              <ItemAvaliacaoTexto>
                <ItemTexto style={{ height: 8, width: 75 }} />
                <ItemTexto style={{ height: 8, width: 65 }} />
                <ItemTexto style={{ height: 8, width: 55 }} />
              </ItemAvaliacaoTexto>
              <ItemTexto
                style={{
                  marginLeft: 15,
                  height: 40,
                  width: 100,
                  borderRadius: 0,
                }}
              />
            </ItemOpcoes>
            <ItemTexto style={{ width: 450 }} />
            <ItemTexto style={{ width: 430 }} />
            <ItemTexto style={{ width: 410 }} />
            <ItemTexto style={{ width: 390 }} />
          </DivEsquerda>
          <DivDireita>
            <ItemCartaoImg />
          </DivDireita>
        </CarregamentoBanner>
        <CarregamentoListaFilmes>
          <ItemFilme />
          <ItemFilme />
          <ItemFilme />
          <ItemFilme />
          <ItemFilme />
        </CarregamentoListaFilmes>
        <CarregamentoListaFilmes>
          <ItemFilme />
          <ItemFilme />
          <ItemFilme />
          <ItemFilme />
          <ItemFilme />
        </CarregamentoListaFilmes>
        <CarregamentoListaFilmes>
          <ItemFilme />
          <ItemFilme />
          <ItemFilme />
          <ItemFilme />
          <ItemFilme />
        </CarregamentoListaFilmes>
      </CarregamentoLayout>
    </>
  );
};

export default Carregamento;
