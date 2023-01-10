import Users from "./Components/Users/Users";
import styled from "styled-components";

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

function App() {
  return (
    <Container>
      <Users />
    </Container>
  );
}

export default App;
