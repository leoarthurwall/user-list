import styled from "styled-components";

const NameData = styled.p``;
const EmailData = styled.p``;
const PhoneData = styled.p``;
const PhotoData = styled.img`
  height: 50px;
  width: 50px;
  background-color: grey;
`;
const ShowData = styled.button`
  background-color: #93c5fd;
  padding: 10px;
  border: none;
  border-radius: 2px;
`;

const DataWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  user: any;
  id: number;
};

const UserRow: React.FC<Props> = ({ user, id }) => {
  const { name, email, phone, picture } = user;

  const handleShowClick = () => {
    console.log({id})
  }
  return (
    <>
      <DataWrapper>
        <NameData>
          {name.first} {name.last}
        </NameData>
      </DataWrapper>
      <DataWrapper>
        <EmailData>{email}</EmailData>
      </DataWrapper>
      <DataWrapper>
        <PhoneData>{phone}</PhoneData>
      </DataWrapper>
      <DataWrapper>
        <PhotoData src={picture.thumbnail} alt="user profile photo"></PhotoData>
      </DataWrapper>
      <DataWrapper>
        <ShowData onClick={handleShowClick}>Show</ShowData>
      </DataWrapper>
    </>
  );
};

export default UserRow;
