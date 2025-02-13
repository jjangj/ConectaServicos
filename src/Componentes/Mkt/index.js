import { useState, useEffect } from "react";
import styled from "styled-components";
import imagem1 from "../../imagens/Imagem.png";
import imagem2 from "../../imagens/Imagem2.png";
import Heading1 from "../Heading1";

const AppMkt1 = styled.div`
  min-height: 100vh;
  flex: 1;
  background-color: #3160e4;
  color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppP = styled.p`
  font-size: 16px;
  text-align: center;
  width: 464px;
  color: white;
`;

const AppImagem = styled.img`
  width: 60%;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const BolinhasContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Bolinha = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.ativo ? "white" : "gray")};
  border: none;
  cursor: pointer;
`;

const conteudos = [
  {
    imagem: imagem1,
    titulo: "Divulgue seu trabalho e seja encontrado por mais pessoas",
    texto: "Cadastre suas informações, divulgue as fotos dos resultados dos seus serviços e seja contratado"
  },
  {
    imagem: imagem2,
    titulo: "Tenha mais clientes e aumente sua renda",
    texto: "Mostre seu portfólio, receba avaliações e feche mais negócios"
  }
];

function Mkt() {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prevIndice) => (prevIndice + 1) % conteudos.length);
    }, 10000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <AppMkt1>
      <AppImagem src={conteudos[indice].imagem} alt="Imagem ilustrativa" />
      <Heading1 texto={conteudos[indice].titulo} color={'white'} />
      <AppP>{conteudos[indice].texto}</AppP>
      <BolinhasContainer>
        {conteudos.map((_, i) => (
          <Bolinha key={i} ativo={i === indice} onClick={() => setIndice(i)} />
        ))}
      </BolinhasContainer>
    </AppMkt1>
  );
}

export default Mkt;