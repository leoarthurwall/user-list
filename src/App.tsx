import Users from "./Components/Users/Users";
import styled from "styled-components";

const Container = styled.main`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

function App() {
  return (
    <Container>
      <Users />
    </Container>
  );
}

export default App;
