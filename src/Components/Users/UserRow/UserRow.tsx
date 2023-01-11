import styled from "styled-components"
import { IUsers } from "../../../IUsers";

const NameData = styled.p`
  border: 2px solid yellow;
  text-align: center;
`;
const EmailData = styled.p`
  border: 2px solid yellow;
`;
const PhoneData = styled.p`
  border: 2px solid yellow;
`;
const PhotoData = styled.img`
  height: 40px;
  width: 40px;
  background-color: grey;
  border: 2px solid yellow;
`;
const ShowData = styled.button`
  border: 2px solid yellow;
`;

const DataWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
    user:any
  };

const UserRow: React.FC<Props>  = ({user}) => {
    const {name, email, phone, picture} = user
  return (
      <>
          <DataWrapper>
            <NameData>{name.first} {name.last}</NameData>
          </DataWrapper>
          <DataWrapper>
            <EmailData>{email}</EmailData>
          </DataWrapper>
          <DataWrapper>
            <PhoneData>{phone}</PhoneData>
          </DataWrapper>
          <DataWrapper>
            <PhotoData src={picture.thumbnail}></PhotoData>
          </DataWrapper>
          <DataWrapper>
            <ShowData>Show</ShowData>
          </DataWrapper>
        </>
      
  )
}

export default UserRow