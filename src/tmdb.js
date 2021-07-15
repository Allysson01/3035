import { routeApi, keyApi } from "./RoutesAndKey/Rotas";
import axios from "axios";

const Busca = async (url) => {
  let resultado;
  await axios
    .get(`${routeApi}${url}`)
    .then((resp) => {
      resultado = resp.data;
    })
    .catch(function (err) {
      console.log(err);
      return;
    });
  return resultado;
};

const List = {
  carregaListaGeneros: async () => {
    return [await Busca(`/genre/movie/list?language=pt-br&api_key=${keyApi}`)];
  },

  getGenresListFilter: async (genresId, genreName) => {
    return [
      {
        title: genreName,
        items: await Busca(
          `/discover/movie?with_genres=${genresId}&language=pt-BR&api_key=${keyApi}`
        ),
      },
    ];
  },

  pesquisaFilmes: async (search) => {
    return [
      {
        tipo: `Busca: ${search}`,
        filmes: await Busca(
          `/search/movie?language=pt-BR&query=${search}&page=1&include_adult=false&api_key=${keyApi}`
        ),
      },
    ];
  },

  carregamentoDeLista: async () => {
    return [
      {
        tipo: "Tendências da semana",
        filmes: await Busca(
          `/trending/all/week?language=pt-BR&include_adult=false&api_key=${keyApi}`
        ),
      },
      {
        tipo: "Ação",
        filmes: await Busca(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${keyApi}`
        ),
      },
      {
        tipo: "Comédia",
        filmes: await Busca(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${keyApi}`
        ),
      },
      {
        tipo: "Terror",
        filmes: await Busca(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${keyApi}`
        ),
      },
      {
        tipo: "Romance",
        filmes: await Busca(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${keyApi}`
        ),
      },
      {
        tipo: "Documentários",
        filmes: await Busca(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${keyApi}`
        ),
      },
    ];
  },

  buscaDetalhes: async (movieId) => {
    if (movieId) {
      return await Busca(`/movie/${movieId}?language=pt-BR&include_adult=false&api_key=${keyApi}`);
    }
  },
};

export default List;
