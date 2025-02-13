import styled from "styled-components";

const AppA = styled.a `
  color: #777;
  text-decoration: none;
  margin-top: 10px;
  font-size: 14px;
  margin-bottom: 24px;
  display: flex;
  justify-content: end;
`

function LinkSenha() {
  return (
    <AppA>Esqueceu sua senha?</AppA>
  )
}

export default LinkSenha;