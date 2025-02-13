import styled from "styled-components"
import Heading1 from "../Heading1";
import Inputs from '../Inputs';  
import Input from '../Input';
import Button from '../Button';
import Select from "../Select";

const AppForm = styled.div `
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function FormCurriculo(){
  return (
    <AppForm>
      <Heading1 texto="Cadastre seu currículo"></Heading1>
      <Inputs>
        <Input tipo="tel" label="Celular" placeholder="Digite seu celular"></Input>
        <Select label="Profissão"></Select>
        <Input tipo="number" label="Tempo de experiência" placeholder="Digite quantos anos você tem de experiência"></Input>
        <Button texto="Finalizar cadastro"/>
      </Inputs>
    </AppForm>
  )
}

export default FormCurriculo;