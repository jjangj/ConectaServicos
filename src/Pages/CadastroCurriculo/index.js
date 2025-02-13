import Mkt from '../../Componentes/Mkt';
import styled from 'styled-components';
import FormCurriculo from '../../Componentes/FormCurriculo';

const AppMain = styled.main `
  display: flex;
  justify-content: center;
  align-items:center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`
function CadastroCurriculo() {
  return (
    <AppMain>
      <Mkt></Mkt>
      <FormCurriculo></FormCurriculo>    
    </AppMain>
  )
}

export default CadastroCurriculo;