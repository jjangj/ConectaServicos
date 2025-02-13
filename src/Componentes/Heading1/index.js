import styled from 'styled-components';

const AppH1 = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: ${(props) => props.color};
  text-wrap: balance;
  text-align: center;
`;

function Heading1({texto, color}) {
  return <AppH1 color='color'>{texto}</AppH1>;
}

export default Heading1;