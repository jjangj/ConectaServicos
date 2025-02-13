import styled from "styled-components";

const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  font-weight: 500;
`;

const AppSelect = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 14px; /* Ajustado para 14px */
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: #3160e4;
  }
`;

function Select({ label }) {
  return (
    <SelectContainer>
      {label && <Label htmlFor="profissao">{label}</Label>}
      <AppSelect id="profissao" name="Profissão" required defaultValue="">
        <option value="" disabled>Selecione a sua profissão</option>
        <option value="diarista">Diarista</option>
        <option value="eletricista">Eletricista</option>
        <option value="encanador">Encanador</option>
        <option value="jardineiro">Jardineiro</option>
        <option value="marceneiro">Marceneiro</option>
        <option value="pintor">Pintor</option>
        <option value="pedreiro">Pedreiro</option>
        <option value="serralheiro">Serralheiro</option>
      </AppSelect>
    </SelectContainer>
  );
}

export default Select;
