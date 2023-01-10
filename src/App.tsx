import Users from "./Components/Users/Users";
import styled from "styled-components";

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Users />
    </Container>
  );
}

export default App;
