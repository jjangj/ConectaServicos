import styled from "styled-components"
import Heading1 from "../Heading1";
import Inputs from '../Inputs';  
import Input from '../Input';
import Button from '../Button';
import LinkSenha from "../LinkSenha";
import LinkAlternativo from "../LinkAlternativo";

const AppForm = styled.div `
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function FormLogin(){
  return (
    <AppForm>
      <Heading1 texto="Entre na sua conta"></Heading1>
      <Inputs>
        <Input tipo="email" label="E-mail" placeholder="Digite seu e-mail"></Input>
        <Input tipo="password" label="Senha" placeholder="Digite uma senha"></Input>
        <LinkSenha></LinkSenha>
        <Button texto="Entrar"/>
        <LinkAlternativo texto="Ainda não possui uma conta? " linkTexto="Cadastre-se"/>
      </Inputs>
    </AppForm>
  )
}

export default FormLogin;