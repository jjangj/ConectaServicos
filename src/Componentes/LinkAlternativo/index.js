import { Link } from "react-router-dom";
import styled from "styled-components";

const AppA = styled.div`
  color: #777; 
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const AppLink = styled(Link)`
  color: #3160e4; 
  text-decoration: none;
  margin-left: 8px;
  &:hover {
    text-decoration: underline;
    cursor:pointer;
  }
`;

function LinkAlternativo({ texto, linkTexto, to}) {
  return (
    <AppA>
      {texto} <AppLink to={to}>{linkTexto}</AppLink>
    </AppA>
  );
}

export default LinkAlternativo;
