import styled from 'styled-components';

const AppButton = styled.button`
  all: unset; /* Reseta estilos padrões */
  background-color: #ff6937;
  color: white;
  padding: 12px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  width: 464px;
  margin-top: 40px;
  text-align: center;
  display: block;
`;

function Button({ texto }) {
  console.log("Renderizando o botãoaaaaaaaaaiaaaiiiaaa")
  return <AppButton>{texto}</AppButton>;
}

export default Button;