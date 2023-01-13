import styled from "styled-components";
import { IUsers } from "../../../IUsers";
import { useState } from "react";

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
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #6397ca;
  }
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
  userData: IUsers[];
  setSelectedUser: (val: IUsers[]) => void;
};

const UserRow: React.FC<Props> = ({ user, userData, setSelectedUser }) => {
  const { name, email, phone, picture } = user;

  const [showClicked, setShowClicked] = useState(true);

  //CONTINUE HERE - GIVE ID TO ELEMENT AND THEN MATCH IN FILTER
  const handleShowClick = () => {
    const showButtonUserId = user.login.uuid;
    setSelectedUser(
      [...userData].filter(
        (filterUser) => filterUser.login.uuid === showButtonUserId
      )
    );
    setShowClicked(!showClicked);
  };
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
        {showClicked ? (
          <ShowData onClick={handleShowClick}>Show</ShowData>
        ) : (
          <ShowData onClick={handleShowClick}>Hide</ShowData>
        )}
      </DataWrapper>
    </>
  );
};

export default UserRow;
