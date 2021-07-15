import React from "react";
import { Areamodal, Conteudo } from "./style";

const Anuncio = (props) => {
  return (
    <>
      <Areamodal id="Areamodal">
        <Conteudo>{props.children}</Conteudo>
      </Areamodal>
    </>
  );
};

export default Anuncio;
