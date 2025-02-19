import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import Heading1 from "../Heading1";
import Inputs from '../Inputs';  
import Input from '../Input';
import Button from '../Button';
import LinkAlternativo from "../LinkAlternativo";

const AppForm = styled.div `
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function FormCadastro(){
  const navigate = useNavigate();
  const handleCadastro = () => {
    console.log("akakaka");
    navigate("/cadastro-curriculo");
  };

  return (
    <AppForm>
      <Heading1 texto="Crie sua conta"></Heading1>
      <Inputs>
        <Input tipo="text" label="Nome" placeholder="Digite seu nome" />
        <Input tipo="text" label="Sobrenome" placeholder="Digite seu sobrenome" />
        <Input tipo="date" label="Data de nascimento" placeholder="Digite sua data de nascimento"></Input>
        <Input tipo="email" label="E-mail" placeholder="Digite seu e-mail"></Input>
        <Input tipo="password" label="Senha" placeholder="Digite uma senha"></Input>
        <Button texto="Cadastre-se" onClick={handleCadastro} />
        <LinkAlternativo texto="Já possui uma conta? " linkTexto="Entre agora" to="/login"/>
      </Inputs>
    </AppForm>
  )
}

export default FormCadastro;