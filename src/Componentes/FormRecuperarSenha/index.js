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

function FormRecuperarSenha(){
  return (
    <AppForm>
      <Heading1 texto="Recuperar senha"></Heading1>
      <Inputs>
        <Input tipo="email" label="E-mail" placeholder="Digite seu e-mail"></Input>
        <Button texto="Enviar e-mail"/>
      </Inputs>
    </AppForm>
  )
}

export default FormRecuperarSenha;