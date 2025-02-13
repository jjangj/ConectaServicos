import styled from 'styled-components';

const AppBody = styled.body`
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

function Body() {
  return <AppBody></AppBody>;
}

export default Body;