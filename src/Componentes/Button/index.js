import styled from 'styled-components';

const AppButton = styled.button`
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

const AppButton2 = styled.button`
background=red;`

function Button({ texto, onClick }) {
  console.log("Renderizando botão...");
  return <AppButton2 onClick={onClick}>{texto}</AppButton2>;
}

export default Button;