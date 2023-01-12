import styled from "styled-components";
import { IUsers } from "../../IUsers";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Name = styled.h3``;
const Picture = styled.img``;
const Span = styled.span`
  font-weight: bold;
`;

const Joined = styled.p``;
type Props = {
  selectedUser: IUsers[];
  setSelectedUser: (val: IUsers[]) => void;
};

const PopUp: React.FC<Props> = ({ selectedUser, setSelectedUser }) => {
  const { name, picture, registered } = selectedUser[0];
  return (
    <Container>
      <Name>
        {name.title} {name.first} {name.last}
      </Name>
      <Picture src={picture.large} alt="user image" />
      <Joined>
        <Span>Joined:</Span> {registered.date} ({registered.age} years ago)
      </Joined>
    </Container>
  );
};

export default PopUp;
