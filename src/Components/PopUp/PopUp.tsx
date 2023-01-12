import styled from "styled-components";
import { IUsers } from "../../IUsers";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
type Props = {
  selectedUser: IUsers[];
  setSelectedUser: (val: IUsers[]) => void;
};

const PopUp: React.FC<Props> = ({ selectedUser, setSelectedUser }) => {
  return <Container>PopUp</Container>;
};

export default PopUp;
