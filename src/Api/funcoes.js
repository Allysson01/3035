import TMDB from "../tmdb";

export const infomacoes = (dados) => {
  const urlBase = `https://image.tmdb.org/t/p/original`;

  const nome =
    dados.name !== undefined
      ? dados.name
      : dados.title !== undefined
      ? dados.title
      : "";

  const dataLançamento =
    dados.first_air_date !== undefined
      ? dados.first_air_date
      : dados.release_date !== undefined
      ? dados.release_date
      : null;

  return {
    nome: nome,
    mediaVotos: dados.vote_average,
    anoLançamento: new Date(dataLançamento).getFullYear(),
    banner: `${urlBase}${dados.backdrop_path}`,
    cartaoFilme: `${urlBase}${dados.poster_path}`,
    paginaPadrao: dados.homepage,
    sinopse: dados.overview,
  };
};

export const sorteio = async (lista) => {
  return Math.floor(Math.random() * (lista.length - 1));
};

export const carregarFilmes = async () => {
  const lista = await TMDB.carregamentoDeLista();
  
  let numeroSorteado = await sorteio(lista);
  let FilmeEscolhido = lista[numeroSorteado].filmes.results[numeroSorteado];
  const banner = await TMDB.buscaDetalhes(FilmeEscolhido.id);

  if (banner.adult) return carregarFilmes();

  numeroSorteado = await sorteio(lista);
  FilmeEscolhido = lista[numeroSorteado].filmes.results[numeroSorteado];

  const InformacoesAnuncio1 = await TMDB.buscaDetalhes(FilmeEscolhido.id);

  numeroSorteado = await sorteio(lista);
  FilmeEscolhido = lista[numeroSorteado].filmes.results[numeroSorteado];

  const InformacoesAnuncio2 = await TMDB.buscaDetalhes(FilmeEscolhido.id);

  return {
    lista: lista,
    destaqueBanner: banner,
    anuncio1: InformacoesAnuncio1,
    anuncio2: InformacoesAnuncio2,
  };
};
