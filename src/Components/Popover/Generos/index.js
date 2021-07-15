import React, { useState, useEffect } from "react";
import { ContainerGenero, Genero, Ol, Li } from "./style";
import { sorteio } from "../../../Api/funcoes";
import TMDB from "../../../tmdb";

const PopoverGenero = (props) => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const buscaGenero = async () => {
      let listaGenero = await TMDB.carregaListaGeneros();
      setLista(listaGenero[0].genres);
    };

    buscaGenero();
  }, []);
  const mudarGenero = async (id) => {
    const generoNome = document.getElementById(id).innerText;

    const resultado = await TMDB.buscaPorGenero(id, generoNome);

    let numeroSorteado = await sorteio(resultado[0].filmes.results);

    let filmeEscolhido = resultado[0].filmes.results[numeroSorteado];

    let informacoesFilme = await TMDB.buscaDetalhes(filmeEscolhido.id);

    props.setDestaqueParaBanner(informacoesFilme);

    props.setListaDeFilmes(resultado);
    props.setAbrirGenerosMobile(false);
  };

  return (
    <>
      <ContainerGenero>
        <Genero>
          <Ol>
            {lista.map((item, k) => (
              <Li key={k} id={item.id} onClick={() => mudarGenero(item.id)}>
                {item.name}
              </Li>
            ))}
          </Ol>
        </Genero>
      </ContainerGenero>
    </>
  );
};

export default PopoverGenero;
