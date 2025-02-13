import styled from 'styled-components';

const AppH4 = styled.h4`
  font-size: 24px;
  width: 464px;
  margin: 8px 0;
  text-align: center;
`;

function Heading4({ texto }) {
  return <AppH4>{texto}</AppH4>;
}

export default Heading4;