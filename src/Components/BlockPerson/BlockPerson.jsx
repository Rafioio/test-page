// src/Components/PessoaBloco/index.jsx
import React from "react";
import { FlexRowContainer } from "../FlexRowContainer/Stiles";
import { TextContainer } from "../TextConteiner/Styles";
import { ImageContainer } from "../ImageContainer/Styles";
import {BlockPersonContainer} from "./Styles";
const PessoaBloco = ({ texto, imagem, alt, inverter = false }) => {
  return (
    <BlockPersonContainer>
    <FlexRowContainer >
      <TextContainer>
        <p>{texto}</p>
      </TextContainer>
      <ImageContainer>
        <img src={imagem} alt={alt} loading="lazy" />
      </ImageContainer>
    </FlexRowContainer>
    </BlockPersonContainer>
  );
};

export default PessoaBloco;
