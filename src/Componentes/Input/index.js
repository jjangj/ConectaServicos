import styled from 'styled-components';

const InputContainer = styled.div`
  label {
    color: #333';
    display: block;
    text-align: left;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`;

function Input({ tipo, label, placeholder }) {
  return (
    <InputContainer>
      <label>{label}</label>
      <input type={tipo} placeholder={placeholder} />
    </InputContainer>
  );
}

export default Input;